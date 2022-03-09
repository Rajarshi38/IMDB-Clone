const Button = ({ title }) => {
    return (
        <>
            <button className="my-2 text-xl bg-blue-400 text-white rounded-xl py-1 px-3 font-semibold">
                {title}
            </button>
        </>
    );
};

export default Button;
