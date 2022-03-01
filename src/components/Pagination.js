import { useState } from "react";
const Pagination = () => {
    const [page, setPage] = useState(1);

    const nextHandler = () => {
        setPage(page + 1);
    };
    const previousHandler = () => {
        if (page === 1) return;
        setPage(page - 1);
    };

    return (
        <div className="flex w-full justify-center mb-7 mt-7">
            <button
                className="border-2 border-indigo-800 font-body p-2 border-r-0 rounded-l-xl text-indigo-800 hover:bg-indigo-800 hover:text-white ease-in-out duration-[250ms]"
                onClick={previousHandler}
            >
                Previous
            </button>
            <button className="border-2 border-indigo-800 font-body p-2 text-indigo-800 bg-gray-400">
                {page}
            </button>
            <button
                className="border-2 border-indigo-800 text-indigo-800 font-body p-2 border-l-0 rounded-r-xl hover:bg-indigo-800 hover:text-white ease-in-out duration-[250ms]"
                onClick={nextHandler}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
