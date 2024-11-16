
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa6";

const SocailLogin = () => {
    const { googleLogin, githubLogin } = useContext(AuthContext);

    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const loggedInUser = result.user;
                console.log("Google Login successful:", loggedInUser);
            })
            .catch((error) => {
                console.error("Google Login failed:", error.message);
            });
    };

    const handleGithubLogin = () => {
        githubLogin()
            .then((result) => {
                console.log("GitHub Login successful:", result.user);
            })
            .catch((error) => {
                console.error("GitHub Login failed:", error.message);
            });
    };

    return (
        <div>
            <h2 className="font-semibold mb-3">Login With</h2>
            <div className="w-full space-y-2">
                <button className="btn" onClick={handleGoogleLogin}>
                    <FaGoogle /> Login with Google
                </button>
                <button className="btn" onClick={handleGithubLogin}>
                    <FaGithub /> Login with GitHub
                </button>
            </div>
        </div>
    );
};

export default SocailLogin;

