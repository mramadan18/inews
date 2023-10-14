/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import SubTitle from "../Utilities/SubTitle";
import NewsCard from "./NewsCard";
import Link from "next/link";

const HealthSection = ({ data }) => {
  return (
    <div className="mt-5">
      <SubTitle
        title={data?.results[0]?.category?.name}
        color={data?.results[0]?.category?.color}
      />

      <div className="row mt-5 overflow-hidden">
        <div className="col-lg-8">
          <div className="p-3 bg-white">
            <div className="position-relative">
              <div
                className="position-absolute w-100 h-100 d-flex justify-content-center align-items-center overflow-hidden"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 0.85) 100%)",
                }}
              ></div>
              <img
                src={data?.results[0]?.thumbnail}
                width={855}
                height={328}
                alt={data?.results[0]?.title_ar}
              />
              <h6
                className="fs-6 mb-4 mt-3 position-absolute text-white"
                style={{
                  left: "40%",
                  bottom: "10px",
                }}
              >
                حرب روسيا و أوكرانيا
              </h6>
            </div>
          </div>

          <div className="row mt-4">
            {data?.results?.slice(0, 2)?.map((item) => (
              <div className="col-md-6" key={item.id}>
                <NewsCard data={item} />
              </div>
            ))}
          </div>
        </div>
        <div className="col-lg-4 animate-section">
          <h5 className="health-title bg-blue-light py-3 text-white text-center mb-0">
            اخر اخبار {data?.results[0]?.category?.name}
          </h5>
          <div className="details-news py-3 px-3 bg-white">
            <p
              className="mb-4 text-black"
              style={{ paddingLeft: "2rem", lineHeight: "26px" }}
              dangerouslySetInnerHTML={{ __html: data?.results[0]?.content_ar }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthSection;
