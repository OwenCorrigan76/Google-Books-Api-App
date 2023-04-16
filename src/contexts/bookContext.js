import React, { useState, useContext } from "react";
import { createContext } from "react";

const BookContext = createContext(null);

export const useBookContext = () => {
  const context = useContext(BookContext);

  if (context === undefined) {
    throw new Error("Not in the provider");
  }
  return context;
};

const BookContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (book) => {
    const oldFavourites = [...favourites];
    const newFavourites = oldFavourites.concat(book);
    setFavourites(newFavourites);
    console.log("ADDING TO FAVOURITES...", newFavourites);
  };

  const removeFromFavourites = (id) => {
    const oldFavourites = [...favourites];
    const newFavourites = oldFavourites.filter((book) => id !== id);
    setFavourites(newFavourites);
  };

  return (
    <BookContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
