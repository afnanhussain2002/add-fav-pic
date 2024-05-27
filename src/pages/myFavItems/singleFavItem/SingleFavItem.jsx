import { saveAs } from 'file-saver';
import PropTypes from 'prop-types';
import Rating from 'react-rating';
import starRegular from '../../../assets/star-regular.svg'
import starSolid from '../../../assets/star-solid.svg'

const SingleFavItem = ({favItem, handleRemoveData}) => {
    const { id, title, imageUrl, category, rating, description, tags } =
    favItem || {};
  //  download image
    const downloadImg = () =>{
      saveAs(imageUrl, title)
    }
    
    return (
        <div className="card w-4/5 mx-auto bg-base-100 shadow-xl border border-primary mt-10">
        <figure>
          <img src={imageUrl} className="w-full h-60" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
         
          <Rating
            initialRating={rating}
            readonly={true}
            emptySymbol={<img src={starRegular} className="w-5"/>}
            fullSymbol={<img src={starSolid} className="w-5"/>}
          ></Rating>
          <p className="flex gap-2">{
              tags?.map((tag, idx) => <p key={idx}>#{tag}</p>)
            }</p>

         
          <div className="card-actions justify-end">
            <button onClick={() => handleRemoveData(id)} className="btn btn-primary">Remove</button>
            <a onClick={downloadImg} className='btn btn-primary'>Download</a>
          </div>
        </div>
      </div>
    );
};

SingleFavItem.propTypes = {
    favItem: PropTypes.object,
    handleRemoveData: PropTypes.func
};

export default SingleFavItem;