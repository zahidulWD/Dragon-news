import moment from "moment";
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 py-4">
            <div className="logo">
                <img className="w-[400px]" src={logo} alt="" srcset="" />
            </div>
            <h2 className="text-[rgb(112,_111,_111)] text-[18px] font-semibold leading-[30px]">Journalism Without Fear or Favour</h2>
            <p>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;