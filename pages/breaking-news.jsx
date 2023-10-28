import baseUrl from "@/baseUrl";
import Breaking from "@/components/Breaking/Breaking";
import TitlePage from "@/components/Utilities/TitlePage";

const BreakingNews = ({ data }) => {
  return (
    <main>
      <div className="container">
        <TitlePage title="الآخبار العاجلة" />

        <div className="border-top p-4 pt-5 bg-white">
          {data?.results?.map((item) => (
            <Breaking key={item.id} data={item} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default BreakingNews;

export const getServerSideProps = async () => {
  const { data } = await baseUrl.get(`/urgents/`);

  return { props: { data } };
};
