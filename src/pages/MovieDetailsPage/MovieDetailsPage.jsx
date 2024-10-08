import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../../services/tmdbAPI';
import MovieCast from '../../components/MovieCast/MovieCast';
import MovieReviews from '../../components/MovieReviews/MovieReviews';
import styles from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const getMovieDetails = async () => {
      const data = await fetchMovieDetails(movieId);
      setMovie(data);
    };

    getMovieDetails();
  }, [movieId]);

  const toggleCast = () => {
    setShowCast(prevState => !prevState);
    setShowReviews(false);
  };

  const toggleReviews = () => {
    setShowReviews(prevState => !prevState);
    setShowCast(false);
  };

  const handleGoBack = () => {
    if (location.state && location.state.from) {
      navigate(location.state.from);
    } else {
      navigate('/movies');
    }
  };

  if (!movie) return <div>Loading...</div>;

  const { title, poster_path, vote_average, overview, genres } = movie;
  const posterUrl = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : '';

  return (
    <div className={styles.movieDetails}>
      <h1>{title}</h1>
      {poster_path && <img src={posterUrl} alt={title} className={styles.moviePoster} />}
      <p>User Score: {vote_average * 10}%</p>
      <p>Overview: {overview}</p>
      <p>Genres: {genres.map(genre => genre.name).join(', ')}</p>

      <div className={styles.links}>
        <button onClick={toggleCast} className={styles.link}>Cast</button>
        <button onClick={toggleReviews} className={styles.link}>Reviews</button>
      </div>

      {showCast && <MovieCast />}
      {showReviews && <MovieReviews />}

      {/* Go back button */}
      <button onClick={handleGoBack} className={styles.goBackButton}>Go back</button>
    </div>
  );
};

export default MovieDetailsPage;
