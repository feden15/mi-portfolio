import { useEffect } from "react"

const useTitulo = (titulo) => {

    useEffect(() => {
        document.title = `Portfolio - ${titulo}`
      }, [])
      
}

export default useTitulo