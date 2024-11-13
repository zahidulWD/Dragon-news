import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";



const LatestNews = () => {
    return (
        <div className="flex gap-3 items-center bg-base-200 p-2">
           <p className="bg-[#D72050] text-white px-3 py-2">Latest</p>

           <Marquee pauseOnHover={true} className="space-x-10">
            <Link to="news">
                <p className="text-[#403F3F] text-[18px] font-semibold leading-[30px]">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
            </Link>
            <Link to="news">
                <p className="text-[#403F3F] text-[18px] font-semibold leading-[30px]">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
            </Link>
            <Link to="news">
                <p className="text-[#403F3F] text-[18px] font-semibold leading-[30px]">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
            </Link>
           </Marquee>
        </div>
    );
};

export default LatestNews;