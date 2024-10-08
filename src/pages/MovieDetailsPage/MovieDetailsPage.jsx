import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieCast from '../../components/MovieCast/MovieCast';
import MovieReviews from '../../components/MovieReviews/MovieReviews';
import { fetchMovieDetails, fetchMovieCast, fetchMovieReviews } from '../../services/tmdbAPI';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getMovieDetails = async () => {
      const movieDetails = await fetchMovieDetails(movieId);
      setMovie(movieDetails);

      const movieCast = await fetchMovieCast(movieId);
      setCast(movieCast);

      const movieReviews = await fetchMovieReviews(movieId);
      setReviews(movieReviews);
    };

    getMovieDetails();
  }, [movieId]);

  if (!movie) return null;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <Link to={`/movies/${movieId}/cast`}>Cast</Link> 
      <Link to={`/movies/${movieId}/reviews`}>Reviews</Link> 
      <MovieCast cast={cast} />
      <MovieReviews reviews={reviews} />
      <Link to="/movies">Go back</Link>
    </div>
  );
};

export default MovieDetailsPage;
