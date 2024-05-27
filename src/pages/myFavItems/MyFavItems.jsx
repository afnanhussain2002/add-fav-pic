import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getItemFromLS } from "../../localStorage/localStorage";
import SingleFavItem from "./singleFavItem/SingleFavItem";


const MyFavItems = () => {

    const [showImages, setShowImages] = useState([]);

    const data = useLoaderData()
    console.log(data);
    const {images} = data
    console.log(images);
  // get all data from local storage
    useEffect(()=>{
          if(images.length > 0){
             const stroData = getItemFromLS()
             const showData = [];
             for(const id of stroData){
                const getImage = images.find( img => img.id === id)
                if(getImage){
                    showData.push(getImage)
                }
             }
             console.log('saved data', showData);
             setShowImages(showData)
          }
    },[images])
    return (
        <div className="mt-10 mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          
          {
            showImages?.map(favItem => <SingleFavItem key={favItem.id} favItem={favItem}></SingleFavItem>)
          }
        </div>
    );
};

export default MyFavItems;