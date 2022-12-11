import "../styles/login.css";
import { useState } from "react";
import { useStytch } from "@stytch/react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Login() {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const stytchClient = useStytch();

    const login = () => {
        stytchClient.passwords.authenticate({
            email,
            password,
            session_duration_minutes: 60,
        });
    };

    return (

        <div className="login">

            <h3 className="header text-focus-in">Login</h3>

            <div className="login--email">
                <p>Email:</p>
                <input
                    type="email"
                    placeholder='Email...'
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />
            </div>

            <div className="login--email">
                <p>Password:</p>
                <input
                    type="password"
                    placeholder='Password...'
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />
            </div>

            <Link to="/forgotpassword" className="forgot--pass">Forgot password?</Link>

            <button onClick={login} className="btn">Login</button>
            <div className="login--icons">
                <FontAwesomeIcon icon={faFacebook} className="icon" />
                <FontAwesomeIcon icon={faTwitter} className="icon" />
                <FontAwesomeIcon icon={faYoutube} className="icon" />
            </div>

            <p>Not a member?<Link to="/signup" className="signup--link"> Sign up</Link></p>

        </div>
    )
};


// const logout = useCallback(() => {
//     stytchClient.session.revoke();
// }, [stytchClient]);

// <button onClick={logout}>Logout</button>