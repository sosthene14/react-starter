import { NavLink } from "react-router-dom";
import { logoWhiteRocolis } from "../../assets/images/image";
import { registerInput, submitBtnClass } from "../style/class";
import { useNavBar } from "../hooks/useNavBar";
import { BigLoader } from "../../assets/animations/Loader";
import { useGetAllUser } from "../hooks/useGetAllUser";
import { useUserAuthDetails } from "../../store/authStore";

const NavBar = () => {
  const { _setModificationToken, handleSubmit, isLoading } = useNavBar();
  const { setHaveReloaded } = useGetAllUser();
  const {modification_token } = useUserAuthDetails();
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <BigLoader isLoading={isLoading} />
      <nav className="shadow-lg fade-in-top mb-10 py-1 px-0 md:px-10 overflow-x-hidden dark:bg-[#1e293b] ">
        <div className="fade-in-top z-20"></div>
        <div className="flex justify-between items-center  ">
          <div className={`flex justify-center `}>
            <NavLink to={"/"}>
              <img
                src={logoWhiteRocolis}
                style={{ zIndex: 0 }}
                loading="lazy"
                className="w-[150px] z-0 fade-in-top"
              />
            </NavLink>
          </div>
          <div className="flex items-center gap-5">
            <input
              required
              onChange={(e) => _setModificationToken(e.target.value)}
              type="text"
              className={registerInput}
              placeholder="Veuillez saisir votre token"
            />
            <button
              onClick={() => setHaveReloaded(true)}
              type="submit"
              className={submitBtnClass}
            >
              {modification_token.length > 0 ? "Actualiser les données":"Valider"}
              
            </button>
          </div>
        </div>
      </nav>
    </form>
  );
};

export { NavBar };
