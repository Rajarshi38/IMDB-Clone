import { getMovies } from "../api/Movies";
import { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";

const Trending = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getMovies();

            setMovies(
                response.results.map((res) => {
                    return {
                        id: res.id,
                        title: res.title ? res.title : res.name,
                        rating: res.vote_average,
                        media_type: res.media_type,
                    };
                })
            );

            setLoading(false);
        };

        fetchData();
    }, []);

    return (
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
                        <div
                            className="bg-hero-img h-[25vh] w-[140px] md:h-[35vh] md:w-[200px] bg-cover bg-center rounded-xl flex items-end hover:scale-110 ease-out duration-300"
                            key={movie.id}
                        >
                            <div className="font-body text-white text-sm bg-gray-900 bg-opacity-50 w-full p-2 flex justify-center text-center rounded-b-xl">
                                {movie.title}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Trending;
