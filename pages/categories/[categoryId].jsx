import TitlePage from "@/components/Utilities/TitlePage";
import BreakingNewsSection from "@/components/Home/BreakingNewsSection";
import SubTitle from "@/components/Utilities/SubTitle";
import NewsCard from "@/components/Home/NewsCard";
import PaginationComponent from "@/components/Utilities/PaginationComponent";
import baseUrl from "@/baseUrl";

const CategoryDetails = ({ data }) => {
  return (
    <div className="container">
      <TitlePage title={data?.results[0]?.category?.name} />
      <div>
        {data?.results?.map((item) => {
          return <BreakingNewsSection key={item?.id} data={item} />;
        })}
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

export default CategoryDetails;

export const getServerSideProps = async (context) => {
  const { data } = await baseUrl.get(
    `http://vps97897.serveur-vps.net/posts/?category=${context.params.categoryId}`
  );

  return { props: { data } };
};
