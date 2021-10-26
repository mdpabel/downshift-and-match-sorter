/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import { useAsync } from "./hooks/useAsync";
import { useFilter } from "./hooks/useFilter";
import Products from "./screens/Products";
import { client } from "./utils/api-client";

function App() {
  const [search, setSearch] = useState("");
  const { run, data: products, status, error } = useAsync();
  const filteredProducts = useFilter(products, search);

  useEffect(() => {
    run(client("products"));
  }, [run]);

  function handleChange(value) {
    setSearch(value);
  }

  return (
    <section
      css={css`
        width: 80%;
        margin: 0 auto;
        padding: 2em 0;
      `}
    >
      <Search
        filteredProducts={filteredProducts}
        handleChange={handleChange}
        value={search}
      />

      <div
        css={css`
          display: grid;
          grid-template-rows: 400px;
          grid-template-columns: repeat(3, 33%);
          grid-gap: 2em;
        `}
      >
        <Products
          status={status}
          filteredProducts={filteredProducts}
          error={error}
        />
      </div>
    </section>
  );
}

export default App;
