import { useState, useCallback } from "react";
import { useStytch } from "@stytch/react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import astronaut from "../assets/homeastronaut.png";


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

    const resetPasswordByEmail = useCallback(() => {
        stytchClient.passwords.resetByEmailStart({
            email: "wdiazdev@gmail.com",
        });
    }, [stytchClient]);

    // const logout = useCallback(() => {
    //     stytchClient.session.revoke();
    // }, [stytchClient]);

    return (
        <div className="home--page">

            <div className="home--content">
                <h1>Welcome to the space<span>bus</span></h1>
                <p>Solar system exploration</p>
                <img src={astronaut} alt="astronaut" className="astronaut" />
            </div>

            <div className="login">
                <h3>Login</h3>

                <input
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

                <Link to="/resetpassword" className="forgot--pass">Forgot password?</Link>

                <button onClick={login} className="btn">Login</button>

                <p>Not a member?<Link to="/signup" className="signup--link"> Sign up</Link></p>

                <div className="login--icons">
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faYoutube} />
                </div>

                {/* <button onClick={resetPasswordByEmail} className="btn">Reset Password</button> */}

                {/* <button onClick={logout}>Logout</button> */}
            </div>
        </div>
    )
};