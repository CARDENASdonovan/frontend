import {
  Consumable,
  ConsumableCategory,
  CreateConsumableDto,
  UpdateConsumableDto,
} from "@/types/api/ConsumableApi";

export * from "@/types/api/ConsumableApi";

const API_BASE_URL = import.meta.env.VITE_API_URL || "/api/v1";

const CONSUMABLES_URL = `${API_BASE_URL}/consumables`;

async function handleResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    let errorMessage = `HTTP error ${res.status}: ${res.statusText}`;
    try {
      const errorBody = await res.json();
      if (errorBody && errorBody.message) {
        errorMessage = Array.isArray(errorBody.message)
          ? errorBody.message.join(", ")
          : errorBody.message;
      }
    } catch {
      // Body is not JSON
    }
    throw new Error(errorMessage);
  }

  if (res.status === 204) {
    return undefined as unknown as T;
  }

  return res.json() as Promise<T>;
}

/**
 * Retrieve all consumables from the backend.
 * GET /api/v1/consumables
 */
export async function getAllConsumables(): Promise<Consumable[]> {
  const res = await fetch(CONSUMABLES_URL, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  return handleResponse<Consumable[]>(res);
}

/**
 * Retrieve a single consumable by its UUID.
 * GET /api/v1/consumables/:id
 */
export async function getConsumableById(id: string): Promise<Consumable> {
  const res = await fetch(`${CONSUMABLES_URL}/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  return handleResponse<Consumable>(res);
}

/**
 * Retrieve all consumables belonging to a specific category.
 * GET /api/v1/consumables/category/:category
 */
export async function getConsumablesByCategory(
  category: ConsumableCategory
): Promise<Consumable[]> {
  const res = await fetch(`${CONSUMABLES_URL}/category/${category}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  return handleResponse<Consumable[]>(res);
}

/**
 * Create multiple consumables (batch import).
 * POST /api/v1/consumables
 */
export async function createConsumables(
  items: CreateConsumableDto[]
): Promise<Consumable[]> {
  const res = await fetch(CONSUMABLES_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(items),
  });
  return handleResponse<Consumable[]>(res);
}

/**
 * Convenience helper to create a single consumable.
 * POST /api/v1/consumables
 */
export async function createConsumable(
  item: CreateConsumableDto
): Promise<Consumable> {
  const createdList = await createConsumables([item]);
  return createdList[0];
}

/**
 * Update an existing consumable by UUID.
 * PATCH /api/v1/consumables/:id
 */
export async function updateConsumable(
  id: string,
  data: UpdateConsumableDto
): Promise<Consumable> {
  const res = await fetch(`${CONSUMABLES_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });
  return handleResponse<Consumable>(res);
}

/**
 * Delete a consumable by UUID.
 * DELETE /api/v1/consumables/:id
 */
export async function deleteConsumable(id: string): Promise<void> {
  const res = await fetch(`${CONSUMABLES_URL}/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
    },
  });
  return handleResponse<void>(res);
}

export const consumableHelper = {
  getAllConsumables,
  getConsumableById,
  getConsumablesByCategory,
  createConsumables,
  createConsumable,
  updateConsumable,
  deleteConsumable,
};

export default consumableHelper;
