
import PropTypes from 'prop-types';

const Button = ({name}) => {
    return (
        <div>
            <button className='btn btn-primary '>{name}</button>
        </div>
    );
};

Button.propTypes = {
    name: PropTypes.string
};

export default Button;