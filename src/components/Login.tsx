import { useState } from "react";
import { useStytch } from "@stytch/react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import astronaut from "../assets/homeastronaut.gif";


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
        <div className="home--page">

            <div className="home--content">

                <h1 className="text-focus-in">Welcome to the space<span>bus</span></h1>
                <p>Solar system exploration</p>
                <img src={astronaut} alt="astronaut" className="astronaut text-focus-in" />

            </div>

            <div className="login">

                <h3 className="header">Login</h3>

                <input
                    type="email"
                    placeholder='Email...'
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />

                <input
                    placeholder='Password...'
                    type="password"
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    id="password"
                />

                <Link to="/forgotpassword" className="forgot--pass">Forgot password?</Link>

                <button onClick={login} className="btn">Login</button>
                <div className="login--icons">
                    <FontAwesomeIcon icon={faFacebook} className="icon" />
                    <FontAwesomeIcon icon={faTwitter} className="icon" />
                    <FontAwesomeIcon icon={faYoutube} className="icon" />
                </div>

                <p>Not a member?<Link to="/signup" className="signup--link"> Sign up</Link></p>

            </div>

        </div>
    )
};


// const logout = useCallback(() => {
//     stytchClient.session.revoke();
// }, [stytchClient]);

// <button onClick={logout}>Logout</button>