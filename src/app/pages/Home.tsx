import { DahsBoard } from "../components/ui/DahsBoard";
import { NavBar } from "../layout/NavBar";

export const Home = () => {
  return (
    <div className="bg-slate-800 w-full h-[100vh]">
      <NavBar />
      <DahsBoard />
    </div>
  );
};
