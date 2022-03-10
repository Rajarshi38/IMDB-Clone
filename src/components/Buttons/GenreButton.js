const GenreButton = ({ title, currentGenre, genreClickHandler }) => {
    return (
        <>
            <button
                className={
                    currentGenre === title
                        ? "my-2 text-xl bg-blue-500 text-white rounded-md py-1 px-3 font-medium"
                        : "my-2 text-xl bg-gray-500 hover:bg-blue-400 transition ease-in duration-150 text-white rounded-md py-1 px-3 font-medium"
                }
                onClick={() => genreClickHandler(title)}
            >
                {title}
            </button>
        </>
    );
};

export default GenreButton;
