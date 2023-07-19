import kallpaPotencia from "@assets/kallpa-potencia.json"
import lottie from "lottie-web"
import React, { useEffect, useRef } from "react"


const IndexPage = () => {
    const animacion = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            // container: document.querySelector("#kallpa-Potencia"),
            container: animacion.current,
            animationData: kallpaPotencia,
        })
    }, [])

    return (
        <div className="flex justify-center w-full mx-auto">
            <div ref={animacion} id="kallpa-Potencia" style={{ width: 200, height: 200 }} />
        </div>
    )
}

export default IndexPage
