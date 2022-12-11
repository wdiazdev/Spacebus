import { useEffect } from 'react';
import { useStytch, useStytchSession } from '@stytch/stytch-react';
import { useNavigate } from 'react-router-dom';

export default function Authenticate() {

    const session = useStytchSession();
    const client = useStytch();
    const navigate = useNavigate();

    useEffect(() => {
        if (session) {
            navigate('/account')
        } else {
            const token: any = new URLSearchParams(window.location.search).get('token')

            client.magicLinks.authenticate(token, {
                session_duration_minutes: 60
            }).then(() => {
                alert('Thank you for your confirmation!')
                navigate(0)
            })
        }
    }, [client, session])

    return (
        <div>
            <h1>Loading...</h1>
            <p>Please wait while we authenticate your account.</p>
        </div>
    )
}
