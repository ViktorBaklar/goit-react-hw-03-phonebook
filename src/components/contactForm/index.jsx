import { Component } from "react"
import style from './contactForm.module.css'
import Input from '../UI/input'
import Button from '../UI/button'

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState(() => ({ [name]: value }));
  };

  handleSubmit = event => {
    event.preventDefault();
    const { onSubmit } = this.props;
    onSubmit && onSubmit({ ...this.state })
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {

    return (
      <form className={style.contactForm} onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <Input type="text" name="name" value={this.state.name} onChange={this.handleChange} pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п." />
        <label htmlFor="number">Number</label>
        <Input type="tel" name="number" value={this.state.number} onChange={this.handleChange} pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +" />
        <Button type="submit">Add contact</Button>

      </form>
    );

  };

}
export default ContactForm;