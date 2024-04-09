import '../../assets/index.css';
import LOGO from '../../assets/images/logo1.png';
import './Header.css'

const Header = ({ signedIn }) => {
    signedIn = false; //! Remove this line after implementing the authentication
    return (
        <header>
            <div className='container'>
                <a href="/" className='logo_a'>
                    <img src={LOGO} alt='logo' />
                </a>
                <div className='title_area'>
                    <h1>Sports Meet and Greet</h1>
                    <nav>
                        <ul>
                            <li><a href="/" className='nav_links'>Home</a></li>
                            <li><a href="/about" className='nav_links'>About</a></li>
                            <li><a href="/contact" className='nav_links'>Contact</a></li>
                            
                            {!signedIn && (
                                <>
                                    <li><a href="/login" className='nav_links'>Login</a></li>                                                      
                                    <li><a href="/signup" className='nav_links'>Sign up</a></li>
                                </>
                            )}

                        </ul>
                    </nav>
                </div>
                <a href="/" className='logo_b'>
                    <img src={LOGO} alt='logo' />
                </a>
            </div>
        </header>
    )
}

export default Header;