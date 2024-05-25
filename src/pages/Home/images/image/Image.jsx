
import PropTypes from 'prop-types';

const Image = ({image}) => {
    console.log(image);
    const {id, title, imageUrl, category, rating, description, tags } = image || {}
    return (
        <>
           <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={imageUrl} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Add To Favorite </button>
    </div>
  </div>
</div> 
        </>
    );
};

Image.propTypes = {
    image: PropTypes.object
};

export default Image;