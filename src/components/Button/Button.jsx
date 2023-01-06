const Button = ({ className, disabled, children, ...props }) => (
  <button className={`${className} btn`} disabled={disabled} {...props}>
    {children}
  </button>
);

Button.defaultProps = {
  className: 'btn-enable',
};

export default Button;
