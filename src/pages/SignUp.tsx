import "../styles/signup.css";
import { useState } from "react";
import { useStytch } from "@stytch/react";
import { Link } from "react-router-dom";
import rocket from "../assets/rocket.gif";
import { useNavigate } from "react-router-dom";

export default function SignUp() {

    let navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const stytchClient = useStytch();

    const signUp = () => {
        stytchClient.passwords
            .strengthCheck({ email, password })
            .then((res) => {
                console.log("Success", res)
            })
            .catch((err) => {
                console.log("Error:", err)
            });

        stytchClient.passwords.create({
            email,
            password,
            session_duration_minutes: 60,
        })
    };

    return (
        <div className="signup--page">

            <img src={rocket} alt="astronaut" className="signup--rocket" />

            <form className="form--container">

                <h3 className="header text-focus-in">Ready to launch</h3>
                <p>Create a free account</p>

                <div className="login--email">
                    <p>Email:</p>
                    <input
                        type="email"
                        placeholder='Email...'
                        name="email"
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />
                </div>

                <div className="login--email">
                    <p className="labels">Password:</p>
                    <input
                        type="password"
                        placeholder='Password...'
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />
                </div>

                <button
                    onClick={() => {
                        navigate("/");
                        signUp();
                    }}
                    className="btn"
                >
                    Sign Up
                </button>

                <p><Link to="/" className="signup--link">Login</Link></p>

            </form>

        </div>

    )
};