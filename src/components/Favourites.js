import React from "react";
import { useBookContext } from "../contexts/bookContext";


const Favourites = () => {
  const { favourites } =
    useBookContext();

  const checkFavs = (id) => {
    const boolean = favourites.some((book) => book.id === id);
    return boolean;
  };

  return (
    <div className="favourites">
      {favourites.map((book) => (
        <div className="container" >
         
            <div>
            </div>
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
