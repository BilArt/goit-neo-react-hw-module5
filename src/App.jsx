import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieDetails from "./pages/MovieDetails";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies/:movieId" element={<MovieDetails />} />
        </Routes>
    );
};

export default App;
