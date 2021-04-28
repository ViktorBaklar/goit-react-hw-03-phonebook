import style from './filter.module.css'
import Input from '../UI/input'

const Filter = ({ filter, onChange }) => (
  <form className={style.filter}>
    <label htmlFor="filter">Find contacts by name</label>
    <Input type="text" name="filter" value={filter} onChange={onChange} />
  </form>
)

export default Filter;