import SubTitle from "../Utilities/SubTitle";
import NewsCard from "./NewsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper";
// Import Swiper styles
import "swiper/css";

const LatestNews = ({ title, color, imgs }) => {
  return (
    <div className="mt-5">
      <SubTitle title={title} color={color} />
      <Swiper
        slidesPerView={3}
        spaceBetween={15}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, FreeMode]}
        className="mySwiper mt-4"
      >
        {imgs?.map((img, index) => (
          <SwiperSlide key={index}>
            <NewsCard img={img} />
          </SwiperSlide>
        ))}
        {imgs?.map((img, index) => (
          <SwiperSlide key={index}>
            <NewsCard img={img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LatestNews;
