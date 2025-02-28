import useTitulo from "../hooks/useTitulo"

const Proyectos = () => {

    useTitulo('Proyectros')

    return (

        <section
            id="proyectos"
            className="py-20 px-4 text-center "
            transition={{ duration: 0.5, ease: "easeOut" }}
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

        </section>
    )
}

export default Proyectos