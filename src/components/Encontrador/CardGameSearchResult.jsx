import * as containerStyles from "./CardGameSearchResult.module.css"
import React from "react"
import { Highlight } from "react-instantsearch-dom";
const EncontrarPostPreview = ({ hit }) => {
  return (
    <div className={containerStyles.gamecard}>
      <div className={containerStyles.imageContainer}>
        <a
          href={`/tienda-de-juegos/${hit.slug}/`}
          className={containerStyles.imageLink}
          tabIndex="-1"
        >
          {hit.imagenDestacada ? (
            <img
              className={containerStyles.image}
              alt={hit.title}
              src={`https:${hit.imagenDestacada.file.url}?w=220&h=220&fm=png&q=80`}
            />
          ) : (
            <>a</>
          )}
        </a>
      </div>
      <div className={containerStyles.content}>
        <Highlight hit={hit} attribute="collection.title" tagName="mark" />
        <a
          href={`/tienda-de-juegos/${hit.slug}/`}
          className="inline-flex items-baseline justify-between font-serif font-bold text-gray-800 duration-700 border-2 border-white border-dashed outline-none md:text-2xl hover:text-indigo-700 hover:underline focus:border-green-500 focus:px-2"
        >
          <Highlight hit={hit} attribute="title" tagName="mark" />
          <small className="absolute top-auto w-full ml-3 text-sm text-right text-gray-700 bottom-14 md:block md:bottom-auto md:top-2 right-2">
            <Highlight hit={hit} attribute="publisher.title" tagName="mark" />
          </small>
        </a>
        <div className="flex items-center w-full mb-2 font-serif text-2xl font-bold text-green-600 ">
          {hit.GameBuyPrice && (
            <>
              $<Highlight hit={hit} attribute="GameBuyPrice" tagName="mark" />
            </>
          )}
          {hit.GameInStock ? (
            <small className="inline-block ml-3 text-xl text-green-500 w-52 opacity-90">
              en Stock
            </small>
          ) : (
            <small className="inline-block ml-3 text-xl text-blue-500 w-52 opacity-80">
              Por encargo
            </small>
          )}
        </div>
        <div className="relative z-10 hidden w-full md:absolute md:w-auto bottom-4 right-2 md:block group">
          <span className="pr-2 font-sans font-bold text-green-600 duration-300 opacity-0 group-hover:opacity-100">
            Consultar
          </span>
          <a
            type="whatsapp"
            href={`https://api.whatsapp.com/send?phone=5493874811808&text=%C2%A1Hola!%F0%9F%A4%97%20%20Quería%2C%20consultar%20por%20el%20juego%20${hit.title}`}
            target="_blank"
            size="small"
            rel="noopener noreferrer"
          >
            whatsapp
          </a>
        </div>
        <div className="hidden w-full mb-3 font-serif text-sm text-gray-900 md:text-base description md:line-clamp-3">
          {/* <FormatText FormatText={hit.textoPrincipal} /> */}
        </div>
        <div className="hidden">
          <Highlight hit={hit} attribute="textoPrincipal" tagName="mark" />
        </div>
        <div className="absolute left-0 right-0 flex justify-around w-full p-3 px-4 space-x-2 bg-white border-t border-gray-200 md:justify-start md:px-3 bottom-1 md:pt-5 meta md:relative md:space-x-6 md:flex-row bg-opacity-95">
          {hit.GameAges && (
            <div className="flex items-center font-serif text-sm font-bold text-gray-700 md:text-base">
              <span className="pr-1 ">Edad</span>{" "}
              <div>
                <Highlight hit={hit} attribute="GameAges" tagName="mark" />+
              </div>
            </div>
          )}
          {hit.GameDuration && (
            <div className="flex items-center font-serif text-sm font-bold text-gray-700 md:text-base">
              <Highlight hit={hit} attribute="GameDuration" tagName="mark" />

              <span className="pl-1 ">min. </span>
            </div>
          )}
          {hit.GamePlayers && (
            <div className="flex items-center font-serif text-sm font-bold text-gray-700 md:text-base">
              <Highlight hit={hit} attribute="GamePlayers" tagName="mark" />
              <span className="pl-1">Jugadorxs </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default EncontrarPostPreview
