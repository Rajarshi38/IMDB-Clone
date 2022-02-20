const Trending = () => {
    return (
        <div className="trending mt-4 mb-8">
            <h2 className="font-body text-2xl font-medium mb-6 text-gray-800 text-center">
                Trending Movies
            </h2>
            <div className="movies-list flex flex-wrap gap-8 justify-center">
                <div className="bg-hero-img h-[35vh] w-[200px] bg-cover bg-center rounded-xl flex items-end hover:scale-110 ease-out duration-300">
                    <div className="font-body text-white text-base bg-gray-900 bg-opacity-50 w-full p-2 flex justify-center rounded-b-xl">
                        Title
                    </div>
                </div>
                <div className="bg-hero-img h-[35vh] w-[200px] bg-cover bg-center rounded-xl flex items-end hover:scale-110 ease-out duration-300">
                    <div className="font-body text-white text-base bg-gray-900 bg-opacity-50 w-full p-2 flex justify-center rounded-b-xl">
                        Title
                    </div>
                </div>
                <div className="bg-hero-img h-[35vh] w-[200px] bg-cover bg-center rounded-xl flex items-end hover:scale-110 ease-out duration-300">
                    <div className="font-body text-white text-base bg-gray-900 bg-opacity-50 w-full p-2 flex justify-center rounded-b-xl">
                        Title
                    </div>
                </div>
                <div className="bg-hero-img h-[35vh] w-[200px] bg-cover bg-center rounded-xl flex items-end hover:scale-110 ease-out duration-300">
                    <div className="font-body text-white text-base bg-gray-900 bg-opacity-50 w-full p-2 flex justify-center rounded-b-xl">
                        Title
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trending;
