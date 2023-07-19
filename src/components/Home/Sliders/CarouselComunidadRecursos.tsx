import React from "react"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const SliderHomeAboutComponent = ({ data }: any) => {
  const dataProps = data
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
      >
        {dataProps.map((i: any) => (
          <div key={i.slug}>
            {i.featuredImg && (
                <SwiperSlide>
                  <div className="mb-6 overflow-hidden duration-300 bg-white rounded-lg shadow-lg md:opacity-70 hover:opacity-100 hover:shadow">
                    <a href={`/comunidad/recursos/${i.slug}/`}>
                      <img
                        src={`https:${i.featuredImg.fields.file.url}?fm=webp&fit=thumb&f=center&h=400&w=400`}
                        className="w-full object-cover object-center"
                        width="300"
                        height="200"
                        alt="imagen"
                      />
                    </a>
                    <div
                      className="p-2 text-gray-900 bg-white"
                      style={{ minHeight: "80px" }}
                    >
                      <a className="font-sans text-lg font-bold text-gray-900"
                        href={`/comunidad/recursos/${i.slug}/`}
                      >
                        {i.slug}
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
            )}
          </div>
        ))}
      </Swiper>
    </>
  )
}

export default SliderHomeAboutComponent
