import React from "react";

const HomeWidgets = ({ children }) => {
  return (
    <>
      <a
        className="flex items-center justify-between w-full p-4 font-sans text-xl font-semibold leading-tight text-gray-800 duration-500 transform bg-white rounded-md shadow-lg hover:-translate-y-1 hover:shadow-2xl hover:border-green-200 hover:text-green-200"
        href={`/comunidad/recursos/`}
      >
        <div className="mb-3 text-xl font-bold text-left ">
          <h2 className="mb-1 text-sm text-green-600 uppercase">
            Recursos lúdicos
          </h2>
          <p className="font-serif text-gray-800">
            Para jugar al <br /> alcance de la mano.
          </p>
        </div>
      </a>
      <a
        className="flex items-center justify-between w-full p-4 font-sans text-xl font-semibold leading-tight text-gray-800 duration-500 transform bg-white rounded-md shadow-lg hover:-translate-y-1 hover:shadow-2xl hover:border-green-200 hover:text-green-200"
        href={`/comunidad/proyectos-que-nos-potencian/`}
      >
        <div className="mb-3 text-xl font-bold text-left ">
          <h2 className="mb-1 text-sm text-green-600 uppercase">
            Grandes Ideas
          </h2>
          <p className="font-serif text-gray-800">
            Valiosos proyectos que nos <br /> rodean día a día.
          </p>
        </div>
      </a>
      <a
        className="flex items-center justify-between w-full p-4 font-sans text-xl font-semibold leading-tight text-gray-800 duration-500 transform bg-white rounded-md shadow-lg hover:-translate-y-1 hover:shadow-2xl hover:border-green-200 hover:text-green-200"
        href={`/comunidad/notas/`}
      >
        <div className="mb-3 text-xl font-bold text-left ">
          <h2 className="mb-1 text-sm text-green-600 uppercase">
            Educación y los Juegos de Mesa
          </h2>
          <p className="font-serif text-gray-800">
            {" "}
            Noticias y entrevistas <br /> del campo de la Recreación.
          </p>
        </div>
      </a>
    </>
  );
};

export default HomeWidgets;
