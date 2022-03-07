import { getMovies } from "../api/Movies";
import { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
import Movie from "./Movies/Movie";
import Pagination from "./Pagination";

const Trending = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    const nextHandler = () => {
        setPage(page + 1);
    };
    const previousHandler = () => {
        if (page === 1) return;
        setPage(page - 1);
    };
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getMovies(page);

            setMovies(
                response.results.map((res) => {
                    return {
                        id: res.id,
                        title: res.title ? res.title : res.name,
                        rating: res.vote_average,
                        backdrop: res.backdrop_path,
                        media_type: res.media_type,
                    };
                })
            );

            setLoading(false);
        };

        fetchData();
    }, []);

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
                                title={movie.title}
                                backdrop={movie.backdrop}
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
