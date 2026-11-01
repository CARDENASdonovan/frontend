export enum ConsumableCategory {
  FOOD = "food",
  BEVERAGE = "beverage",
  OTHER = "other",
}

export enum QuantityUnit {
  KG = "kg",
  L = "L",
  UNIT = "unit",
  BOX = "box",
}

export enum PriceCurrency {
  EUR = "EUR",
  USD = "USD",
  GBP = "GBP",
  JPY = "JPY",
  CAD = "CAD",
  AUD = "AUD",
  CHF = "CHF",
  CNY = "CNY",
  SEK = "SEK",
  NZD = "NZD",
}

export interface Consumable {
  id: string;
  name: string;
  category: ConsumableCategory;
  description: string | null;
  price: number;
  priceCurrency: PriceCurrency;
  quantity: number;
  quantityUnit: QuantityUnit;
  lastPurchasedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface CreateConsumableDto {
  name: string;
  category: ConsumableCategory;
  description?: string;
  price: number;
  priceCurrency?: PriceCurrency;
  quantity: number;
  quantityUnit: QuantityUnit;
  lastPurchasedAt?: Date | string;
}

export interface UpdateConsumableDto {
  name?: string;
  category?: ConsumableCategory;
  description?: string;
  price?: number;
  priceCurrency?: PriceCurrency;
  quantity?: number;
  quantityUnit?: QuantityUnit;
  lastPurchasedAt?: Date | string;
}
