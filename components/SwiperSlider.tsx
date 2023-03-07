'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FavouriteList } from 'interfaces/interfaces';
import Image from 'next/image';
import { Autoplay, Pagination } from 'swiper';

const SwiperSlider = ({ data }: { data: FavouriteList }) => {
  return (
    <div className="my-5 px-5">
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        {data?.data?.map((item) => {
          return (
            <>
              {item.trailer.images.maximum_image_url !== null && (
                <SwiperSlide
                  key={item.mal_id}
                  className="border-black relative block max-h-[70vh] min-h-[70vh] rounded-2.5xl border bg-jacarta-700 p-[1.1875rem] transition-shadow hover:shadow-lg"
                >
                  <Image
                    src={item.trailer.images.maximum_image_url || ''}
                    alt={item.title}
                    width={1800}
                    height={50}
                    className="max-h-[63vh] rounded-lg object-cover blur-sm"
                    priority
                  />
                  <div className="absolute bottom-10 left-10 flex max-w-[40vw] flex-col rounded-md border border-primary bg-primary bg-opacity-30 bg-clip-padding py-2 text-center backdrop-blur-lg backdrop-filter">
                    <h2 className="px-5  text-2xl font-bold text-white">
                      {item.title_english}
                    </h2>
                    <div className="flex items-center justify-center">
                      <h2 className="text-base font-bold text-white">
                        {item.type}
                      </h2>
                      <span className="mx-2 text-2xl font-bold text-white">
                        .
                      </span>
                      <h2 className="text-base font-bold text-white">
                        EP {item.episodes}
                      </h2>
                      <span className="mx-2 text-2xl font-bold text-white">
                        .
                      </span>
                      <h2 className="text-base font-bold text-white">
                        {item.duration}
                      </h2>
                    </div>
                    <p className="px-5 text-white">
                      {item.synopsis.slice(0, 200)}
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <button className="btn-primary btn my-3 rounded-full">
                        Watch Now
                      </button>
                      <button className="btn-primary btn my-3 rounded-full">
                        Details
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              )}
            </>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;