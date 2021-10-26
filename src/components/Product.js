/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { Button } from "./lib";
import Rating from "./Rating";

function ProductCard({ children }) {
  return (
    <div
      css={css`
        display: grid;
        grid-template-rows: 40% 45% 15%;
        max-height: 400px;
        justify-items: center;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      `}
    >
      {children}
    </div>
  );
}
function ProductHeader({ children }) {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1em;
        width: 100%;
        height: 100%;
      `}
    >
      {children}
    </div>
  );
}
function ProductBody({ children }) {
  return (
    <div
      css={css`
        padding: 5px 2em;
        text-align: center;
      `}
    >
      {children}
    </div>
  );
}
function ProductFooter({ children }) {
  return <>{children}</>;
}

const Product = ({ product }) => {
  return (
    <ProductCard>
      <ProductHeader>
        <img height="100%" width="50%" src={product.image} alt="" />
      </ProductHeader>
      <ProductBody>
        <h3>{product.category}</h3>
        <p>{product.title.slice(0, 50)}...</p>
        <h3>${product.price}</h3>
        <Rating rating={product.rating.rate} />
      </ProductBody>
      <ProductFooter>
        <Button>Add to card</Button>
      </ProductFooter>
    </ProductCard>
  );
};

export default Product;
