import { motion } from "framer-motion";

const Inicio = () => {

    return (
        <>
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
        
        </>
    )
}

export default Inicio