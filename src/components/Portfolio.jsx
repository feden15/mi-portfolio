import React, { useState  } from "react";
import '../index.css';

import Inicio from "./Inicio";
import SobreMi from "./SobreMi";
import Proyectos from "./Proyectos";
import Habilidades from "./Habilidades";
import Contacto from "./Contacto";


import { motion, AnimatePresence  } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

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

      {!showSections && (

        <Inicio handleSection={handleSection}/>
      
      )}

      {showSections && (
        <>

          <SobreMi/>

          <Proyectos/>

          <Habilidades/>

          <Contacto/>
          
        </>
      )}
      
    </div>
  );
};

export default Portfolio