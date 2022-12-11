import "../styles/resetPass.css";
import { useCallback, useState } from "react";
import { useStytch } from "@stytch/react";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {

    const [newPassword, setNewPassword] = useState("");

    let navigate = useNavigate();

    const stytchClient = useStytch();

    const token: any = new URLSearchParams(window.location.search).get("token");

    const resetPassword = useCallback(() => {
        stytchClient.passwords.resetByEmail({
            token: token,
            password: newPassword,
            session_duration_minutes: 60,
        });
    }, [stytchClient, token, newPassword]);

    return (
        <div className="reset--password">


            <form className="reset--form">

                <div className="login--email">
                    <p>New password:</p>
                    <input
                        type="password"
                        placeholder='New Password'
                        onChange={(e) => {
                            setNewPassword(e.target.value)
                        }}
                    />
                </div>

                <button
                    onClick={() => {
                        navigate("/");
                        resetPassword();
                    }}
                    className="btn"
                >
                    Reset Password
                </button>

            </form>
        </div>
    )
};
