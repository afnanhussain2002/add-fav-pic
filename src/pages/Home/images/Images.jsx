
import Image from "./image/Image";


const Images = ({images, filterImages}) => {
    
    return (
        <div className="mt-10 mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {
                filterImages?.map(image => <Image key={image.id} image={image} ></Image>)
            }
            
        </div>
    );
};

export default Images;