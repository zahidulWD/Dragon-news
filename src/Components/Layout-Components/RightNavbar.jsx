import FindUs from "../FindUs";
import SocailLogin from "../SocailLogin";


const RightNavbar = () => {
    return (
        <div className=" space-y-5">
            <SocailLogin></SocailLogin>
            <FindUs></FindUs>
        </div>
    );
};

export default RightNavbar;