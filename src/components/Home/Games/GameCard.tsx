import React from "react"


const Card = ({ card }) => (
  <div className="relative w-full mb-3 overflow-hidden transition-all duration-500 transform bg-white rounded-md shadow-lg hover:shadow-2xl md:max-w-md" >
    <div className="flex sm:flex-col">
      {card.imagenDestacada ? (
        <a
          href={`/tienda-de-juegos/${card.slug}/`}
          className="bg-white image"
        >
          <img
            src={`https:${card.imagenDestacada.fields.file.url}?fm=webp&fit=thumb&f=center&h=400&w=400`}
            alt={card.title}
            width="300"
            height="200"
          />
        </a>
      ) : (
        <a
          href={`/tienda-de-juegos/${card.slug}/`}
          className="image"
        >
          {card.title}
        </a>
      )}
      <div className="relative flex flex-col w-full px-0 pb-0 font-serif text-left bg-white ">
        <div className="flex-grow" style={{ minHeight: "70px" }}>
          <a
            href={`/tienda-de-juegos/${card.slug}/`}
            className="flex-grow inline-block px-2 pt-4 font-serif text-base font-bold line-clamp-1 hover:text-gray-800 hover:underline underline-offset-2"
          >
            {card.title}
          </a>
          {card.GameAges && (
            <div className="hidden w-full px-2 pt-1 text-center game-ages md:px-0 ">
              <div className="flex justify-start pb-1 font-serif text-lg font-bold text-left text-gray-700 md:px-2 ">
                <div className="flex flex-1 text-base opacity-100">
                  {card.GameAges}+ años
                </div>
              </div>
            </div>
          )}
          {card.GameDuration && (
            <div className="hidden w-full px-2 pt-1 text-center game-duration md:px-0">
              <div className="flex justify-center pb-1 font-serif text-lg font-bold text-center text-gray-700 md:px-2 ">
                <div className="flex flex-1 text-base opacity-100">
                  Duración: {card.GameDuration}min.
                </div>
              </div>
            </div>
          )}
          {card.GamePlayers && (
            <div className="hidden w-full pt-1 text-center game-players">
              <div className="flex justify-center pb-1 font-serif text-lg font-bold text-center text-gray-700 ">
                <div className="flex items-baseline flex-1 ">
                  {card.GamePlayers}
                  jugadorxs
                </div>
              </div>
            </div>
          )}
          {card.GameInStock ? (
            <div
              className="relative top-0 right-0 flex items-center justify-start pt-1 pl-1 m-0 font-serif text-sm font-bold text-left transition-all duration-500 text-emerald-600 md:text-base hover:text-emerald-800"
              title="Por encargo"
            >
              <span className="block font-medium text-base ml-1">En Stock</span>
            </div>
          ) : (
            <div
              className="relative top-0 right-0 flex items-center justify-start pt-1 pl-1 m-0 font-serif text-sm font-bold text-left text-blue-600 transition-all duration-500 md:text-base hover:text-blue-800"
              title="Por encargo"
            >
              <span className="block">Por encargo</span>
            </div>
          )}
        </div>
        <div
          className="border-t border-green-200 "
        >
          <div className="flex items-center justify-between p-3 px-2 font-serif text-lg font-bold text-left text-gray-700 transition-all duration-500 bg-white">
            <a href={`/tienda-de-juegos/${card.slug}/`} className="btn yellow">Ver juego</a>
            <b className="block font-bold text-green-800 ">
              ${card.GameBuyPrice}
            </b>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Card
