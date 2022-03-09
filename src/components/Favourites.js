const Favourites = () => {
    return (
        <div className="favourites flex justify-center flex-wrap space-x-4">
            <button className="my-2 text-xl bg-blue-400 text-white rounded-xl py-1 px-3 font-semibold">
                All Genre
            </button>
            <button className="my-2 text-xl bg-gray-400 hover:bg-blue-400 text-white rounded-xl py-1 px-3 font-semibold">
                Action
            </button>
        </div>
    );
};

export default Favourites;
