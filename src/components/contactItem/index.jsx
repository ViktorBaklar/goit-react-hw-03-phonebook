import PropTypes from 'prop-types'
import Button from '../UI/button'
import style from './contactItem.module.css'


const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <li className={style.contactItem}>
      <div>
        <span>{name}: </span>
        <span>{number}</span>
      </div>
      <Button
        type="button"
        onClick={() => onDelete(id)}
      >
        Delete
			</Button>
    </li>
  );
}

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
}