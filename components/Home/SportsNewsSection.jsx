import { useEffect } from "react";
import SubTitle from "../Utilities/SubTitle";
import BreakingNews from "./BreakingNewsSection";

const SportsNews = ({ data, text }) => {
  return (
    <section
      className="position-relative mt-5"
      style={{
        backgroundImage: `url("${data?.results[0]?.category?.image}")`,
        backgroundSize: "cover",
      }}
    >
      <div
        className="position-absolute z-0 w-100 h-100 d-flex justify-content-center align-items-center overflow-hidden opacity-25"
        style={{
          backgroundColor: data?.results[0]?.category?.color,
        }}
      ></div>

      <div className="py-5 container position-relative">
        <SubTitle
          title={data?.results[0]?.category?.name}
          color={data?.results[0]?.category?.color}
          text={text}
        />
        <div className="mt-5">
          <BreakingNews data={data?.results[0]} />
        </div>
      </div>
    </section>
  );
};

export default SportsNews;
