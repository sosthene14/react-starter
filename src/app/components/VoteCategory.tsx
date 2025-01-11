import { useParams } from "react-router-dom";


const VoteCategory = () => {
  const { category } = useParams();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Votez pour la catégorie : {category}
      </h1>
      {/* Ajouter ici le système de vote */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
        <p className="text-gray-600">Les options de vote seront affichées ici.</p>
      </div>
    </div>
  );
};

export default VoteCategory;
