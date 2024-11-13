import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";


const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div className=""></div>
            <div className="nav space-x-5">
                <Link to='/'>Home</Link>
                <Link to='about'>About</Link>
                <Link to='career'>Career</Link>
            </div>
            <div className="logo flex gap-2 items-center">
                <div className="">
                    <img src={userIcon} alt="" srcset="" />
                </div>
                <button className="btn btn-neutral rounded-none w-[140px] h-[44px] left-[1149px] top-[331px]">Login</button>
            </div>
           
        </div>
    );
};

export default Navbar;