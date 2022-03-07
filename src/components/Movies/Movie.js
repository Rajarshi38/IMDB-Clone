const Movie = ({ id, title, backdrop }) => {
    return (
        <div
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${backdrop})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
            className={`h-[25vh] w-[140px] md:h-[35vh] md:w-[200px] bg-cover bg-center rounded-xl flex items-end hover:scale-110 ease-out duration-300`}
            key={id}
        >
            <div className="font-body text-white text-sm bg-gray-900 bg-opacity-80 w-full p-2 flex justify-center text-center rounded-b-xl">
                {title}
            </div>
        </div>
    );
};

export default Movie;
