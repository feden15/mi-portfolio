import React from "react";

const Portfolio = () => {
  
    return (
      <div className="min-h-screen bg-gray-100 text-gray-900">
  
        {/* NAVEGACIÓN */}
        <nav className="bg-white shadow-md fixed w-full top-0 left-0 py-4 px-6 flex justify-between items-center z-10">

          <h1 className="text-xl font-bold">Mi Portafolio</h1>
          
          <ul className="flex space-x-6">
            <li><a  className="hover:text-blue-500 transition-colors">Inicio</a></li>
            <li><a  className="hover:text-blue-500 transition-colors">Sobre mí</a></li>
            <li><a  className="hover:text-blue-500 transition-colors">Proyectos</a></li>
            <li><a  className="hover:text-blue-500 transition-colors">Habilidades</a></li>
            <li><a  className="hover:text-blue-500 transition-colors">Contacto</a></li>
          </ul>

        </nav>
        
      </div>
    );
  };

export default Portfolio