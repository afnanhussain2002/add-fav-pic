
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Category = ({category}) => {
    console.log(category);
    const {id, name} = category || {}
    return (
        <div>
            
            <Link className='grid'><button className='btn btn-primary'>{name}</button></Link>
        </div>
    );
};

Category.propTypes = {
    category: PropTypes.object
};

export default Category;