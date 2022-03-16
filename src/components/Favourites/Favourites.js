import GenreButton from "../Buttons/GenreButton";
import {
    IoCaretUpCircleOutline,
    IoCaretDownCircleOutline,
} from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import Pagination from "./Pagination";
import useFavouriteArray from "./UseFavouritesArray";
import { allGenres } from "../Genres/Genre";
const Favourites = () => {
    const [
        rows,
        setRows,
        currentPage,
        setCurrentPage,
        setSortRating,
        setSortPopularity,
        currentGenre,
        setCurrentGenre,
        genres,
        filteredSortedPaginatedArray,
        search,
        setSearch,
        deleteMovie,
        totalPages,
    ] = useFavouriteArray();

    const genreClickHandler = (genre) => {
        setCurrentGenre(genre);
    };

    //sorting the array based on rating in increasing order
    const sortByRatingIncreasing = () => {
        setSortRating(1);
        setSortPopularity(0);
    };

    //sorting the array based on rating in decreasing order
    const sortByRatingDecreasing = () => {
        setSortRating(-1);
        setSortPopularity(0);
    };

    //sorting the array based on popularity in increasing order
    const sortByPopularityIncreasing = () => {
        setSortPopularity(1);
        setSortRating(0);
    };
    //sorting the array based on popularity in decreasing order
    const sortByPopularityDecreasing = () => {
        setSortPopularity(-1);
        setSortRating(0);
    };

    const nextHandler = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };
    const previousHandler = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const goToPageNumber = (page) => {
        setCurrentPage(page);
    };

    const searchHandler = (e) => {
        setSearch(e.target.value);
    };

    const rowHandler = (e) => {
        const value = e.target.value;
        if (value === 0) return;
        if (value > 0) setRows(value);
    };

    //for genre filter
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
                    onChange={(e) => searchHandler(e)}
                    className="border-2 border-gray-400 text-center m-2 p-1 rounded-sm"
                />
                <input
                    type="number"
                    placeholder="Rows"
                    value={rows}
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
                                    {filteredSortedPaginatedArray.map((fav) => (
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
                                                        {
                                                            allGenres[
                                                                fav.genre_ids[0]
                                                            ]
                                                        }
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
