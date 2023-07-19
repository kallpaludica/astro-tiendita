import React from "react";
import ComunidadWidgets from "./HomeWidgets"
import ComunidadNotas from "./QueriesComunidadNotasLast"

const HeroComunidad = ({ data }) => {
  return (
    <>
      <div className="relative text-green-900 bg-fixed bg-white pattern-grid-lg">
        <div className="relative px-2 pb-12 bg-white">
          <div className="grid max-w-4xl grid-cols-1 gap-3 px-3 py-6 pb-6 mx-auto">
            <div className="relative z-50 flex flex-col items-center justify-center text-center">
              <h1 className="w-full font-mono text-4xl text-blue-600 md:text-6xl">
                Comunidad
              </h1>
            </div>
          </div>
          <h2 className="w-full mt-1 mb-3 font-sans text-center text-2xl font-bold text-gray-800">
            Un espacio de redes que nos potencian
          </h2>
          <div className="relative z-10 flex justify-center items-center" >
            <a href="/comunidad" className='btn orange'>
              Ingresar
            </a>
          </div>
          <div className="relative z-50 grid grid-cols-1 gap-3 px-2 mx-auto mt-12 mb-12 text-center max-w-7xl md:grid-cols-3">
            <ComunidadWidgets post={data} />
          </div>
          <div className="relative z-50 px-2 mx-auto mt-12 max-w-7xl">
            <div className="flex flex-col items-center justify-center mb-12">
              <h2 className="mt-3 font-mono text-4xl font-bold text-left text-gray-800 ">
                Educación y los Juegos de Mesa
              </h2>
            </div>
            <ComunidadNotas post={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroComunidad;
