import { useEffect, useState } from "react";
import { allGenres } from "../Genres/Genre";
import GenreButton from "../Buttons/GenreButton";
import {
    IoCaretUpCircleOutline,
    IoCaretDownCircleOutline,
} from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import Pagination from "./Pagination";
const Favourites = () => {
    const [currentGenre, setCurrentGenre] = useState("All Genres");
    const [favourites, setFavourites] = useState([]);
    const [genres, setGenres] = useState([]);
    const [sortRating, setSortRating] = useState(0); // -1,0,1
    const [sortPopularity, setSortPopularity] = useState(0); //-1,0,1
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [rows, setRows] = useState(4);
    let filteredArray = [];

    const genreClickHandler = (genre) => {
        setCurrentGenre(genre);
    };

    //sorting the array based on rating in increasing order
    const sortByRatingIncreasing = () => {
        setSortPopularity(0);
        setSortRating(1);
        filteredArray = favourites.sort(
            (m1, m2) => m1.vote_average - m2.vote_average
        );
    };

    //sorting the array based on rating in decreasing order
    const sortByRatingDecreasing = () => {
        setSortPopularity(0);
        setSortRating(-1);
        filteredArray = favourites.sort(
            (m1, m2) => m2.vote_average - m1.vote_average
        );
    };

    //sorting the array based on popularity in increasing order
    const sortByPopularityIncreasing = () => {
        setSortRating(0);
        setSortPopularity(1);
        filteredArray = favourites.sort(
            (m1, m2) => m1.popularity - m2.popularity
        );
    };
    //sorting the array based on popularity in decreasing order
    const sortByPopularityDecreasing = () => {
        setSortRating(0);
        setSortPopularity(-1);
        filteredArray = favourites.sort(
            (m1, m2) => m2.popularity - m1.popularity
        );
    };

    //getting the favourites array
    useEffect(() => {
        let oldFavorites = localStorage.getItem("imdb") || [];
        if (!!oldFavorites) {
            oldFavorites = JSON.parse(oldFavorites);
        }
        setFavourites(oldFavorites);
    }, []);

    //getting the genres
    useEffect(() => {
        const currentGenreList = favourites.map(
            (movie) => allGenres[movie.genre_ids[0]]
        );
        setGenres([...new Set(currentGenreList)]);
    }, [favourites]);

    //getting the genre name
    const filterGenre = (id) => {
        const genre = allGenres[id];
        return genre;
    };
    //delete movie from favourites handler
    const deleteMovie = (id) => {
        const deleteIndex = favourites.findIndex((movie) => movie.id === id);
        const newArray = [
            ...favourites.slice(0, deleteIndex),
            ...favourites.slice(deleteIndex + 1),
        ];
        setFavourites(newArray);
        localStorage.setItem("imdb", JSON.stringify(newArray));
    };

    const previousHandler = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const nextHandler = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPageNumber = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const rowHandler = (e) => {
        const value = e.target.value;
        if (!!value && value > 0) setRows(value);
    };

    //for genre filter
    filteredArray =
        currentGenre === "All Genres"
            ? favourites
            : favourites.filter(
                  (movie) => allGenres[movie.genre_ids[0]] === currentGenre
              );
    //for search filter

    filteredArray =
        search === ""
            ? filteredArray
            : filteredArray.filter((movie) =>
                  movie.title.toLowerCase().includes(search.toLowerCase())
              );

    //pagination

    let totalPages = Math.ceil(filteredArray.length / rows);
    let startIndex = (currentPage - 1) * rows;
    let endIndex = Number(startIndex) + Number(rows);
    filteredArray = filteredArray.slice(startIndex, endIndex);

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
                    name="search"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border-2 border-gray-400 text-center m-2 p-1 rounded-sm"
                />
                <input
                    type="number"
                    placeholder="Rows"
                    onChange={(e) => rowHandler(e)}
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
                                                <button
                                                    onClick={
                                                        sortByRatingIncreasing
                                                    }
                                                >
                                                    <IoCaretUpCircleOutline size="20px" />
                                                </button>
                                                <div>Rating</div>
                                                <button
                                                    onClick={
                                                        sortByRatingDecreasing
                                                    }
                                                >
                                                    <IoCaretDownCircleOutline size="20px" />
                                                </button>
                                            </div>
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                                        >
                                            <div className="flex flex-col space-y-1 md:flex-row md:space-x-1 md:space-y-0">
                                                <button
                                                    onClick={
                                                        sortByPopularityIncreasing
                                                    }
                                                >
                                                    <IoCaretUpCircleOutline size="20px" />
                                                </button>
                                                <div>Popularity</div>
                                                <button
                                                    onClick={
                                                        sortByPopularityDecreasing
                                                    }
                                                >
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
                                    {filteredArray.map((fav) => (
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
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
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
                            <Pagination
                                previousHandler={previousHandler}
                                nextHandler={nextHandler}
                                totalPages={totalPages}
                                currentPage={currentPage}
                                goToPageNumber={goToPageNumber}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Favourites;
