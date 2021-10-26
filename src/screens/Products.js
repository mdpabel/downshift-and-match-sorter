/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import Product from "../components/Product";

const Products = ({ filteredProducts, status, error }) => {
  const isIdle = status === "idle";
  const isLoading = status === "pending";
  const isSuccess = status === "resolved";
  const isError = status === "rejected";

  if (isLoading || isIdle) {
    return <h3>Loading...</h3>;
  }

  if (isError) {
    return (
      <pre
        css={css`
          color: red;
        `}
      >
        Something went wrong : {error}
      </pre>
    );
  }

  if (isSuccess) {
    return filteredProducts?.map((product) => (
      <Product key={product.id} product={product} />
    ));
  }
  return <div></div>;
};

export default Products;
