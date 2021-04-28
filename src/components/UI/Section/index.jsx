import style from './section.module.css'

const Section = ({ title, children }) => (
  <div className={style.section}>
    <h2>{title}</h2>
    {children}
  </div>
)

export default Section;