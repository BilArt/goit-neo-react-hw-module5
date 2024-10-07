const API_KEY = "4dce6a2c5ebcb957b71b9b4cc253894c";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchTrendingMovies = async () => {
    const response = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

export const fetchMovieDetails = async (movieId) => {
    const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};
