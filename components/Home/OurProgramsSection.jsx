import SubTitle from "../Utilities/SubTitle";
import VideoNewsCard from "./VideoNewsCard";

const OurProgramsSection = ({ bg, bgColor, img, title, color, text }) => {
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
        <SubTitle title={title} color={color} text={text} />
        <div className="mt-5">
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-3 mb-lg-0">
              <VideoNewsCard />
              <div className="py-3 text-center bg-white fs-5">
                ضربة موجعة لسلاح الجو الروسي
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-3 mb-lg-0">
              <VideoNewsCard />
              <div className="py-3 text-center bg-white fs-5">
                ضربة موجعة لسلاح الجو الروسي
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <VideoNewsCard />
              <div className="py-3 text-center bg-white fs-5">
                ضربة موجعة لسلاح الجو الروسي
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProgramsSection;
