import { motion, AnimatePresence } from "framer-motion"
import Contacto from "./Contacto"
import Habilidades from "./Habilidades"
import Proyectos from "./Proyectos"
import SobreMi from "./SobreMi"

const SectionsOcultas = () => {

    return (
        <AnimatePresence>
        
            <motion.section
                id="inicio"
                className="bg-gradient-blue-to-teal-blurred"
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                exit={{ opacity: 0}}
                transition={{ duration: 1, ease: "easeOut" }}
            >

                <SobreMi/>

                <Proyectos/>

                <Habilidades/>

                <Contacto/>

            </motion.section>

        </AnimatePresence>
    )

}

export default SectionsOcultas