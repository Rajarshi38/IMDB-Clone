import Logo from "../../logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="mx-4 my-1 p-4 navbar flex space-x-8 items-center">
            <img className="w-[45px] md:w-[55px]" src={Logo} alt="" />
            <div className="font-body text-blue-400 font-bold text-xl md:text-3xl mx-3 hover:text-blue-900 ease-in duration-200">
                <Link to="/">Home</Link>
            </div>
            <div className="font-body text-blue-400 font-bold text-xl md:text-3xl hover:text-blue-900 ease-in duration-200">
                <Link to="/favourites">Favorites</Link>
            </div>
        </div>
    );
};

export default Navbar;
