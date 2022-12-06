import { useCallback, useState } from "react";
import { useStytch } from "@stytch/react";

export default function ResetPassword() {
    const [newPassword, setNewPassword] = useState("");

    const stytchClient = useStytch();

    const token = new URLSearchParams(window.location.search).get("token");

    const resetPassword = useCallback((token: any) => {
        stytchClient.passwords.resetByEmail({
            token,
            password: newPassword,
            session_duration_minutes: 60,
        });
    }, [stytchClient, token, newPassword]);

    return (
        <div>
            <input
                placeholder='New Password'
                onChange={(e) => {
                    setNewPassword(e.target.value)
                }}
            />

            <button onClick={resetPassword}>Reset Password</button>
        </div>
    )
}
