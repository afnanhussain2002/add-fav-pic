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
    
    
        if (value == 'All') {
           
            setFilterImages(images)
        }else if (value == 'Animals') {
            const animalsCategory = images.filter(img => img.category == 'Animals')
            setFilterImages(animalsCategory)
        }else if (value == 'Technology') {
            const technologyCategory = images.filter(img => img.category == 'Technology')
            setFilterImages(technologyCategory)
        }else if (value == 'People') {
            const peopleCategory = images.filter(img => img.category == 'People')
            setFilterImages(peopleCategory)
        }else if (value == 'Architecture') {
            const architectureCatrgory = images.filter(img => img.category == 'Architecture')
            setFilterImages(architectureCatrgory)
        }else if (value == 'Food') {
            const foodCategory = images.filter(img => img.category == 'Food')
            setFilterImages(foodCategory)
        }else if (value == 'Sports') {
            const sportsCategory = images.filter(img => img.category == 'Sports')
            setFilterImages(sportsCategory)
        }else if (value == 'Travel') {
            const sportsCategory = images.filter(img => img.category == 'Travel')
            setFilterImages(sportsCategory)
        }else if (value == 'Art') {
            const artCategory = images.filter(img => img.category == 'Art')
            setFilterImages(artCategory)
        }else if (value == 'Music') {
            const musicCategory = images.filter(img => img.category == 'Music')
            setFilterImages(musicCategory)
        }else if (value == 'Nature'){
            const natureCategory = images.filter(img => img.category == 'Nature')
            setFilterImages(natureCategory)
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