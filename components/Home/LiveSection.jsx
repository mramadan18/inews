import Image from "next/image";
import SubTitle from "../Utilities/SubTitle";
import VideoLiveCard from "./VideoLiveCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, FreeMode } from "swiper";

const LiveSection = ({ data }) => {
  return (
    <div className="mt-5">
      <SubTitle title={"البث المباشر"} more={false} color="#D30707" />
      <div className="row mt-4 overflow-hidden">
        <div className="col-lg-7 mb-4 mb-lg-0" style={{ height: "420px" }}>
          <VideoLiveCard />
        </div>
        <div className="col-lg-5" style={{ height: "410px" }}>
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Autoplay]}
            className="mySwiper"
          >
            {data?.results?.map((item) => (
              <SwiperSlide key={item.id} className="me-0">
                <img src={item?.image} alt={item?.name} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default LiveSection;
