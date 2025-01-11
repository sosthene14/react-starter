import CategoryCard from "../components/CategoryCard";


const categories = [
  { title: 'Musique', description: 'Votez pour vos artistes préférés', slug: 'musique' },
  { title: 'Art', description: 'Soutenez les meilleurs artistes visuels', slug: 'art' },
  { title: 'Culture', description: 'Découvrez les traditions et votez', slug: 'culture' },
];

const CategoriesPage = () => {
  return (
    <div className=" bg-gray-50 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Votez pour votre catégorie préférée</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <CategoryCard
            key={category.slug}
            title={category.title}
            description={category.description}
            slug={category.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
