import { matchSorter } from "match-sorter";

function useFilter(products, search) {
  console.log(search);
  if (!search) {
    return products;
  }
  const filteredProducts = matchSorter(products, search, { keys: ["title"] });

  return filteredProducts;
}

export { useFilter };
