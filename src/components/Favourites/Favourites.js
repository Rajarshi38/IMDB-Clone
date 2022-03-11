import { useEffect, useState } from "react";
import { allGenres } from "../Genres/Genre";
import GenreButton from "../Buttons/GenreButton";
import {
    IoCaretUpCircleOutline,
    IoCaretDownCircleOutline,
} from "react-icons/io5";
import { MdDelete } from "react-icons/md";
const Favourites = () => {
    const [currentGenre, setCurrentGenre] = useState("All Genres");

    const [favourites, setFavourites] = useState([]);
    const [genres, setGenres] = useState([]);

    const genreClickHandler = (genre) => {
        setCurrentGenre(genre);
    };
    useEffect(() => {
        let oldFavorites = localStorage.getItem("imdb");
        if (!!oldFavorites) {
            oldFavorites = JSON.parse(oldFavorites);
        }
        setFavourites(oldFavorites);
    }, []);

    useEffect(() => {
        const currentGenreList = favourites.map(
            (movie) => allGenres[movie.genre_ids[0]]
        );
        setGenres([...new Set(currentGenreList)]);
    }, [favourites]);
    const filterGenre = (id) => {
        const genre = allGenres[id];
        return genre;
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

    return (
        <div className="font-body">
            <div className="favourites flex justify-center flex-wrap space-x-4">
                <GenreButton
                    title="All Genres"
                    genreClickHandler={genreClickHandler}
                    currentGenre={currentGenre}
                />
                {genres.map((genre) => (
                    <GenreButton
                        key={genre}
                        title={genre}
                        genreClickHandler={genreClickHandler}
                        currentGenre={currentGenre}
                    />
                ))}
            </div>

            <div className="text-center">
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Search"
                    className="border-2 border-gray-400 text-center m-2 p-1 rounded-sm"
                />
                <input
                    type="text"
                    placeholder="Rows"
                    className="border-2 border-gray-400 text-center m-2 p-1 rounded-sm"
                />
            </div>

            <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
                <div className="py-8">
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                                        >
                                            Title
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                                        >
                                            <div className="flex flex-col space-y-1 md:flex-row md:space-x-1 md:space-y-0">
                                                <button>
                                                    <IoCaretUpCircleOutline size="20px" />
                                                </button>
                                                <div>Rating</div>
                                                <button>
                                                    <IoCaretDownCircleOutline size="20px" />
                                                </button>
                                            </div>
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                                        >
                                            <div className="flex flex-col space-y-1 md:flex-row md:space-x-1 md:space-y-0">
                                                <button>
                                                    <IoCaretUpCircleOutline size="20px" />
                                                </button>
                                                <div>Popularity</div>
                                                <button>
                                                    <IoCaretDownCircleOutline size="20px" />
                                                </button>
                                            </div>
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                                        >
                                            Genre
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-5 py-3 bg-white  border-b border-gray-200 text-red-600  text-left text-sm uppercase font-bold"
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {favourites.map((fav) => (
                                        <tr key={fav.id}>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0">
                                                        <div className="block relative">
                                                            <img
                                                                alt="profil"
                                                                src={`https://image.tmdb.org/t/p/w500${fav.backdrop_path}`}
                                                                className="mx-auto object-cover rounded-full h-10 w-10 "
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="text-gray-900 whitespace-normal">
                                                            {fav.title}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-5 text-center border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-nowrap">
                                                    {fav.vote_average + "⭐"}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 border-b text-center border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-nowrap">
                                                    {fav.popularity.toFixed() +
                                                        "❤️"}
                                                </p>
                                            </td>
                                            <td className="px-[11px] py-5 border-b border-gray-200 bg-white text-sm">
                                                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                    <span
                                                        aria-hidden="true"
                                                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                                    ></span>
                                                    <span className="relative">
                                                        {filterGenre(
                                                            fav.genre_ids[0]
                                                        )}
                                                    </span>
                                                </span>
                                            </td>
                                            <td className="px-5 py-5 text-center border-b border-gray-200 bg-white text-sm">
                                                <button
                                                    onClick={() =>
                                                        deleteMovie(fav.id)
                                                    }
                                                    className="hover:scale-125 transition-all ease-in-out duration-150"
                                                >
                                                    <MdDelete size={"26px"} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
                                <div className="flex items-center">
                                    <button
                                        type="button"
                                        className="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100"
                                    >
                                        <svg
                                            width="9"
                                            fill="currentColor"
                                            height="8"
                                            className=""
                                            viewBox="0 0 1792 1792"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
                                        </svg>
                                    </button>
                                    <button
                                        type="button"
                                        className="w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 "
                                    >
                                        1
                                    </button>
                                    <button
                                        type="button"
                                        className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100"
                                    >
                                        2
                                    </button>
                                    <button
                                        type="button"
                                        className="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100"
                                    >
                                        3
                                    </button>
                                    <button
                                        type="button"
                                        className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100"
                                    >
                                        4
                                    </button>
                                    <button
                                        type="button"
                                        className="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100"
                                    >
                                        <svg
                                            width="9"
                                            fill="currentColor"
                                            height="8"
                                            className=""
                                            viewBox="0 0 1792 1792"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Favourites;
