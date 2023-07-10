import VideoNewsCard from "@/components/Home/VideoNewsCard";
import SubTitle from "@/components/Utilities/SubTitle";
import TitlePage from "@/components/Utilities/TitlePage";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { FreeMode } from "swiper";
import { Navigation } from "swiper";
import Link from "next/link";
import Image from "next/image";

const ourPogram = () => {
  return (
    <main>
      <div className="container">
        <TitlePage title="برامجنا" />

        <div className="border-top p-4 bg-white">
          <div className="row">
            <div className="col-lg-7">
              <video
                style={{
                  width: "100%",
                  height: "360px",
                }}
                src="/videos/video.mp4"
                controls
              ></video>
            </div>

            <div className="col-lg-5">
              <h6
                className="text-danger fw-bold mt-4 mt-lg-0"
                style={{
                  fontSize: "14px",
                  letterSpacing: "2px",
                }}
              >
                برنامج شريط أصفر
              </h6>
              <h5 className="line-height-35 fw-semibold mb-3">
                خدمت مع وزير الدفاع الحالي ولحد الان ما حصلت على قطعة ارض
              </h5>
              <p className="line-height-35">
                لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل
                ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ، وعند
                موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم
                ويتم وضع النصوص النهائية المطلوبة . لوريم ايبسوم هو نموذج
                افتراضي يوضع في التصاميم لتعرض على العميل .
              </p>
              <div className="date mt-4 text-gray">
                16 مايو 2023 الساعة الرابعة مساءًا
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <SubTitle title="برنامج شريط أصفر" color="#D30707" more={false} />

          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            navigation={true}
            modules={[FreeMode, Navigation]}
            className="mySwiper mt-4"
          >
            <SwiperSlide className="me-0">
              <Link href="/episode-of-the-programme">
                <VideoNewsCard img={"/images/img_13.png"} />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="me-0">
              <Link href="/episode-of-the-programme">
                <VideoNewsCard img={"/images/img_13.png"} />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="me-0">
              <Link href="/episode-of-the-programme">
                <VideoNewsCard img={"/images/img_13.png"} />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="me-0">
              <Link href="/episode-of-the-programme">
                <VideoNewsCard img={"/images/img_13.png"} />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="me-0">
              <Link href="/episode-of-the-programme">
                <VideoNewsCard img={"/images/img_13.png"} />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="me-0">
              <Link href="/episode-of-the-programme">
                <VideoNewsCard img={"/images/img_13.png"} />
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="mt-5">
          <SubTitle title="برنامج شريط أصفر" color="#D30707" more={false} />

          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            navigation={true}
            modules={[FreeMode, Navigation]}
            className="mySwiper mt-4"
          >
            <SwiperSlide className="me-0">
              <Link href="/episode-of-the-programme">
                <VideoNewsCard img={"/images/img_13.png"} />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="me-0">
              <Link href="/episode-of-the-programme">
                <VideoNewsCard img={"/images/img_13.png"} />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="me-0">
              <Link href="/episode-of-the-programme">
                <VideoNewsCard img={"/images/img_13.png"} />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="me-0">
              <Link href="/episode-of-the-programme">
                <VideoNewsCard img={"/images/img_13.png"} />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="me-0">
              <Link href="/episode-of-the-programme">
                <VideoNewsCard img={"/images/img_13.png"} />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="me-0">
              <Link href="/episode-of-the-programme">
                <VideoNewsCard img={"/images/img_13.png"} />
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="mt-5">
          <SubTitle title="برنامج شريط أصفر" color="#D30707" more={false} />

          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            navigation={true}
            modules={[FreeMode, Navigation]}
            className="mySwiper mt-4"
          >
            <SwiperSlide className="me-0">
              <Link href="/episode-of-the-programme">
                <VideoNewsCard img={"/images/img_13.png"} />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="me-0">
              <Link href="/episode-of-the-programme">
                <VideoNewsCard img={"/images/img_13.png"} />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="me-0">
              <Link href="/episode-of-the-programme">
                <VideoNewsCard img={"/images/img_13.png"} />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="me-0">
              <Link href="/episode-of-the-programme">
                <VideoNewsCard img={"/images/img_13.png"} />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="me-0">
              <Link href="/episode-of-the-programme">
                <VideoNewsCard img={"/images/img_13.png"} />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="me-0">
              <Link href="/episode-of-the-programme">
                <VideoNewsCard img={"/images/img_13.png"} />
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="mt-5">
          <SubTitle title="برنامج شريط أصفر" color="#D30707" more={false} />

          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            navigation={true}
            modules={[FreeMode, Navigation]}
            className="mySwiper mt-4"
          >
            <SwiperSlide className="me-0">
              <Link href="/episode-of-the-programme">
                <VideoNewsCard img={"/images/img_13.png"} />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="me-0">
              <Link href="/episode-of-the-programme">
                <VideoNewsCard img={"/images/img_13.png"} />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="me-0">
              <Link href="/episode-of-the-programme">
                <VideoNewsCard img={"/images/img_13.png"} />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="me-0">
              <Link href="/episode-of-the-programme">
                <VideoNewsCard img={"/images/img_13.png"} />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="me-0">
              <Link href="/episode-of-the-programme">
                <VideoNewsCard img={"/images/img_13.png"} />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="me-0">
              <Link href="/episode-of-the-programme">
                <VideoNewsCard img={"/images/img_13.png"} />
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </main>
  );
};

export default ourPogram;
