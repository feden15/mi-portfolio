import React from "react";
import './index.css';

const Portfolio = () => {
  
    return (
      <div className="min-h-screen bg-gray-100 text-gray-900">
  
        {/* NAVEGACIÓN */}
        <nav className="bg-white shadow-md fixed w-full top-0 left-0 py-4 px-6 flex justify-between items-center z-10">
          <h1 className="text-2xl text-gradient-blue-to-teal font-bold">Mi Portafolio</h1>
          
          <ul className="flex space-x-6">
            <li><a  className="hover:text-blue-500 transition-colors">Inicio</a></li>
            <li><a  className="hover:text-blue-500 transition-colors">Sobre mí</a></li>
            <li><a  className="hover:text-blue-500 transition-colors">Proyectos</a></li>
            <li><a  className="hover:text-blue-500 transition-colors">Habilidades</a></li>
            <li><a  className="hover:text-blue-500 transition-colors">Contacto</a></li>
          </ul>
        </nav>

        {/* INICIO */}
        <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-teal-500 text-white text-center p-8">
          <h1 className="text-4xl font-bold">Federico Nova</h1>
          <p className="text-lg mt-2 font-light">Desarrollador Web | React | JavaScript | Tailwind</p>
        </section>

        {/* SOBRE MI */}
        <section className="py-20 px-4 text-center">
            <h2 className="text-3xl font-bold text-gradient-blue-to-teal">Sobre mí</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-700">Acá va info sobre mí</p>
        </section>

        {/* PROYECTOS */}
        <section className="py-20 px-4 text-center bg-white">

          <h2 className="text-3xl font-bold text-gradient-blue-to-teal">Proyectos</h2>
  
          {/* Tarjetas de proyectos */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gradient-blue-to-teal">Proyecto 1</h3>
              <p className="mt-2 text-gray-600">Descripción del proyecto.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gradient-blue-to-teal">Proyecto 2</h3>
              <p className="mt-2 text-gray-600">Descripción del proyecto.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gradient-blue-to-teal">Proyecto 3</h3>
              <p className="mt-2 text-gray-600">Descripción del proyecto.</p>
            </div>
          </div>

        </section>
        
      </div>
    );
  };

export default Portfolio