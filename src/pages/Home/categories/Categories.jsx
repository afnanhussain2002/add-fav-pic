import { useEffect, useState } from "react";
import TitleAndDes from "../../../components/titleAndDes/TitleAndDes";
import Category from "./category/Category";


const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('./data/categories.json')
        .then( res => res.json())
        .then(data => setCategories(data.categories))
    },[])
    return (
        <div className="mt-10">
            <TitleAndDes title={'All Categories'} des={'Select any category as your wish'}/>

            <div className="grid grid-cols-3 lg:grid-cols-5 gap-2 max-w-4xl mx-auto">
                
                {
                    categories?.map(category => <Category key={category.id} category={category}></Category> )
                }
            </div>
            
        </div>
    );
};

export default Categories;