import '../../assets/index.css';
import LOGO from '../../assets/images/logo1.png';
import './Header.css'

const Header = ({ signedIn }) => {
    signedIn = true; //! Remove this line after implementing the authentication
    // signedIn = false; //! Remove this line after implementing the authentication
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
                            <li><a href="/calendar" className='nav_links'>Calendar</a></li>
                            
                            {signedIn && (
                                <>
                                    <li><a href="/my_portal" className='nav_links'>My Portal</a></li>
                                    <li><a href="/logout" className='nav_links'>Logout</a></li>
                                </>
                            )}
                            
                            {!signedIn && (
                                <>
                                    <li><a href="/login" className='nav_links'>Login/Sign Up</a></li>                                                      
                                </>
                            )}

                            <li><a href="/contact" className='nav_links'>Contact Us</a></li>

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