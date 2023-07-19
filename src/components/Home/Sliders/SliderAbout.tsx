import React from "react"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const SliderHomeAboutComponent = (props: any, children: any) => {
  const dataProps = props

  return (
    <>
      {dataProps.data.map((i: any) => (
        <div key={i.slug} className="">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={2}
            slidesPerView={1}
            navigation
            className="!pb-0"
            pagination={{ clickable: true }}
          >
            {i.images && (
              <>
                {i.images.map((i: any) => (
                  <SwiperSlide key={i.fields.file.url} className="">
                    <img
                      src={`https:${i.fields.file.url}?fm=webp&fit=thumb&f=center`}
                      className="w-full object-cover aspect-square object-center"
                      width="300"
                      height="200"
                      alt="imagen"
                    />
                  </SwiperSlide>
                ))}
              </>
            )}
          </Swiper>
        </div>
      ))}
    </>
  )
}

export default SliderHomeAboutComponent
