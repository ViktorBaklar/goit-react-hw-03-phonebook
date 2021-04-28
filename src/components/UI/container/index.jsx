import style from './container.module.css'

const Container = ({ children }) => <div className={style.container}>{children}</div>;

export default Container;