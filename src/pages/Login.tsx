import '../styles/LoginStyles.css';

export default function Login({ login }: any) {

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const { email } = e.target.elements

        login(email.value, email.value)
    }

    return (
        <div className='login--container'>

            <form onSubmit={handleSubmit} className='form'>

                <label htmlFor="email">Email:</label>
                <input type="email" name="email" placeholder="e.g. test@test.com" id="email" />
                <input type="submit" value="login" className='btn' />

            </form>
        </div>
    )
}
