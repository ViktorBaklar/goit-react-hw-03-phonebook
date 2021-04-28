
import style from './input.module.css';
import PropTypes from 'prop-types';

const Input = ({
  type = 'text',
  id,
  value,
  className,
  placeHolder,
  name,
  onChange,
  ...restProps
}) => {
  const classList = [style.input, className].join(' ');

  return (
    <input
      {...restProps}
      id={id}
      type={type}
      value={value}
      name={name}
      className={classList}
      placeholder={placeHolder}
      onChange={onChange}
      required
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeHolder: PropTypes.string,
  onInput: PropTypes.func,
};

export default Input;