import PropTypes from 'prop-types'
const Button = ({ className, children, ...rest }) => (
    <button className={`btn ${className}`}>
        {children}
    </button>
)

export default Button;

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func
}