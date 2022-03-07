import { useEffect, useState } from "react";
import { getMovies } from "../api/Movies";
import BannerMovie from "./Banner/BannerMovie";
import { TailSpin } from "react-loader-spinner";
const Banner = () => {
    const [banner, setBanner] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getBanner = async () => {
            setLoading(true);
            const response = await getMovies();
            setBanner(response.results[0]);
            setLoading(false);
        };
        getBanner();
    }, []);

    return (
        <div className="banner">
            {loading ? (
                <div className="flex justify-center">
                    <TailSpin
                        className="items-center"
                        height="100"
                        width="100"
                        color="#00BFFF"
                        ariaLabel="loading"
                    />
                </div>
            ) : (
                <BannerMovie title={banner.title} backdrop={banner.backdrop_path} />
            )}
        </div>
    );
};

export default Banner;
