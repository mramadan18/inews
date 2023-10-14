import SubTitle from "../Utilities/SubTitle";
import NewsCard from "./NewsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper";
// Import Swiper styles
import "swiper/css";
import { useEffect, useState } from "react";

const LatestNews = ({ title, color, data }) => {
  const [widthScreen, setWidthScreen] = useState(0);

  useEffect(() => {
    setWidthScreen(innerWidth);
  }, []);

  return (
    <div className="mt-5">
      <SubTitle title={title} color={color} />
      <Swiper
        dir="ltr"
        slidesPerView={widthScreen <= 700 ? 1.5 : 3}
        spaceBetween={15}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, FreeMode]}
        className="mySwiper mt-4 pb-4"
      >
        {data?.results?.map((card) => (
          <SwiperSlide key={card.id}>
            <NewsCard data={card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LatestNews;
