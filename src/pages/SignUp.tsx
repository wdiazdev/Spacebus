import { useState } from "react";
import { useStytch } from "@stytch/react";


export default function SignUp() {

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
        <div>
            <input
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                placeholder='Email...'
            />

            <input
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                placeholder='Password...'
            />

            <button onClick={signUp}>Sign Up</button>
        </div>
    )
};
