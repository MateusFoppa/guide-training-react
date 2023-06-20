import React, { useState } from 'react';

export default function DropdownButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    // Lógica para lidar com a opção selecionada
    console.log(`Opção selecionada: ${option}`);
  };

  return (
    <div className=" inline-block">
      <button
        onClick={handleToggle}
        className="py-2 px-4 rounded-md bg-gray-300 text-gray-700 hover:bg-gray-400"
      >
        Opções
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-40 bg-white border border-gray-300 rounded-md">
          <ul className="py-1">
            <li>
              <button
                onClick={() => handleOptionClick('Login')}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
              >
                Login
              </button>
            </li>
            <li>
              <button
                onClick={() => handleOptionClick('Register')}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
              >
                Register
              </button>
            </li>
            <li>
              <button
                onClick={() => handleOptionClick('Logout')}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

