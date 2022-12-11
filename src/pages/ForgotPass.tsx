import { useState, useCallback } from "react";
import { useStytch } from "@stytch/react";
import "../styles/forgotpass.css";
import { useNavigate } from "react-router-dom";

export default function ForgotPass() {

    let navigate = useNavigate();

    const [email, setEmail] = useState("");

    const stytchClient = useStytch();

    const resetPasswordByEmail = useCallback(() => {
        stytchClient.passwords.resetByEmailStart({
            email: "wdiazdev@gmail.com",
        });
    }, [stytchClient]);

    return (
        <div className="forgot--password">

            <form className="form">

                <h3 className="header">Forgot your password?</h3>

                <div className="login--email">
                    <p>Your email:</p>
                    <input
                        type="email"
                        placeholder='Email...'
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />
                </div>

                <button
                    onClick={() => {
                        resetPasswordByEmail();
                        navigate("/");
                    }}
                    className="btn">
                    Reset
                </button>

            </form>
        </div>

    )
};