import '../../assets/index.css';
import LOGO from '../../assets/images/logo1.png';
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className='container'>
                <img src={LOGO} className='logo_a' alt='logo' />
                <div className='title_area'>
                    <h1>Sports Meet and Greet</h1>
                    <nav>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <img src={LOGO} className='logo_b' alt='logo' />
            </div>
        </header>
    )
}

export default Header;