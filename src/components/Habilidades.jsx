import useTitulo from "../hooks/useTitulo"

const Habilidades = () => {

    useTitulo('Habilidades')

    return (

        <section
            id="habilidades"
            className="py-20 px-4 text-center"
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <h2 className="text-3xl font-bold text-gradient-blue-to-teal">Habilidades</h2>
            <p className="mt-4 text-gray-700">Detallar habilidades</p>
        </section>
    )
}

export default Habilidades