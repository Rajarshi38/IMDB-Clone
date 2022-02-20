import Navbar from "./Navbar";
import Banner from "./Banner";
import Trending from "./Trending";
import Pagination from "./Pagination";

const Home = () => {
    return (
        <div className="home">
            <Banner />
            <Trending />
            <Pagination />
        </div>
    );
};

export default Home;
