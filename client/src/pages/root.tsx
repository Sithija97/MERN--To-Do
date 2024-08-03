import { useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { RootLayout } from "../templates";
import { useAppDispatch } from "../store/store";
import { setToken } from "../store/auth-slice";

export const RootPage = () => {
  const { userId, isLoaded, getToken } = useAuth();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const setJwtToken = async () => {
    const jwt = await getToken();
    dispatch(setToken(jwt));
  };

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
    setJwtToken();
  }, [isLoaded]);

  return !isLoaded ? <p>Loading...</p> : <RootLayout />;
};
