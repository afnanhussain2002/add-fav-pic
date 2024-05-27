import {  useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  getItemFromLS,
  removeAllItem,
  removeSingleItemFromLS,
} from "../../localStorage/localStorage";
import SingleFavItem from "./singleFavItem/SingleFavItem";
import swal from "sweetalert";


const MyFavItems = () => {
 
  const data = useLoaderData();
  
  const [showImages, setShowImages] = useState([]);

  const { images } = data;
  // get all data from local storage
  useEffect(() => {
    if (images.length > 0) {
      const stroData = getItemFromLS();
      const showData = [];
      for (const id of stroData) {
        const getImage = images.find((img) => img.id === id);
        if (getImage) {
          showData.push(getImage);
        }
      }
      console.log("saved data", showData);
      setShowImages(showData);
    }
  }, [images]);

  // remove single data form local storage
  const handleRemoveData = (id) => {
    const remainingData = showImages.filter((img) => img.id !== id);
    setShowImages(remainingData)
    removeSingleItemFromLS(id);
    swal("Good job!", "Image has been removed", "success");
  };

// remove all data from local storage
const removeAll = () =>{
    setShowImages()
    removeAllItem()
    swal("Good job!", "All Images has been removed", "success");
}
  return (
    <div>
      {
       showImages?.length > 0 ? <div>

<div className="text-center">
     <button onClick={removeAll} className="btn btn-primary">Remove all</button>

      </div>
    <div className=" mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {showImages?.map((favItem) => (
        <SingleFavItem
          key={favItem.id}
          favItem={favItem}
          handleRemoveData={handleRemoveData}
        ></SingleFavItem>
      ))}
    </div>
       </div>
       :
       <div className=" text-2xl font-bold">
        <p>No data found</p>
       </div>
      }
      
    
    </div>
  );
};

export default MyFavItems;
