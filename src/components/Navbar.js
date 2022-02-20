import Logo from "../logo.png";
const Navbar = () => {
    return (
        <div className="mx-4 my-1 p-4 navbar flex space-x-8 items-center">
            <img className="w-[45px] md:w-[55px]" src={Logo} alt="" />
            <div className="font-body text-blue-400 font-bold text-xl md:text-3xl mx-3">
                Home
            </div>
            <div className="font-body text-blue-400 font-bold text-xl md:text-3xl">
                Favorites
            </div>
        </div>
    );
};

export default Navbar;
