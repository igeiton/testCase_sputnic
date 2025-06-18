export type ProductType = {
  id: number;
  title: string;
  origin: ProductOriginType;
  prices: PriceCurrencyType[];
  image_url: string;
};

type ProductOriginType = "USA" | "UK" | "RU";

export type PriceCurrencyType = {
  amount: number;
  currency: "RUB" | "USD" | "EUR";
};
