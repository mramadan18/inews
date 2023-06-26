import SubTitle from "../Utilities/SubTitle";
import BreakingNews from "./BreakingNewsSection";

const SportsNews = ({ bg, bgColor, img, title, color, text }) => {
  return (
    <section
      className="position-relative mt-5"
      style={{
        backgroundImage: `url("${bg}")`,
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
          <BreakingNews img={img} />
        </div>
      </div>
    </section>
  );
};

export default SportsNews;
