import style from './button.module.css';

const Button = ({
  className,
  children,
  type,
  onClick,
}) => {
  const classList = [style.button, className].join(' ');

  return (
    <button
      className={classList}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;