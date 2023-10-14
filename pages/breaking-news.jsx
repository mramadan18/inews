import Breaking from "@/components/Breaking/Breaking";
import TitlePage from "@/components/Utilities/TitlePage";

const BreakingNews = () => {
  return (
    <main>
      <div className="container">
        <TitlePage title="الآخبار العاجلة" />

        <div className="border-top p-4 pt-5 bg-white">
          <Breaking />
          <Breaking />
          <Breaking />
          <Breaking />
          <Breaking />
          <Breaking />
          <Breaking />
          <Breaking />
          <Breaking />
          <Breaking />
        </div>
      </div>
    </main>
  );
};

export default BreakingNews;
