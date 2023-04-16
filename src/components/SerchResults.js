import { useState } from "react";

const SearchResults = ({
  result,
  favourites,
  addToFavourites,
  removeFromFavourites,
}) => {
  const [visible, setVisible] = useState(5);

  const showMoreBooks = () => {
    setVisible((preValue) => preValue + 5);
  };

  const checkFavs = (id) => {
    const boolean = favourites.some((book) => book.id === id);
    return boolean;
  };

  return (
    <>
      <div className="container">
        {result.slice(0, visible).map((book) => (
          <div className="container">
            <div className="bookCard">
              <div className=""></div>
              <a target="blank" href={book.volumeInfo.previewLink}>
                <div>
                  <p className="title"> {book.volumeInfo.title}</p>{" "}
                </div>
                <img
                  key={book.id}
                  src={book.volumeInfo.imageLinks?.smallThumbnail}
                  alt={book.title}
                />
              </a>

              <div className="favourite">
                {checkFavs(book.id) ? (
                  <button onClick={() => removeFromFavourites(book.id)}>
                    Remove From Favourites
                  </button>
                ) : (
                  <button onClick={() => addToFavourites(book)}>
                    Add to Favourites
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
        <div className="loadButton">
          <button onClick={showMoreBooks}>Load More </button>
        </div>
      </div>
    </>
  );
};

export default SearchResults;
