import '../styles/NavbarStyles.css';
import Icon from '../assets/rocketicon.png';
import { NavLink } from 'react-router-dom';
import { useStytchSession } from '@stytch/stytch-react';

export default function Navigation({ logout }: any) {

    const session = useStytchSession();

    return (
        <nav className='navbar--container'>
            <div>
                <img src={Icon} alt='Logo' className='logo' />
            </div>
            <div className='navlinks'>
                <NavLink to="/">Home</NavLink>
                {!session && <NavLink to='/login'>Login</NavLink>}
                {session && <NavLink to='/account'>Account</NavLink>}
                {session && <button onClick={logout}>Logout</button>}
            </div>
        </nav>
    )
}
