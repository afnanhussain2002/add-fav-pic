
import PropTypes from 'prop-types';

const TitleAndDes = ({title,des}) => {
    return (
        <div className='text-center'>
            <h3 className='text-3xl font-bold'>{title}</h3>
            <p className='py-6'>{des}</p>
        </div>
    );
};

TitleAndDes.propTypes = {
    title: PropTypes.string,
    des: PropTypes.string
};

export default TitleAndDes;