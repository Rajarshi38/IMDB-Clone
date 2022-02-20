const Pagination = () => {
    return (
        <div className="flex w-full justify-center mb-7 mt-7">
            <button className="border-2 border-indigo-800 font-body p-2  border-r-0 rounded-l-xl text-indigo-800">
                Previous
            </button>
            <button className="border-2 border-indigo-800 font-body p-2 text-indigo-800 bg-gray-400">
                1
            </button>
            <button className="border-2 border-indigo-800 text-indigo-800 font-body p-2 border-l-0 rounded-r-xl">
                Next
            </button>
        </div>
    );
};

export default Pagination;
