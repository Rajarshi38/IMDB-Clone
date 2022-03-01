import { getMovies } from "../api/Movies";
import { useState, useEffect } from "react";
import { Oval } from "react-loader-spinner";
import axios from "axios";
const decodeString = (str) => {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = str;
    return textArea.value;
};

const Trending = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // getMovies().then((data) => {
        //     setLoading(true);
        //     setMovies(
        //         data.results.map((res) => {
        //             return {
        //                 id: res.id,
        //                 title: res.title ? res.title : res.name,
        //                 rating: res.vote_average,
        //                 media_type: res.media_type,
        //             };
        //         })
        //     );
        // });
        // setLoading(false);
        axios
            .get(
                `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`
            )
            .then((res) => {
                setLoading(true);
                setMovies(
                    res.data.results.map((res) => {
                        return {
                            id: res.id,
                            title: res.title ? res.title : res.name,
                            rating: res.vote_average,
                            media_type: res.media_type,
                        };
                    })
                );
            });
        setLoading(false);
    }, []);

    if (!loading) console.table(movies);
    return (
        <div className="trending mt-4 mb-8">
            <h2 className="font-body text-2xl font-medium mb-6 text-gray-800 text-center">
                Trending Movies
            </h2>
            {loading ? (
                <div className="flex justify-center">
                    <Oval
                        className="items-center"
                        height="100"
                        width="100"
                        color="grey"
                        ariaLabel="loading"
                    />
                </div>
            ) : (
                <div className="movies-list flex flex-wrap gap-8 justify-center">
                    <div className="bg-hero-img h-[25vh] w-[140px] md:h-[35vh] md:w-[200px] bg-cover bg-center rounded-xl flex items-end hover:scale-110 ease-out duration-300">
                        <div className="font-body text-white text-base bg-gray-900 bg-opacity-50 w-full p-2 flex justify-center rounded-b-xl">
                            Title
                        </div>
                    </div>
                    <div className="bg-hero-img h-[25vh] w-[140px] md:h-[35vh] md:w-[200px] bg-cover bg-center rounded-xl flex items-end hover:scale-110 ease-out duration-300">
                        <div className="font-body text-white text-base bg-gray-900 bg-opacity-50 w-full p-2 flex justify-center rounded-b-xl">
                            Title
                        </div>
                    </div>
                    <div className="bg-hero-img h-[25vh] w-[140px] md:h-[35vh] md:w-[200px] bg-cover bg-center rounded-xl flex items-end hover:scale-110 ease-out duration-300">
                        <div className="font-body text-white text-base bg-gray-900 bg-opacity-50 w-full p-2 flex justify-center rounded-b-xl">
                            Title
                        </div>
                    </div>
                    <div className="bg-hero-img h-[25vh] w-[140px] md:h-[35vh] md:w-[200px] bg-cover bg-center rounded-xl flex items-end hover:scale-110 ease-out duration-300">
                        <div className="font-body text-white text-base bg-gray-900 bg-opacity-50 w-full p-2 flex justify-center rounded-b-xl">
                            Title
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Trending;
