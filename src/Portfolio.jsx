import React, { useState } from "react";
import './index.css';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Portfolio = () => {

  const [showSections, setShowSections] = useState(false)
  
  const handleNavClick = (sectionId) => {
    
    debugger
    
    const section = document.getElementById(sectionId);

    if (section) {
      console.log(sectionId);
      const sectionTop = section.offsetTop; // Obtén la posición vertical de la sección
      let currentPosition = window.scrollY; // Obtén la posición actual del scroll
  
      const scrollDistance = sectionTop - currentPosition; // Distancia de desplazamiento
      const duration = 2000; // Duración en ms (2 segundos)
      const step = 10; // Intervalo de tiempo para mover el scroll
      const steps = duration / step; // Número total de pasos para el desplazamiento
      let stepCount = 0;
  
      const scrollInterval = setInterval(() => {
        const scrollAmount = (scrollDistance / steps) * stepCount;
        window.scrollTo(0, currentPosition + scrollAmount);
        stepCount++;
  
        if (stepCount >= steps) {
          clearInterval(scrollInterval); // Detener el intervalo cuando termine el desplazamiento
        }
      }, step);
    }
    setShowSections(true);
  };
  
  return (
    <div className="min-h-screen text-gray-900">

      {/* NAVEGACIÓN */}
      <nav className="bg-white shadow-md fixed w-full top-0 left-0 py-4 px-6 flex justify-between items-center z-10">
        <h2 className="text-2xl text-gradient-blue-to-teal font-bold">Mi Portafolio</h2>
        
        <ul className="flex space-x-6">
        <li><a href="#inicio" onClick={() => setShowSections(false)} className="hover:text-blue-500 cursor-pointer transition-colors">Inicio</a></li>
          <li><a href="#sobre-mi" onClick={() => handleNavClick("sobre-mi")} className="hover:text-blue-500 cursor-pointer transition-colors">Sobre mí</a></li>
          <li><a href="#proyectos" onClick={() => handleNavClick("proyectos")} className="hover:text-blue-500 cursor-pointer transition-colors">Proyectos</a></li>
          <li><a href="#habilidades" onClick={() => handleNavClick("habilidades")} className="hover:text-blue-500 cursor-pointer transition-colors">Habilidades</a></li>
          <li><a href="#contacto" onClick={() => handleNavClick("contacto")} className="hover:text-blue-500 cursor-pointer transition-colors">Contacto</a></li>
        </ul>
      </nav>

      {/* INICIO */}
      <section
        className={`h-screen flex flex-col justify-center items-center bg-gradient-blue-to-teal text-white text-center p-8 ${showSections ? "hidden" : "flex"}`}
      >

        <motion.div 
          className="flex flex-col items-center"
          initial={{ y: -700, opacity: -2 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >

          <motion.img
            src="../public/imgs/foto-perfil.webp"
            alt="Perfil estilo avatar"
            className="w-65 h-65 mt-4 mb-4 rounded-full border-3 border-white shadow-lg"
            transition={{ duration: 2, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}

          />

          <h1 className="text-4xl font-bold">Federico Nova</h1>
          <p className="text-lg mt-2 font-light">Desarrollador Web | React | JavaScript | Tailwind</p>

          <button
            onClick={handleNavClick}
            className="w-full h-17 bg-transparent-arrow absolute bottom-0 left-1/2 transform -translate-x-1/2 cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faArrowDown}
              size="2x"
              className="text-white"
              beat
            />
          </button>

        </motion.div>
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