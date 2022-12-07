import { useState, useCallback } from "react";
import { useStytch } from "@stytch/react";

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

    return (
        <>
            <input
                placeholder='Email...'
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
            />
            <input
                placeholder='Password...'
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
            />

            <button onClick={login}>Login</button>

            <div>
                <p>Forgot your password?</p>
                <button onClick={resetPasswordByEmail}>Reset Password</button>
            </div>
        </>
    )
};