import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";



const LeftNavbar = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
       fetch('https://openapi.programming-hero.com/api/news/categories')
        .then((res)=> res.json())
        .then((data) => setCategories(data.data.news_category))
    },[])
    return (
        <div>
            <h2 className="text-[rgb(64,_63,_63)] text-[20px] font-semibold leading-[30px] tracking-[0%] text-left mb-3">All Caterogy</h2>

            <div className="flex flex-col gap-2 pt-2">
                {
                    categories.map((category) => (
                        <NavLink
                        to={`/category/${category.category_id}`}
                        className="btn" 
                        key={category.category_id}>
                        {category.category_name}
                        </NavLink>
                    ))
                }
            </div>
        </div>

        
    );
};

export default LeftNavbar;