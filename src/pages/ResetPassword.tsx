import { useCallback, useState } from "react";
import { useStytch } from "@stytch/react";

export default function ResetPassword() {
    const [newPassword, setNewPassword] = useState("");

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
