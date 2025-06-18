import type { FC } from "react";

import { ProductCard } from "../../components/productCard/ProductCard";

import type { ProductType } from "../../types/productTypes";
import data from "../../../../public/data.json";

import "./Products.css";

export const Products: FC = () => {
  const { product_cards } = data as { product_cards: ProductType[] };

  return (
    <div className="products">
      {product_cards.map((product_card) => (
        <ProductCard key={product_card.id} product={product_card} />
      ))}
    </div>
  );
};
