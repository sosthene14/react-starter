import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import VoteCategory from "./app/components/VoteCategory";
import { HomePage } from "./app/pages/HomePage";
import { useFetchCategories } from "./app/hooks/useFetchCategories";
import { useFetchNomines } from "./app/hooks/useFetchNomines";

const App = () => {

   useFetchCategories();
   useFetchNomines();

   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/vote/:category" element={<VoteCategory />} />
         </Routes>
      </BrowserRouter>
   )

};

export default App;
