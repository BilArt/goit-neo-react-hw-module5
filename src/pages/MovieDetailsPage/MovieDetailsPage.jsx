import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../services/tmdbAPI';
import PropTypes from 'prop-types';
import styles from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
    const { movieId } = useParams(); 
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getMovieDetails = async () => {
            try {
                const data = await fetchMovieDetails(movieId);
                setMovie(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        getMovieDetails();
    }, [movieId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!movie) {
        return <div>No movie found.</div>;
    }

    const { title, overview, release_date, vote_average, poster_path } = movie;

    return (
        <div className={styles.movieDetails}>
            <h1>{title}</h1>
            {poster_path && (
                <img
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={title}
                />
            )}
            <p><strong>Overview:</strong> {overview}</p>
            <p><strong>Release Date:</strong> {release_date}</p>
            <p><strong>Rating:</strong> {vote_average}</p>
        </div>
    );
};

MovieDetailsPage.propTypes = {
    movieId: PropTypes.string,
};

export default MovieDetailsPage;
