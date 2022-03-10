import axios from "axios";

//api call to get the movies page by page
export async function getMovies(page) {
    const response = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
    return response.data;
}
export async function getGenre() {
    const response = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    return response.data;
}
