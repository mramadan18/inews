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
import baseUrl from "@/baseUrl";

const OurPogram = ({ data }) => {
  return (
    <main>
      <div className="container">
        <TitlePage title="برامجنا" />
        <div className="border-top p-4 bg-white">
          <div className="row">
            <div className="col-lg-7">
              <div className="position-relative w-100 h-100">
                {/* <div className="position-absolute w-100 h-100 bg-black bg-opacity-50 d-flex justify-content-center align-items-center overflow-hidden">
                  <a
                    href={data?.results[0]?.videos[0]?.video_url}
                    target="__blank"
                  >
                    <img
                      src="/images/icons/play_icon.png"
                      alt="play video"
                      width={50}
                      height={50}
                      style={{
                        width: "50px",
                        height: "50px",
                        cursor: "pointer",
                      }}
                    />
                  </a>
                </div> */}

                <iframe
                  src={`https://www.youtube.com/embed/${data?.results[0]?.videos[0]?.video_id}`}
                  style={{ height: "350px" }}
                  title={data?.results[0]?.videos[0].title}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <div className="col-lg-5">
              <h6
                className="text-danger fw-bold mt-4 mt-lg-0"
                style={{
                  fontSize: "14px",
                  letterSpacing: "2px",
                }}
              >
                {data?.results[0]?.name}
              </h6>
              <h5 className="line-height-35 fw-semibold mb-3">
                {data?.results[0]?.videos[0].title}
              </h5>
              <p className="line-height-35">
                {data?.results[0]?.videos[0]?.description}
              </p>
              <div className="date mt-4 text-gray">
                {new Date(data?.results[0]?.created_at).toLocaleDateString(
                  "ar-eg",
                  {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
              </div>
            </div>
          </div>
        </div>

        {data?.results?.map((program) => {
          return (
            <div className="mt-5" key={program?.id}>
              <SubTitle
                title={program?.name}
                color="#D30707"
                more
                link={`/programme/${program?.id}`}
              />

              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                navigation={true}
                modules={[FreeMode, Navigation]}
                className="mySwiper mt-4"
              >
                {program?.videos?.map((video) => {
                  return (
                    <SwiperSlide key={video._id} className="me-0">
                      <Link href="/episode-of-the-programme">
                        <VideoNewsCard data={video} />
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default OurPogram;

export async function getServerSideProps(context) {
  const { data } = await baseUrl.get("/programs/");

  return { props: { data } };
}
