import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './pages/Home';
import Navigation from './components/Navigation';
import Login from './pages/Login';
import Account from './pages/Account';
import Authenticate from './pages/Authenticate';
import UserAccount from './components/UserAccount';
import { useStytch } from '@stytch/stytch-react';
import { useCallback } from 'react';

function App() {

  const client = useStytch();

  const navigate = useNavigate();

  const login = async (email: string) => {
    await client.magicLinks.email.loginOrCreate(email)
    alert(`An email has been sent to ${email}`)
  }

  const logout = useCallback(async () => {
    await client.session.revoke()
    alert(`You have successfully logged out`)
  }, [client])

  return (
    <>
      <Navigation logout={logout} />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/login' element={<Login login={login} />} />
        <Route path='/account' element={
          <UserAccount>
            <Account />
          </UserAccount>
        } />
        <Route path='/authenticate' element={<Authenticate />} />
        <Route path='*' element={<p className='error'>404! Page not found!</p>} />
      </Routes>
    </>
  )
};

export default App