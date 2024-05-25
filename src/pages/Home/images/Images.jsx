import { useEffect, useState } from "react";
import Image from "./image/Image";


const Images = () => {
    const [images, setImages] = useState([])
    useEffect(() => {
        fetch('./data/images.json')
        .then(res => res.json())
        .then(data => setImages(data.images))
    }, [])
    return (
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-2">
            {
                images?.map(image => <Image key={image.id} image={image}></Image>)
            }
            
        </div>
    );
};

export default Images;