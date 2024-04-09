import '../../assets/index.css';
import LOGO from '../../assets/images/logo1.png';
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className='container'>
                <img src={LOGO} className='logo_a' alt='logo' />
                <h1>Sports Meet and Greet</h1>
                <img src={LOGO} className='logo_b' alt='logo' />
            </div>
        </header>
    )
}

export default Header;