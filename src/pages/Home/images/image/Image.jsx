import PropTypes from "prop-types";
import Rating from "react-rating";
import starRegular from '../../../../assets/star-regular.svg'
import starSolid from '../../../../assets/star-solid.svg'

const Image = ({ image }) => {
  console.log(image);
  const { id, title, imageUrl, category, rating, description, tags } =
    image || {};
  return (
    <>
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
            <button className="btn btn-primary">Add To Favorite </button>
          </div>
        </div>
      </div>
    </>
  );
};

Image.propTypes = {
  image: PropTypes.object,
};

export default Image;
