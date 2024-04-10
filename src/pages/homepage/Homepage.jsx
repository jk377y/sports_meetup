
import '../../assets/index.css';
import './Homepage.css';

const Homepage = () => {
    return (
        <div className='home_container'>
            <aside>
                <h3 align='center'>Upcoming Events</h3>
                <ul className='events_items'>
                    <li>
                        <h6>Saturday, Apr. 13th</h6>
                        <p>soccer tourney</p>
                    </li>
                    <li>
                        <h6>Monday, Apr. 15th</h6>
                        <p>tennis match</p>
                    </li>
                    <li>
                        <h6>Wednesday, Apr. 17th</h6>
                        <p>golf tournament</p>
                    </li>

                    <li>
                        <h6>Friday, Apr. 19th</h6>
                        <p>swimming competition</p>
                    </li>

                </ul>
            </aside>
            <main>
                <section>
                    <h1>Welcome to our page!</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed ut odio ut sapien tincidunt fermentum. 
                        Nullam in diam nec justo ultricies aliquet. 
                        Sed nec est nec justo sollicitudin ultrices. 
                        Nulla facilisi. 
                        Nullam auctor, libero sit amet tincidunt lacinia, 
                        turpis quam aliquam nunc, nec fermentum nunc libero et purus. 
                        Nullam non mauris auctor, ultricies urna at, 
                        fermentum libero. 
                        Donec nec risus nec nunc tincidunt gravida. 
                        Nullam in diam nec justo ultricies aliquet. 
                        Sed nec est nec justo sollicitudin ultrices. 
                        Nulla facilisi. 
                        Nullam auctor, libero sit amet tincidunt lacinia, 
                        turpis quam aliquam nunc, nec fermentum nunc libero et purus. 
                        Nullam non mauris auctor, ultricies urna at, 
                        fermentum libero. 
                        Donec nec risus nec nunc tincidunt gravida.
                    </p>
                </section>
            </main>
        </div>
    )
}

export default Homepage;
