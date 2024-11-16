

import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa6";

const SocailLogin = () => {
    const { googleLogin } = useContext(AuthContext);

    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const loggedInUser = result.user;
                console.log("User logged in:", loggedInUser);
            })
            .catch((error) => {
                console.error("Login failed:", error.message);
            });
    };

    return (
        <div>
            <h2 className="font-semibold mb-3">Login With</h2>
            <div className="w-full space-y-2">
                <button className="btn" onClick={handleGoogleLogin}>
                    <FaGoogle /> Login with Google
                </button>
                <button className="btn">
                    <FaGithub /> Login with GitHub
                </button>
            </div>
        </div>
    );
};

export default SocailLogin;
