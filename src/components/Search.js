import "../App.css";
import axios from "axios";
import { useState } from "react";
import SearchResults from "../components/SerchResults";
import Header from "../components/Header";
import BookImage from "../books2.jpg";
import { useBookContext } from "../contexts/bookContext";

function Search(props) {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);

  const { favourites, addToFavourites, removeFromFavourites } = useBookContext();


  function searchClicked(event) {
    const book = event.target.value;
    setBook(book);
  }

  function handleSearch(event) {
    event.preventDefault();
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${book}&key=AIzaSyAy9LvRLBy_u1s3QVjPUTDWyo0Meq1eFMY&maxResults=30`
      )
      .then((response) => {
        console.log(response.data.items);
        setResult(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <Header name="Tramore" />
       <div className=""> <div className="firstRow"></div>
    
        <SearchResults
          result={result}
          favourites={favourites}
          addToFavourites={addToFavourites}
          removeFromFavourites={removeFromFavourites}
        />
      </div>
      <div className="leftColumn">
        <h2>Search for book</h2>
        <img src={BookImage} alt="Image of books" />
        <div className="searching">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              onChange={searchClicked}
              className="form-control"
              placeholder="Search"
             // autoComplete="off"
            />
            <button type="submit" className="btn btn-danger">
              Search
            </button>
          </form>
        </div>
      </div>
    
    </>
  );
}

export default Search;
