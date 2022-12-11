import { Navigate } from "react-router-dom";
import { useStytchSession } from "@stytch/stytch-react";

export default function UserAccount({ children }: any) {

    const session = useStytchSession();

    if (!session) return <Navigate to="/login" replace />

    return children
}
