import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  Consumable,
  ConsumableCategory,
  consumableHelper,
  CreateConsumableDto,
  UpdateConsumableDto,
} from "@/helper/api/backend/consumable.helper";

export const CONSUMABLES_QUERY_KEY = ["consumables"] as const;

/**
 * Hook to retrieve all consumables or filter by category with automatic caching.
 */
export function useConsumables(category?: ConsumableCategory | "all") {
  return useQuery<Consumable[], Error>({
    queryKey: [...CONSUMABLES_QUERY_KEY, category ?? "all"],
    queryFn: () => {
      if (category && category !== "all") {
        return consumableHelper.getConsumablesByCategory(category);
      }
      return consumableHelper.getAllConsumables();
    },
  });
}

/**
 * Hook to retrieve a single consumable by its UUID.
 */
export function useConsumable(id: string) {
  return useQuery<Consumable, Error>({
    queryKey: [...CONSUMABLES_QUERY_KEY, "detail", id],
    queryFn: () => consumableHelper.getConsumableById(id),
    enabled: Boolean(id),
  });
}

/**
 * Hook to batch create multiple consumables.
 */
export function useCreateConsumables() {
  const queryClient = useQueryClient();

  return useMutation<Consumable[], Error, CreateConsumableDto[]>({
    mutationFn: (items: CreateConsumableDto[]) =>
      consumableHelper.createConsumables(items),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CONSUMABLES_QUERY_KEY });
    },
  });
}

/**
 * Hook to create a single consumable.
 */
export function useCreateConsumable() {
  const queryClient = useQueryClient();

  return useMutation<Consumable, Error, CreateConsumableDto>({
    mutationFn: (item: CreateConsumableDto) =>
      consumableHelper.createConsumable(item),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CONSUMABLES_QUERY_KEY });
    },
  });
}

/**
 * Hook to update an existing consumable.
 */
export function useUpdateConsumable() {
  const queryClient = useQueryClient();

  return useMutation<
    Consumable,
    Error,
    { id: string; data: UpdateConsumableDto }
  >({
    mutationFn: ({ id, data }) => consumableHelper.updateConsumable(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CONSUMABLES_QUERY_KEY });
    },
  });
}

/**
 * Hook to delete a consumable by UUID with automatic cache invalidation.
 */
export function useDeleteConsumable() {
  const queryClient = useQueryClient();

  return useMutation<void, Error, string>({
    mutationFn: (id: string) => consumableHelper.deleteConsumable(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CONSUMABLES_QUERY_KEY });
    },
  });
}

