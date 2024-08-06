import { useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { RootLayout } from "../templates";

export const RootPage = () => {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [isLoaded]);

  return !isLoaded ? <p>Loading...</p> : <RootLayout />;
};
