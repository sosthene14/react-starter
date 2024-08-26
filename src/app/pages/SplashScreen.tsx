import { useEffect, useState } from "react";
import "./SplashScreen.css";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/authStore";

export const SplashScreen = () => {
  const { isAuth } = useAuth();
  const [shouldGoToLogin, setShouldGoToLogin] = useState(false);
  const navigate = useNavigate();
  const handleRedirection = () => {
    setTimeout(() => {
      !isAuth && setShouldGoToLogin(true);
    }, 3000);
  };

  useEffect(() => {
    if (shouldGoToLogin) {
      navigate("/login");
      setShouldGoToLogin(false);
    }
  }, [shouldGoToLogin, navigate]);
  useEffect(() => {
    handleRedirection();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldGoToLogin]);
  return (
    <div className="flex flex-col h-[100vh] justify-center items-center">
      <section>
        <div className="loading loading05 text-gray-500 text-5xl">
          <span>R</span>
          <span>O</span>
          <span>C</span>
          <span>O</span>
          <span>L</span>
          <span>I</span>
          <span>S</span>
        </div>
      </section>
    </div>
  );
};
