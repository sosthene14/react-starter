import { useAuth } from "../../store/authStore";

export const useSetToken = () => {
  const { setIsAuth } = useAuth();
  const setTokenToSession = (token: string, shouldNavigate: boolean = true) => {
    if (sessionStorage.getItem("token") !== token) {
      sessionStorage.setItem("token", token);
      setIsAuth(true);
      if (shouldNavigate) {
        window.location.href = "/"
      }
    }
  };

  return { setTokenToSession };
};
