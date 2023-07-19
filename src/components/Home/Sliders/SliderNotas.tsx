import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const SliderHomeAboutComponent = ({ data }: any) => {
  return (
    <div className="m-12">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map((item: any) => (
          <SwiperSlide key={item.fields?.file.url}>
            <div className="relative w-auto md:w-full md:h-80 overflow-hidden">
              <img
                src={`https:${item.fields?.file.url}?h=450&fm=webp&q=90`}
                className="w-full object-cover object-center"
                width="300"
                height="200"
                alt="imagen"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderHomeAboutComponent;
