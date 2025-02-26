import React from "react";

const Portfolio = () => {
  
    return (
      <div className="min-h-screen bg-gray-100 text-gray-900">
  
        {/* NAVEGACIÓN */}
        <nav className="bg-white shadow-md fixed w-full top-0 left-0 py-4 px-6 flex justify-between items-center z-10">
          <h1 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500 font-bold">Mi Portafolio</h1>
          
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
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500">Sobre mí</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-700">Acá va info sobre mí</p>
        </section>
        
      </div>
    );
  };

export default Portfolio