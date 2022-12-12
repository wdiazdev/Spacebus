import '../styles/NavbarStyles.css';
import Astronot from '../assets/astronot.gif';
import { NavLink, useNavigate } from 'react-router-dom';
import { useStytchSession } from '@stytch/stytch-react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function Navigation({ logout }: any) {

    const session = useStytchSession();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <nav className='navbar--container'>

            <div>
                <img src={Astronot} alt='Logo' className='logo' />
            </div>

            <div className='navlinks text-focus-in '>
                {!session && <NavLink to="/">home</NavLink>}
                {session &&
                    <NavLink to='/account'>
                        <Button
                            id='basic-button'
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup='true'
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            className='account-btn'
                            endIcon={<KeyboardArrowDownIcon />}
                            sx={{
                                color: '#00FFFF',
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '1.2rem'
                            }}
                        >
                            Account
                        </Button>
                        <Menu
                            id='basic-menu'
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem
                                onClick={handleClose}
                            >
                                {session &&
                                    <Button
                                        onClick={logout}
                                        className='btn logout--btn'
                                        sx={{
                                            fontSize: '1rem',
                                            letterSpacing: '1px',
                                            color: '#00FFFF',
                                            fontFamily: 'Poppins, sans-serif',
                                            padding: '0.5rem 1.5rem',
                                            border: 'none',
                                            background: '#000',
                                            transition: '0.5s ease-in',
                                            border: '1px solid #00FFFF'
                                        }}
                                    >
                                        Logout
                                    </Button>}
                            </MenuItem>
                        </Menu>
                    </NavLink>}
            </div>

        </nav >
    )
}


