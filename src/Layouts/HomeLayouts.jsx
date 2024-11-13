import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";

const HomeLayouts = () => {
    return (
        <div className=" font-Poppins">
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto">
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className="w-11/12 mx-auto py-5">
                <Navbar></Navbar>
            </nav>
            <main></main>
        </div>
    );
};

export default HomeLayouts;