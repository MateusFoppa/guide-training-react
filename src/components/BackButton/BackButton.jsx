import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <button className="bg-gray-600 text-white font-bold py-2 px-4 rounded-md gap-4 w-4/5 mb-4 items-center justify-center" onClick={handleGoBack}>Voltar</button>
  );
};

export default BackButton;
