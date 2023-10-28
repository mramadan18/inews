import TitlePage from "@/components/Utilities/TitlePage";
import BreakingNewsSection from "@/components/Home/BreakingNewsSection";
import SubTitle from "@/components/Utilities/SubTitle";
import NewsCard from "@/components/Home/NewsCard";
import PaginationComponent from "@/components/Utilities/PaginationComponent";
import baseUrl from "@/baseUrl";

const CategoryDetails = ({ data, most_view }) => {
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
          {most_view?.results?.map((item) => (
            <div key={item.id} className="col-md-6 col-lg-4 mb-3">
              <NewsCard data={item} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <PaginationComponent pageCount={Math.ceil(data?.count / 10)} />
      </div>
    </div>
  );
};

export default CategoryDetails;

export const getServerSideProps = async (context) => {
  const { categoryId } = context.params;
  const { page } = context.query || 0;
  const { data } = await baseUrl.get(
    `/posts/?category=${categoryId}&offset=${(page - 1) * 10}`
  );
  const { data: most_view } = await baseUrl.get(
    `/posts/?limit=6&most_view=true`
  );

  return { props: { data, most_view } };
};
