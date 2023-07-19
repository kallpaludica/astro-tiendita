import React from "react"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const SliderHomeCollectionComponent = ({ data }: any) => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map((i: any) => (
          <div key={i.slug}>
            <SwiperSlide>
              <div className="relative bg-white max-w-sm flex flex-col items-center justify-center p-3 pb-6 mx-auto overflow-hidden text-center transition-all duration-500 ease-in-out transform h-96 ">
                <div className="w-32 h-32 object-cover aspect-square object-center">
                  <img
                    src={`https:${i.icono.fields?.file.url}?fm=webp&fit=thumb&f=center`}
                    className="flex items-center justify-center p-3 mx-auto overflow-hidden text-center bg-white"
                    width="300"
                    height="300"
                    alt="imagen"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-full mb-6 text-lg font-bold text-blue-500">
                  <h4 className="font-serif text-3xl font-bold text-blue-500">
                    {i.title}
                  </h4>
                </div>
                <p className="px-6 py-4 font-serif text-xl text-gray-800 md:px-12">
                  {i.CollectionDescription}
                </p>
                <a
                  href={`/tienda-de-juegos/colecciones/${i.slug}/`}
                  className="btn blue"
                >

                  Ver colección
                </a>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </>
  )
}

export default SliderHomeCollectionComponent
