import type { FC } from "react";

import type { ProductType } from "../../types/productTypes";

import "./ProductCard.css";
import { formatCurrency } from "../../utilities/currencyFormat";

type ProductCardProps = {
  product: ProductType;
};

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { title, origin, prices, image_url } = product;

  return (
    <div className="product-card">
      <div className="product-card__image">
        <img src={image_url} alt={title} />
      </div>

      <span className="product-card__title">{title}</span>
      <span className="product-card__origin">{origin}</span>

      <div className="product-card__price">
        {prices.map((price) => (
          <span key={price.currency}>{formatCurrency(price)}</span>
        ))}
      </div>
    </div>
  );
};
