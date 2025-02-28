import { useState } from "react";
import useTitulo from "../hooks/useTitulo"

const SobreMi = () => {

    useTitulo('Sobre Mí')

    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section
            id="sobre-mi"
            className="py-20 px-4 text-center"
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <h2 className="text-3xl font-bold text-gradient-blue-to-teal">Sobre mí</h2>
            <div className="mt-4 max-w-2xl mx-auto text-gray-700 text-justify">
                {isExpanded
                    ?   <>
                            <p className="mb-3">Soy Federico Nova, un apasionado del desarrollo web con un enfoque particular en crear experiencias digitales modernas, funcionales y accesibles. Desde que comencé mi camino en la programación, me he sentido inspirado por la capacidad de la tecnología para transformar ideas en proyectos reales y útiles.</p>
                            <p className="mb-3">Mi pasión por aprender y mejorar constantemente me ha llevado a explorar tecnologías como React, JavaScript y Tailwind CSS, herramientas con las que me siento realmente cómodo. Como desarrollador en formación, disfruto enfrentar desafíos técnicos y siempre busco soluciones elegantes y eficientes.</p>
                            <p className="mb-3">Mi objetivo es seguir creciendo en el mundo del desarrollo web, tanto en términos de habilidades técnicas como de creatividad en diseño y funcionalidad. Creo que la programación no solo se trata de escribir código, sino también de contar historias y crear productos que mejoren la vida de las personas.</p>
                            <p>Cuando no estoy programando, soy una persona curiosa que siempre busca nuevos aprendizajes, estar haciendo deportes o moviéndome en general y generar muchas experiencias propias.</p>
                        </>
                    :   "Soy Federico Nova, un desarrollador web en formación con pasión por la tecnología y el aprendizaje continuo. Me encanta enfrentar desafíos técnicos y siempre busco soluciones creativas y eficientes."}
            </div>

            <button 
                onClick={() => setIsExpanded(!isExpanded)} 
                className="mt-4 text-blue-500 hover:underline"
            >
                {isExpanded ? "Ver menos" : "Ver más"}
            </button>
        </section>
    )
}

export default SobreMi