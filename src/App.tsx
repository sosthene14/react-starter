import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./app/pages/Home";
import PrivateRoutes from "./app/routes/privateRoutes";
import { Login } from "./app/pages/Login";
import { AuthProvider } from "./app/Provider/AuthProvider";
import { useAuth } from "./store/authStore";

const App = () => {
  const { isAuth } = useAuth();
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/login" element={isAuth ? <Home /> : <Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
