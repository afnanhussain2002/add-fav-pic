
import TitleAndDes from "../../../components/titleAndDes/TitleAndDes";
import Category from "./category/Category";


const Categories = ({categories, handleFilterImage}) => {
    
    return (
        <div className="mt-10">
            <TitleAndDes title={'All Categories'} des={'Select any category as your wish'}/>

            <div className="grid grid-cols-3 lg:grid-cols-5 gap-2 max-w-4xl mx-auto">
                
                {
                    categories?.map(category => <Category key={category.id} category={category} handleFilterImage={handleFilterImage}></Category> )
                }
            </div>
            
        </div>
    );
};

export default Categories;