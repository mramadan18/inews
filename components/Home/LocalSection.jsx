import Image from "next/image";
import SubTitle from "../Utilities/SubTitle";

const LocalSection = ({ title, color, urgent = false }) => {
  return (
    <section className="mt-5">
      <SubTitle title={title} color={color} />

      <div className="row mt-5">
        <div className="col-lg-6">
          <div className="p-3 bg-white mb-3 mb-lg-0">
            <div className="position-relative">
              <div
                className="position-absolute w-100 h-100 d-flex justify-content-center align-items-center overflow-hidden"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 0.85) 100%)",
                }}
              ></div>
              {urgent && (
                <button
                  className="btn btn-danger position-absolute rounded-0 px-3"
                  style={{
                    top: "10px",
                    right: "20px",
                    fontSize: "13px",
                  }}
                >
                  عاجل
                </button>
              )}
              <Image
                src={"/images/img_18.png"}
                width={656}
                height={445}
                alt="..."
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
        </div>

        <div className="col-lg-6">
          <div className="p-3 bg-white mb-4">
            <div className="position-relative">
              <div
                className="position-absolute w-100 h-100 d-flex justify-content-center align-items-center overflow-hidden"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 0.85) 100%)",
                }}
              ></div>
              {urgent && (
                <button
                  className="btn btn-danger position-absolute rounded-0 px-3"
                  style={{
                    top: "10px",
                    right: "20px",
                    fontSize: "13px",
                  }}
                >
                  عاجل
                </button>
              )}
              <Image
                src={"/images/img_19.png"}
                width={800}
                height={196}
                alt="..."
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
          <div className="p-3 bg-white">
            <div className="position-relative">
              <div
                className="position-absolute w-100 h-100 d-flex justify-content-center align-items-center overflow-hidden"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 0.85) 100%)",
                }}
              ></div>
              {urgent && (
                <button
                  className="btn btn-danger position-absolute rounded-0 px-3"
                  style={{
                    top: "10px",
                    right: "20px",
                    fontSize: "13px",
                  }}
                >
                  عاجل
                </button>
              )}
              <Image
                src={"/images/img_20.png"}
                width={800}
                height={196}
                alt="..."
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
        </div>
      </div>
    </section>
  );
};

export default LocalSection;
