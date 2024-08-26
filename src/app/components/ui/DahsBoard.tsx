import { useState } from "react";
import { SideBar } from "../../layout/SideBar";
import { ComponentToRender } from "./ComponentToRender";

export const DahsBoard = () => {
  const [activeScreen, setActiveScreen] = useState(0);
  return (
    <div className="">
      <SideBar getActiveScreen={setActiveScreen} />
      <ComponentToRender currentComponentId={activeScreen} />
    </div>
  );
};
