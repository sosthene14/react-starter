// src/App.tsx
import React, { useState } from "react";
import Laravel from "../courses/Laravel";
import NoSQL from "../courses/NoSQL";
import Oracle from "../courses/Oracle";

const Home: React.FC = () => {
  const [activeCourse, setActiveCourse] = useState("Laravel");


  return (
    <div className="container flex justify-center flex-col items-center mx-auto p-4">
      <div className="flex gap-5">
        <button
          onClick={() => setActiveCourse("Laravel")}
          className={` text-white border-1 border-solid border-blue-400 px-4 py-2 rounded ${
            activeCourse === "Laravel"
              ? "bg-blue-700"
              : " border-solid border-blue-400 bg-slate-400"
          }`}
        >
          Laravel
        </button>
        <button
          onClick={() => setActiveCourse("NoSQL")}
          className={` text-white border-1 border-solid border-blue-400  px-4 py-2 rounded ${
            activeCourse === "NoSQL"
              ? "bg-blue-700"
              : " border-solid border-blue-400  bg-slate-400"
          }`}
        >
          NoSQL
        </button>
        <button
          onClick={() => setActiveCourse("Oracle")}
          className={` text-white border-1 border-solid border-blue-400  px-4 py-2 rounded ${
            activeCourse === "Oracle"
              ? "bg-blue-700"
              : " border-solid border-blue-400  bg-slate-400"
          }`}
        >
          Oracle
        </button>
      </div>
      <div className="mt-10">
        <div className={`${activeCourse === "Laravel" ? "block" : "hidden"}`}><Laravel /></div>
        <div className={`${activeCourse === "NoSQL" ? "block" : "hidden"}`}><NoSQL /></div>
        <div className={`${activeCourse === "Oracle" ? "block" : "hidden"}`}><Oracle /></div>
      </div>

      <a href="https://github.com/sosthene14" className=" underline">Made by Sosthène Mounsamboté</a>
    </div>
  );
};

export default Home;
