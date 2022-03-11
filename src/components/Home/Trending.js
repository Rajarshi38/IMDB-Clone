import { getMovies } from "../../api/Movies";
import { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
import Movie from "../Movies/Movie";
import Pagination from "../Utils/Pagination";

//Trending movies part and pagination is its child
const Trending = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hover, setHover] = useState("");
    const [favourites, setFavourites] = useState([]);

    const nextHandler = () => {
        setPage(page + 1);
    };
    const previousHandler = () => {
        if (page === 1) return;
        setPage(page - 1);
    };
    const mouseEnter = (id) => {
        setHover(id);
    };

    const mouseLeave = () => {
        setHover("");
    };

    const addMovie = (movie) => {
        const newArray = [...favourites, movie];
        setFavourites([...newArray]);
        localStorage.setItem("imdb", JSON.stringify(newArray));
    };
    const deleteMovie = (id) => {
        const deleteIndex = favourites.findIndex((movie) => movie.id === id);
        const newArray = [
            ...favourites.slice(0, deleteIndex),
            ...favourites.slice(deleteIndex + 1),
        ];
        setFavourites(newArray);
        localStorage.setItem("imdb", JSON.stringify(newArray));
    };
    const findElement = (id) => {
        const res = favourites.find((movie) => movie.id === id);
        return res;
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getMovies(page);
            setMovies(response.results);
            let oldFavorites = localStorage.getItem("imdb");
            if (!!oldFavorites) {
                oldFavorites = JSON.parse(oldFavorites);
                setFavourites([...oldFavorites]);
            }

            setLoading(false);
        };

        fetchData();
    }, [page]);

    return (
        <>
            <div className="trending mt-4 mb-8">
                <h2 className="font-body text-2xl font-medium mb-6 text-gray-800 text-center">
                    Trending Movies
                </h2>
                {loading ? (
                    <div className="flex justify-center">
                        <TailSpin
                            className="items-center"
                            height="100"
                            width="100"
                            color="#00BFFF"
                            ariaLabel="loading"
                        />
                    </div>
                ) : (
                    <div className="movies-list flex flex-wrap gap-8 justify-center">
                        {movies.map((movie) => (
                            <Movie
                                key={movie.id}
                                movie={movie}
                                mouseEnter={mouseEnter}
                                mouseLeave={mouseLeave}
                                hover={hover}
                                addToFavorites={() => addMovie(movie)}
                                findElement={findElement}
                                deleteMovie={deleteMovie}
                            />
                        ))}
                    </div>
                )}
            </div>
            <Pagination
                page={page}
                nextHandler={nextHandler}
                previousHandler={previousHandler}
            />
        </>
    );
};

export default Trending;
