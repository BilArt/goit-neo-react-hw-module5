import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
    return (
        <ul>
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </ul>
    );
};

MovieList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default MovieList;
