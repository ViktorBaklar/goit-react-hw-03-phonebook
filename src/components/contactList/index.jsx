import ContactItem from '../contactItem'
import style from './contactList.module.css'

const ContactList = ({ items, onDelete }) => (
  <ul className={style.contactList}>
    {
      items.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))
    }
  </ul >
)

export default ContactList;