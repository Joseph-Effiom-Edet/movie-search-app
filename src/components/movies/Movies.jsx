import React from "react";
import { useEffect } from "react";
import "./movies.scss";
import axios from "axios";
import { useState } from "react";

function Movies({ searchValue }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(
          ` http://www.omdbapi.com/?s=${searchValue}&apikey=c8eb1d2a`
        );
        data.data.Search && setMovies(data.data.Search);
      } catch (error) {}
    };

    fetchData();
  }, [searchValue]);

  return (
    <div className="movies-container">
      <div className="movies-wrapper">
        <div className="movie-list-section">
          <div className="movie-list-sub-section">
            <span className="movie-category-name">{searchValue}</span>
            <div className="movies">
              {movies.map((movie) => (
                <div key={movie.imdbID} className="single-movie">
                  <img src={movie.Poster} alt="" />
                  <span>{movie.Title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="movie-list-sub-section">
            <span className="movie-category-name">{searchValue}</span>
            <div className="movies">
              {movies.map((movie) => (
                <div key={movie.imdbID} className="single-movie">
                  <img src={movie.Poster} alt="" />
                  <span>{movie.Title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movies;
