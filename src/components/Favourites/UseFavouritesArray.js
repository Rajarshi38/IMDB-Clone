import { useState, useEffect } from "react";
import { allGenres } from "../Genres/Genre";

export default function useFavouriteArray() {
    //fetching the favourites array
    const [favourites, setFavourites] = useState([]);
    const [filteredSortedArray, setFilteredSortedArray] = useState([]);
    const [filteredSortedPaginatedArray, setFilteredSortedPaginatedArray] =
        useState([]);
    const [sortRating, setSortRating] = useState(0);
    const [sortPopularity, setSortPopularity] = useState(0);
    const [currentGenre, setCurrentGenre] = useState("All Genres");
    const [genres, setGenres] = useState([]);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [rows, setRows] = useState(4);
    const [totalPages, setTotalPages] = useState(1);

    const deleteMovie = (id) => {
        const deleteIndex = favourites.findIndex((movie) => movie.id === id);
        const newArray = [
            ...favourites.slice(0, deleteIndex),
            ...favourites.slice(deleteIndex + 1),
        ];
        setFavourites(newArray);
        localStorage.setItem("imdb", JSON.stringify(newArray));
    };

    //getting the favourites array
    useEffect(() => {
        let oldFavorites = localStorage.getItem("imdb");
        if (!!oldFavorites) {
            oldFavorites = JSON.parse(oldFavorites);
            setFavourites(oldFavorites);
        }
    }, []);
    //getting the genre types
    useEffect(() => {
        const currentGenreList = favourites.map(
            (movie) => allGenres[movie.genre_ids[0]]
        );
        setGenres([...new Set(currentGenreList)]);
    }, [favourites]);

    //initialize the filtered-sortered array
    useEffect(() => {
        let filteredArray =
            currentGenre === "All Genres"
                ? favourites
                : favourites.filter((movie) => {
                      return allGenres[movie.genre_ids[0]] === currentGenre;
                  });

        filteredArray = filteredArray.filter((movie) =>
            movie.title.toLowerCase().includes(search.toLowerCase())
        );
        if (sortRating === 1) {
            filteredArray = filteredArray.sort(
                (m1, m2) => m1.vote_average - m2.vote_average
            );
        } else if (sortRating === -1) {
            filteredArray = filteredArray.sort(
                (m1, m2) => m2.vote_average - m1.vote_average
            );
        }

        if (sortPopularity === 1) {
            filteredArray = filteredArray.sort(
                (m1, m2) => m1.popularity - m2.popularity
            );
        } else if (sortPopularity === -1) {
            filteredArray = filteredArray.sort(
                (m1, m2) => m2.popularity - m1.popularity
            );
        }

        setFilteredSortedArray([...filteredArray]);
    }, [favourites, currentGenre, sortPopularity, sortRating, search]);

    //paginated array
    useEffect(() => {
        let startIndex = (currentPage - 1) * rows;
        let endIndex = Number(startIndex) + Number(rows);
        setTotalPages(Math.ceil(filteredSortedArray.length / rows));
        setFilteredSortedPaginatedArray(
            filteredSortedArray.slice(startIndex, endIndex)
        );
    }, [filteredSortedArray, currentPage, rows]);

    return [
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
    ];
}
