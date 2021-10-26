/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import Downshift from "downshift";
import { Input } from "./lib";

const Search = ({ handleChange, filteredProducts }) => {
  return (
    <>
      <Downshift itemToString={(products) => (products ? products.title : "")}>
        {({
          getLabelProps,
          getInputProps,
          getItemProps,
          getMenuProps,
          getRootProps,
          highlightedIndex,
          isOpen,
          inputValue,
        }) => (
          <div
            css={css`
              position: relative;
            `}
            {...getRootProps()}
          >
            <Input
              {...getInputProps({
                placeholder: "Search products",
                onChange: (e) => handleChange(e.target.value),
              })}
            />
            <div
              css={css`
                position: absolute;
                width: 100%;
                background: #fff;
                left: 0;
              `}
              {...getMenuProps({
                style: isOpen ? { maxHeight: 200, overflowY: "scroll" } : null,
              })}
            >
              {isOpen
                ? filteredProducts?.map((product, index) => (
                    <div
                      {...getItemProps({ item: product, key: product.id })}
                      style={{
                        backgroundColor:
                          highlightedIndex === index ? "gray" : null,
                        color: highlightedIndex === index ? "white" : null,
                      }}
                    >
                      {product.title}
                    </div>
                  ))
                : null}
            </div>
          </div>
        )}
      </Downshift>
    </>
  );
};

export default Search;
