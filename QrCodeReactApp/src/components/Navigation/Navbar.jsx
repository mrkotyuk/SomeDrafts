import { Link } from 'react-router-dom'
import s from './Navbar.module.css'

const Navbar = () => {

    return (
        <nav className={s.container}>
            <Link to='/generate'>Генерувати QR код</Link>
            <Link to='/scan'>Сканувати QR код</Link>
            <Link to='/scanHistory'>Історія сканування</Link>
            <Link to='/generateHistory'>Історія генерування</Link>
        </nav>
    )
};
export default Navbar;