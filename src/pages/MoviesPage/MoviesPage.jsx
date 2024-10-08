import { searchMovies } from "../../services/tmdbAPI";
import { useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import styles from './MoviesPage.module.css';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);

  const handleSearch = async (event) => {
    event.preventDefault();
    if (!query) {
      setError("Please enter a search query");
      return;
    }
    setError(null);
    try {
      const results = await searchMovies(query);
      console.log('API response:', results);
      setMovies(results.results);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={styles.moviesPage}>
      <form onSubmit={handleSearch} className={styles.searchForm}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>Search</button>
      </form>
      {error && <div>{error}</div>}
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
