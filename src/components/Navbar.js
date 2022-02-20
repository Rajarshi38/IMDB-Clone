import Logo from "../logo.png";
const Navbar = () => {
    return (
        <div className="mx-4 my-1 p-4 navbar flex space-x-8 items-center">
            <img src={Logo} alt="" />
            <div className="font-body text-blue-400 font-bold text-2xl mx-3">Home</div>
            <div className="font-body text-blue-400 font-bold text-2xl">Favorites</div>
        </div>
    );
};

export default Navbar;
