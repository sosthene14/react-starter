import React from 'react';
import { Link } from 'react-router-dom';


interface CategoryCardProps {
  title: string;
  description: string;
  slug: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, description, slug }) => {
  return (
    <Link to={`/vote/${slug}`}>
      <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 cursor-pointer transition duration-300 ease-in-out">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
