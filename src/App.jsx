import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from './pages/MoviesPage/MoviesPage';
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Navigation from './components/Navigation/Navigation';

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="/movies/:movieId/cast" element={<MovieDetailsPage />} /> {}
        <Route path="/movies/:movieId/reviews" element={<MovieDetailsPage />} /> {}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;