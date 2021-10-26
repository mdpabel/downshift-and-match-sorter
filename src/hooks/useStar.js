import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";

function useStar(rating) {
  const [a, b] = rating.toString().split(".");

  let ratings = [];

  if (a) {
    for (let i = 0; i < +a; i++) {
      ratings.push(<FaStar />);
    }
  }
  if (b) {
    ratings.push(<FaStarHalfAlt />);
  }

  const rem = 5 - ratings.length;

  if (ratings.length < 5) {
    for (let i = 0; i < rem; i++) {
      ratings.push(<FaRegStar />);
    }
  }

  return ratings;
}

export { useStar };
