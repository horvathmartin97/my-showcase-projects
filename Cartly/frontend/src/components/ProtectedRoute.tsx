import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const auth = useContext(AuthContext);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    if (auth) {
      setIsHydrated(true);
    }
  }, [auth]);

  if (!isHydrated) {
    return <div>Loading...</div>;
  }

  if (!auth?.user) {
    return <Navigate to="/login" replace />;
  }

  return <div>{children}</div>;
}
