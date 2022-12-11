import '../styles/NavbarStyles.css';
import Astronot from '../assets/astronot.gif';
import { NavLink } from 'react-router-dom';
import { useStytchSession } from '@stytch/stytch-react';

export default function Navigation({ logout }: any) {

    const session = useStytchSession();

    return (
        <nav className='navbar--container'>
            <div>
                <img src={Astronot} alt='Logo' className='logo' />
            </div>
            <div className='navlinks text-focus-in '>
                {!session && <NavLink to="/">Home</NavLink>}
                {session && <NavLink to='/account'>Account</NavLink>}
                {session && <button onClick={logout} className='btn'>Logout</button>}
            </div>
        </nav>
    )
}
