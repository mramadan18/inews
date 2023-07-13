import { useEffect, useState } from "react";
import TitlePage from "@/components/Utilities/TitlePage";
import BreakingNewsSection from "@/components/Home/BreakingNewsSection";
import SubTitle from "@/components/Utilities/SubTitle";
import NewsCard from "@/components/Home/NewsCard";
import PaginationComponent from "@/components/Utilities/PaginationComponent";
import Loading from "@/components/Utilities/Loading";

const Policy = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container">
      <TitlePage title="سياسة" />

      <div>
        <BreakingNewsSection img="/images/img_21.png" />
        <BreakingNewsSection img="/images/img_21.png" />
        <BreakingNewsSection img="/images/img_21.png" />
        <BreakingNewsSection img="/images/img_21.png" />
        <BreakingNewsSection img="/images/img_21.png" />
        <BreakingNewsSection img="/images/img_21.png" />
        <BreakingNewsSection img="/images/img_21.png" />
        <BreakingNewsSection img="/images/img_21.png" />
      </div>

      <div className="mt-5">
        <SubTitle title="الأكثر قراءة" color="#D30707" more={false} />

        <div className="row mt-4">
          <div className="col-md-6 col-lg-4 mb-3">
            <NewsCard img={"/images/img_11.png"} />
          </div>
          <div className="col-md-6 col-lg-4 mb-3">
            <NewsCard img={"/images/img_12.png"} />
          </div>
          <div className="col-md-6 col-lg-4 mb-3">
            <NewsCard img={"/images/img_13.png"} />
          </div>
          <div className="col-md-6 col-lg-4 mb-3">
            <NewsCard img={"/images/img_12.png"} />
          </div>
          <div className="col-md-6 col-lg-4 mb-3">
            <NewsCard img={"/images/img_13.png"} />
          </div>
          <div className="col-md-6 col-lg-4 mb-3">
            <NewsCard img={"/images/img_11.png"} />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <PaginationComponent />
      </div>
    </div>
  );
};

export default Policy;
