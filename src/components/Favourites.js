import React from "react";
import { useBookContext } from "../contexts/bookContext";

const Favourites = () => {
  const { favourites } = useBookContext();

  return (
    <div className="favourites">
      {favourites.map((book) => (
        <div className="container">
          <div></div>
          <div>
            <img
              src={book.volumeInfo.imageLinks?.smallThumbnail}
              alt={book.title}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Favourites;
