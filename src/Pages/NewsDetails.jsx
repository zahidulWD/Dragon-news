import { Link, useLoaderData } from "react-router-dom";
import Header from "../Components/Header";
import RightNavbar from "../Components/Layout-Components/RightNavbar";

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data?.data?.[0];
//   console.log(news);
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
        <section className="col-span-9">
          <h2 className="text-[rgb(64,_63,_63)] font-[Poppins] text-[20px] font-semibold leading-[30px] tracking-[0%] text-left">
            Dragon News
          </h2>
          <div className="card bg-base-100 ">
            <figure className="px-10 pt-10">
              <img
                src={news?.image_url}
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{news?.title}</h2>
              <p>{news?.details}</p>
              <div className="card-actions">
                <Link to={'/category/${news?.category_id}'} className="btn btn-primary">All news in this category</Link>
              </div>
            </div>
          </div>
        </section>
        <aside className="col-span-3">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
