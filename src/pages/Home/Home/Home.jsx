import Categories from "../categories/Categories";
import HomeBanner from "../homeBanner/HomeBanner";
import Images from "../images/Images";


const Home = () => {
    return (
        <>
           <HomeBanner/> 
           <Categories/>
           <Images/>
        </>
    );
};

export default Home;