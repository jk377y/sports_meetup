
import '../../assets/index.css';
import './Homepage.css';
import placeholderImage from '../../assets/images/teamSports.webp';

const Homepage = () => {
    return (
        <div className='home_container'>
            <aside>
                <h3 align='center'>Upcoming Events</h3>
                <ul className='events_items'>

                    <li className='events_item'>
                        <h6 className='events_dates'>Saturday, Apr. 13th</h6>
                        <a href="/calendar" className='events_event'>soccer tourney</a>
                    </li>
                    <li className='events_item'>
                        <h6 className='events_dates'>Monday, Apr. 15th</h6>
                        <a href="/calendar">tennis match</a>
                    </li>
                    <li className='events_item'>
                        <h6 className='events_dates'>Wednesday, Apr. 17th</h6>
                        <a href="/calendar">golf tournament</a>
                    </li>
                    <li className='events_item'>
                        <h6 className='events_dates'>Friday, Apr. 19th</h6>
                        <a href="/calendar">swimming competition</a>
                    </li>
                    <li className='events_item'>
                        <h6 className='events_dates'>Saturday, Apr. 20th</h6>
                        <a href="/calendar">soccer tourney</a>
                    </li>
                    <li className='events_item'>
                        <h6 className='events_dates'>Monday, May 6th</h6>
                        <a href="/calendar">tennis match</a>
                    </li>
                    <li className='events_item'>
                        <h6 className='events_dates'>Wednesday, May 8th</h6>
                        <a href="/calendar">golf tournament</a>
                    </li>
                    <li className='events_item'>
                        <h6 className='events_dates'>Friday, May 10th</h6>
                        <a href="/calendar">swimming competition</a>
                    </li>

                </ul>
            </aside>
            <main>
                <section>
                    <h1>Welcome to our page!</h1>
                    
                    <div className="image-gallery">
                        {[...Array(20)].map((_, index) => (
                            <img key={index} src={placeholderImage} alt={`Image ${index + 1}`} />
                        ))}
                    </div>

                </section>
            </main>
        </div>
    )
}

export default Homepage;
