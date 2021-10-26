import React from "react";
import { useStar } from "../hooks/useStar";

const Rating = ({ rating = 0 }) => {
  const ratings = useStar(rating);

  return ratings.map((r, i) => (
    <span style={{ color: "#ffb201" }} key={i}>
      {r}
    </span>
  ));
};

export default Rating;
