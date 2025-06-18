import type { PriceCurrencyType } from "../types/productTypes";

export const formatCurrency = ({
  amount,
  currency,
}: PriceCurrencyType): string => {
  return new Intl.NumberFormat(navigator.language, {
    style: "currency",
    currency: currency,
  }).format(amount);
};
