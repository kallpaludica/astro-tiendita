import algoliasearch from "algoliasearch/lite";
import React, { useState } from "react";
import {
  InstantSearch,
  Hits,
  SortBy,
  HitsPerPage,
  PoweredBy,
  Stats,
  SearchBox,
  Pagination,
} from "react-instantsearch-dom";
import PostPreview from "./CardGameSearchResult";
import AlgoliaSearch from "./AlgoliaCollapseSearch";
import OffcanvasFilters from "./Offcanvas";
import AlgoliaCollapseSearch from "@components/Encontrador/AlgoliaCollapseSearch";
const searchClient = algoliasearch(
  "REF3SMUMO1",
  "7c4c56c7384927744e0746a4b31a7ff2"
);
export default function EncontrarComponent() {
  const [isSearchVisible, setSerchVisible] = useState(true);
  const [isToggled, setToggle] = useState(true);
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      <div className="">
        <InstantSearch searchClient={searchClient} indexName="juegos">
          <div className="menu-2">
            <OffcanvasFilters>
              <AlgoliaCollapseSearch />
            </OffcanvasFilters>
          </div>
          <div className="sticky z-40 px-2 pt-6 pb-2 bg-white md:pb-4 top-16 md:px-6">
            <div className="2xl:max-w-7xl flex flex-col-reverse mx-auto space-y-2 sm:flex-row sm:space-y-0 sm:space-x-1 md:space-x-3">
              <div className="relative w-full mt-2 md:mt-0">
                <SearchBox
                  className="w-full mx-auto "
                  showLoadingIndicator
                  translations={{
                    submitTitle: "Iniciar búsqueda",
                    resetTitle: "Reiniciar búsqueda",
                    placeholder: "Buscador",
                  }}
                />
                <div className="absolute right-0 mr-8 font-serif text-base font-bold text-gray-500 top-1">
                  <Stats
                    translations={{
                      stats(
                        nbHits,
                        processingTimeMS,
                        nbSortedHits,
                        areHitsSorted
                      ) {
                        return areHitsSorted && nbHits !== nbSortedHits
                          ? `${nbSortedHits.toLocaleString()} relevant results sorted out of ${nbHits.toLocaleString()} ${processingTimeMS.toLocaleString()}ms`
                          : `${nbHits.toLocaleString()} juegos`;
                      },
                    }}
                  />
                </div>
              </div>
              <div className="grid items-center justify-end w-full grid-cols-2 gap-2 md:space-x-2 md:w-auto md:flex">
                <div className="flex items-center justify-end w-full md:w-auto">
                  <div className="w-full md:w-48">
                    <HitsPerPage
                      defaultRefinement={5}
                      items={[
                        { value: 2, label: "Mostrar de a 2 " },
                        { value: 3, label: "Mostrar de a 3 " },
                        { value: 5, label: "Mostrar de a 5 " },
                        { value: 10, label: "Mostrar de a 10 " },
                        { value: 20, label: "Mostrar de a 20 " },
                        { value: 30, label: "Mostrar de a 30 " },
                        { value: 50, label: "Mostrar de a 50 " },
                        { value: 100, label: "Mostrar de a 100 " },
                      ]}
                    />
                  </div>
                </div>
                <div className="w-full m-0 md:w-64">
                  <SortBy
                    defaultRefinement="juegos"
                    items={[
                      { value: "juegos", label: "Ordenado A-Z" },
                      {
                        value: "juegos_precio_asc",
                        label: "Precio más bajo",
                      },
                      {
                        value: "juegos_precio_desc",
                        label: "Precio más alto",
                      },
                      {
                        value: "juegos_edades_asc",
                        label: "Edades más chiques",
                      },
                      {
                        value: "juegos_edades_desc",
                        label: "Edades más grandes",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative z-10 flex flex-row w-full min-h-screen mx-auto pt-0 md:px-0 2xl:max-w-7xl">
            <div className="hidden px-0 text-left filter-menu w-80 lg:block">
              <AlgoliaSearch />
            </div>
            <div className="relative w-full px-2 mx-auto duration-700 md:py-5 md:pt-0 md:pl-6">
              <div className="relative pb-6 px-0 pt-0 mx-auto">
                <Hits hitComponent={PostPreview} />
                <Pagination padding={1} className="my-6" />
                {/* <div className="bottom-0 right-0 flex items-center justify-center py-6 scale-75 md:py-0 md:bottom-9 md:absolute opacity-30">
                  <PoweredBy />
                </div> */}
              </div>
            </div>
          </div>
        </InstantSearch>
      </div>
    </>
  );
}
