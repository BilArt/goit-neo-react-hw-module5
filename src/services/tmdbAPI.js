import axios from 'axios';

// const API_KEY = '4dce6a2c5ebcb957b71b9b4cc253894c';
const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZGNlNmEyYzVlYmNiOTU3YjcxYjliNGNjMjUzODk0YyIsIm5iZiI6MTcyODMyMDE3OS43NDczNjEsInN1YiI6IjY3MDQxMTRhMTc0YTFkNTc3Mzc5NmFkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ux6oTnM1zWJJEB-kFnTU5zu2JE6WuD1GomBSA_dImbk';
const BASE_URL = 'https://api.themoviedb.org/3';

const headers = {
  Authorization: `Bearer ${API_TOKEN}`,
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/day`, { headers });
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    headers,
    params: {
      query,
      language: 'en-US',
      page: 1,
      include_adult: false,
    },
  });
  return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}`, { headers });
  return response.data;
};

export const fetchMovieCredits = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, { headers });
  return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, { headers });
  return response.data.results;
};
