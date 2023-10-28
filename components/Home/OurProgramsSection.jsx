import SubTitle from "../Utilities/SubTitle";
import VideoNewsCard from "./VideoNewsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper";
// Import Swiper styles
import "swiper/css";

const OurProgramsSection = ({
  bg,
  bgColor,
  data,
  title,
  color,
  text,
  link,
}) => {
  return (
    <section
      className="position-relative mt-5"
      style={{
        backgroundImage: `url("${bg}")`,
        backgroundColor: bg,
        backgroundSize: "cover",
      }}
    >
      <div
        className="position-absolute z-0 w-100 h-100 d-flex justify-content-center align-items-center overflow-hidden"
        style={{
          backgroundColor: bgColor,
        }}
      ></div>

      <div className="py-5 container position-relative">
        <SubTitle title={title} color={color} text={text} link={link} />
        <div className="mt-5">
          <Swiper
            dir="rtl"
            slidesPerView={1.5}
            spaceBetween={10}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3.5,
                spaceBetween: 10,
              },
            }}
            modules={[Autoplay, FreeMode]}
            className="mySwiper mt-4 pb-4"
          >
            {data?.results[0]?.videos?.map((video) => (
              <SwiperSlide key={video._id}>
                <VideoNewsCard data={video} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurProgramsSection;
