import axios from "axios";

export async function getMovies(page) {
    const response = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}&page={page}`
    );
    return response.data;
}

// export async function getMovies() {
//     const response = await axios.get(
//         `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`
//     );
//     return response.data;
// }
