import Login from "../components/Login";
import HomeVideo from '../assets/homevideo.mp4';
import "../styles/homePage.css";
import astronaut from "../assets/homeastronaut.gif";

export default function Home() {
    return (
        <div className="home--page">
            <div className='overlay'></div>
            <video autoPlay loop muted className='video'>
                <source src={HomeVideo} type='video/mp4' />
            </video>
            <div className="home--content">

                <h1 className="text-focus-in">Welcome to the space<span>bus</span></h1>
                <p>Solar system exploration</p>
                <img src={astronaut} alt="astronaut" className="astronaut text-focus-in" />

            </div>
            <Login />
        </div>
    )
}
