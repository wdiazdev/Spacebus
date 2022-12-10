import Login from "../components/Login";
import HomeVideo from '../assets/homevideo.mp4';
import "../styles/homePage.css";

export default function Home() {
    return (
        <div className="home--page">
            <div className='overlay'></div>
            <video autoPlay loop muted className='video'>
                <source src={HomeVideo} type='video/mp4' />
            </video>
            <Login />
        </div>
    )
}
