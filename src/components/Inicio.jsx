import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";

const Inicio = ({ handleSection }) => {

    return (
        <AnimatePresence>
          <>
            <motion.section
              id="inicio"
              className="h-screen flex flex-col justify-center items-center bg-gradient-blue-to-teal text-white text-center p-8"
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              exit={{ opacity: 0}}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.div 
                className="flex flex-col items-center"
                initial={{ y: -700, opacity: -2 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >

                <motion.img
                src="../../imgs/foto-perfil.webp"
                alt="Perfil estilo avatar"
                className="w-65 h-65 mt-4 mb-4 rounded-full border-3 border-white shadow-lg"
                transition={{ duration: 2, ease: "easeOut" }}
                whileHover={{ scale: 1.1 }}
                aria-label="Foto de perfil"

                />

                <h1 className="text-4xl font-bold">Federico Nova</h1>
                <p className="text-lg mt-2 font-light">Desarrollador Web | React | JavaScript | Tailwind</p>

              </motion.div>
              
            </motion.section>
            <button
              onClick={() => handleSection(true)}
              className="w-full h-17 bg-transparent-arrow absolute bottom-0 left-1/2 transform -translate-x-1/2 cursor-pointer"
              aria-label="Mostrar secciones"
            >
              <FontAwesomeIcon
                icon={faArrowDown}
                size="2x"
                className="text-white"
                beatFade
                initial={{ opacity: 0 }}
                animate={{ opacity: 1}}
                exit={{ opacity: 0}}
              />
            </button>
          </>
      </AnimatePresence>
    )
}

export default Inicio