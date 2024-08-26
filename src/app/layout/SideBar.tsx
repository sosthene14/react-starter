import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import Hamburger from "hamburger-react";
import { IoLogOut } from "react-icons/io5";
import { dashBoarsLink } from "../style/class";
import { navItems } from "../constants/constants";
export const SideBar = ({
  getActiveScreen,
}: {
  getActiveScreen: (id: number) => void;
}) => {
  const [toggled, setToggled] = useState(true);
  const [activeScreen, setActiveScreen] = useState(0);

  return (
    <div className="">
      <Sidebar
        backgroundColor="#1e293b"
        width="300px"
        style={{ border: "none", marginTop: "80px" }}
        onBackdropClick={() => setToggled(false)}
        toggled={toggled}
        breakPoint="all"
      >
        <Menu className=" mt-10">
          {navItems.map((item:{id:number,icon:React.ReactElement,label:string}) => (
            <div key={item.id} onClick={() => setActiveScreen(Number(item.id))}>
              <MenuItem
                style={{ background: "transparent" }}
                active={activeScreen === item.id}
                icon={item.icon}
                className={`${dashBoarsLink} text-right ${
                  activeScreen === item.id
                    ? "dark:bg-gray-700 flex items-center gap-2 bg-slate-300 text-black dark:text-white"
                    : dashBoarsLink
                }`}
                onClick={() => {
                  setActiveScreen(Number(item.id));
                  getActiveScreen(item.id);
                }}
              >
                {item.label}
              </MenuItem>
            </div>
          ))}
        </Menu>
        <div onClick={()=>{
            sessionStorage.clear();
            window.location.reload();
        }} className={`${dashBoarsLink} pl-10 gap-5 py-4 w-full`}>
          <IoLogOut />
          <p>Deconnexion</p>
        </div>
      </Sidebar>
      <main style={{ display: "flex", padding: 10 }}>
        <div>
          <button className="sb-button" onClick={() => setToggled(!toggled)}>
            <Hamburger color="white" size={25} toggled={toggled} />
          </button>
        </div>
      </main>
    </div>
  );
};
