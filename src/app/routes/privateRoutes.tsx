
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../../store/authStore";
import { SplashScreen } from "../pages/SplashScreen";


const PrivateRoutes = () => {
  const { isAuth } = useAuth();

  return isAuth ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Outlet />
    </motion.div>
  ) : (
    <SplashScreen />
  );
};

export default PrivateRoutes;
