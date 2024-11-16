import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

import { useContext } from "react";

const Navbar = () => {
  const { user,logOut } = useContext(AuthContext);

  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.email}</div>
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="career">Career</Link>
      </div>
      <div className="logo flex gap-2 items-center">
        <div className="">
            {
                user && user?.email ? <div>
                    <img className="w-10 rounded-full" src={user?.photoURL} alt="user-img" srcset="" />
                    <p>{user.displayName}</p>
                </div> : <img src={userIcon} alt="" srcset="" />
            }
          
        </div>
        {user && user?.email ? (
          <button
          onClick={logOut}
          className="btn btn-neutral rounded-none w-[140px] h-[44px] left-[1149px] top-[331px]"
          >Log out</button>
        ) : (
          <Link
            to="/auth/login"
            className="btn btn-neutral rounded-none w-[140px] h-[44px] left-[1149px] top-[331px]"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
