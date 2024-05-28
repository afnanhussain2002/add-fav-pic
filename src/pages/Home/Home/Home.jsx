import { useEffect, useState } from "react";
import Categories from "../categories/Categories";
import HomeBanner from "../homeBanner/HomeBanner";
import Images from "../images/Images";


const Home = () => {
    // show categories
    const [categories, setCategories] = useState([])
    const [images, setImages] = useState([])
    const [filterImages, setFilterImages] = useState([])

    useEffect(() => {
        fetch('./data/categories.json')
        .then( res => res.json())
        .then(data => setCategories(data.categories))
    },[])
    // show images
    useEffect(() => {
        fetch('./data/images.json')
        .then(res => res.json())
        .then(data =>{
            setImages(data.images)
            setFilterImages(data.images)
        } )
    }, [])
    const handleFilterImage = value =>{
    
        const imageFilter = images.filter(img => img.category == value)

        if (imageFilter) {
            setFilterImages(imageFilter)
        }else{
            setFilterImages(images)
        }
        
    }
    return (
        <>
           <HomeBanner/> 
           <Categories categories={categories} handleFilterImage={handleFilterImage}/>
           <Images images={images} filterImages={filterImages}/>
        </>
    );
};

export default Home;