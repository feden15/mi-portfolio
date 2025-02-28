import React, { useState, useRef, useEffect  } from "react";
import '../index.css';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Inicio from "./Inicio";

const Portfolio = () => {

  const [showSections, setShowSections] = useState(false)
  
  const handleSection = (shouldShow) => {

    setShowSections(shouldShow)
    
  };
  
  return (
    <div className="min-h-screen text-gray-900">

      {/* NAVEGACIÓN */}
      <nav className="bg-white shadow-md fixed w-full top-0 left-0 py-4 px-6 flex justify-between items-center z-10">
        <h2 className="text-2xl text-gradient-blue-to-teal font-bold">Mi Portafolio</h2>
        
        <ul className="flex space-x-6">
          <li>
            <a
              href="inicio"
              onClick={() => handleSection(false)}
              className="hover:text-blue-500 cursor-pointer transition-colors">Inicio</a>
          </li>
        </ul>
      </nav>

      {/* INICIO */}
      <section
        id="inicio"
        className={`h-screen flex flex-col justify-center items-center bg-gradient-blue-to-teal text-white text-center p-8 ${showSections ? "hidden" : "flex"}`}
      >
        
        <Inicio/>
        
        <motion.button
          onClick={() => handleSection(true)}
          className="w-full h-17 bg-transparent-arrow absolute bottom-0 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ y: 0, opacity: -20 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          aria-label="Mostrar secciones"
        >
          <FontAwesomeIcon
            icon={faArrowDown}
            size="2x"
            className="text-white"
            beat
          />
        </motion.button>

      </section>

      {showSections && ( /* se mostrarán cuando se haga clic en un li del nav correspondiente a las secciones */
        <>
          {/* SOBRE MI */}
          <section
            id="sobre-mi"
            className="py-20 px-4 text-center"
          >
              <h2 className="text-3xl font-bold text-gradient-blue-to-teal">Sobre mí</h2>
              <p className="mt-4 max-w-2xl mx-auto text-gray-700">Acá va info sobre mí</p>
          </section>

          {/* PROYECTOS */}
          <section
            id="proyectos"
            className="py-20 px-4 text-center "
          >
            <h2 className="text-3xl font-bold text-gradient-blue-to-teal">Proyectos</h2>

            {/* Tarjetas de proyectos */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gradient-blue-to-teal">Proyecto 1</h3>
                <p className="mt-2 text-gradient-blue-to-teal">Descripción del proyecto.</p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gradient-blue-to-teal">Proyecto 2</h3>
                <p className="mt-2 text-gradient-blue-to-teal">Descripción del proyecto.</p>
              </div>
              <div className="bg-white shadow-xl rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gradient-blue-to-teal">Proyecto 3</h3>
                <p className="mt-2 text-gradient-blue-to-teal">Descripción del proyecto.</p>
              </div>
            </div>

          </section> {/* /proyectos */}

          {/* HABILIDADES */}
          <section
            id="habilidades"
            className="py-20 px-4 text-center"
          >
            <h2 className="text-3xl font-bold text-gradient-blue-to-teal">Habilidades</h2>
            <p className="mt-4 text-gray-700">Detallar habilidades</p>
          </section>

          {/* CONTACTO */}
          <section
            id="contacto"
            className="py-20 px-4 text-center"
          >
            <h2 className="text-3xl font-bold text-gradient-blue-to-teal">Contacto</h2>
            <p className="mt-4 text-gray-700">Linkedin | Correo electrónico | Wpp</p>
          </section>
        </>
      )}
      
    </div>
  );
};

export default Portfolio