import React, { useState } from 'react';

interface StudentFormProps {
  onAddStudent: (firstName: string, lastName: string) => void;
}

const StudentForm: React.FC<StudentFormProps> = ({ onAddStudent }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (firstName && lastName) {
      onAddStudent(firstName, lastName);
      setFirstName('');
      setLastName('');
    }
  };

  return (
    <form  onSubmit={handleSubmit} className="mb-4 w-full flex justify-center flex-wrap gap-3 items-center">
      <input
        type="text"
        placeholder="Prénom"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="p-2 w-[300px] border border-gray-300 rounded mr-2"
      />
      <input
        type="text"
        placeholder="Nom"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="p-2 w-[300px] border border-gray-300 rounded mr-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Ajouter un étudiant
      </button>
    </form>
  );
};

export default StudentForm;
