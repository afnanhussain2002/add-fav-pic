
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Category = ({category, handleFilterImage}) => {

    const {id, name} = category || {}

    return (
        <div>
            
            <Link onClick={() => handleFilterImage(name)} className='grid'><button className='btn btn-primary'>{name}</button></Link>
        </div>
    );
};

Category.propTypes = {
    category: PropTypes.object,
    handleFilterImage: PropTypes.func
};

export default Category;