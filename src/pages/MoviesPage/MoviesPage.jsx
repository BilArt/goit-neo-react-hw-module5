// MoviesPage.jsx
import { searchMovies } from '../../services/tmdbAPI';
import { useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');
    const [error, setError] = useState(null);

    const handleSearch = async (event) => {
        event.preventDefault();
        if (!query) {
            setError('Please enter a search query'); 
            return;
        }
        setError(null);
        try {
            const results = await searchMovies(query);
            setMovies(results);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder="Search for a movie..."
                />
                <button type="submit">Search</button>
            </form>
            {error && <div>{error}</div>}
            <MovieList movies={movies} />
        </div>
    );
};

export default MoviesPage;
