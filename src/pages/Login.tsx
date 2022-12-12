import '../styles/LoginStyles.css';
import Rocket from '../assets/rocket.gif';

export default function Login({ login }: any) {

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const { email } = e.target.elements

        login(email.value, email.value)
    }

    return (
        <div className='login--container'>
            <img src={Rocket} alt='Rocket' className='rocket text-focus-in' />
            <form onSubmit={handleSubmit} className='form'>

                <h3 className='text-focus-in'>Ready to Launch?</h3>
                <label htmlFor='email'>Email:</label>
                <input type='email' name='email' placeholder='e.g. test@test.com' id='email' />
                <input type='submit' value='login' className='btn' />

            </form>
        </div>
    )
}
