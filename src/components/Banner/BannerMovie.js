const BannerMovie = ({ title, backdrop }) => {
    return (
        <div
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${backdrop})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
            className="h-[40vh] md:h-[60vh] flex justify-center items-end"
        >
            <h6 className="font-body text-white text-2xl bg-gray-900 bg-opacity-50 w-full p-4 flex justify-center">
                {title}
            </h6>
        </div>
    );
};

export default BannerMovie;
