import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const SliderHomeAboutComponent = (props: any, children: any) => {
  const dataProps = props;

  return (
    <>
      {dataProps.data.map((i: any) => (
        <div key={i.slug} className="m-12">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
          >
            {i.images && (
              <>
                {i.images.map((i: any) => (
                  <SwiperSlide key={i.fields.file.url}>
                    <div className="relative w-auto md:w-full md:h-80 overflow-hidden">
                      <img
                        src={`https:${i.fields.file.url}?h=450&fm=webp&q=90`}
                        className="w-full object-cover object-center"
                        width="300"
                        height="200"
                        alt="imagen"
                        loading="lazy"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </>
            )}
          </Swiper>
        </div>
      ))}
    </>
  );
};

export default SliderHomeAboutComponent;
