import HomeVideo from '../assets/homevideo.mp4';
import '../styles/HomeStyles.css';
import astronaut from '../assets/homeastronaut.gif';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='home--page'>

            <div className='overlay'></div>

            <video autoPlay loop muted className='video'>
                <source src={HomeVideo} type='video/mp4' />
            </video>

            <div className='home--content'>

                <h1 className='text-focus-in'>Welcome to the Space<span>Bus</span></h1>
                <p>Solar System <span>Exploration</span></p>
                <Link to='/login'><button className='btn login--btn'>Login</button></Link>
                <img src={astronaut} alt='astronaut' className='astronaut text-focus-in' />

            </div>
        </div>
    )
}
