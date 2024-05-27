import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  getItemFromLS,
  removeAllItem,
  removeSingleItemFromLS,
} from "../../localStorage/localStorage";
import SingleFavItem from "./singleFavItem/SingleFavItem";

const MyFavItems = () => {
  const [showImages, setShowImages] = useState([]);

  const data = useLoaderData();
  console.log(data);
  const { images } = data;
  console.log(images);
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
  };

// remove all data from local storage
const removeAll = () =>{
    setShowImages()
    removeAllItem()
}
  return (
    <div>
      {
       showImages.length > 0 ? <div>

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
       <div className="">No data found</div>
      }
      
    
    </div>
  );
};

export default MyFavItems;
