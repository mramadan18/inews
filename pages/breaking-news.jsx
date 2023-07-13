import Breaking from "@/components/Breaking/Breaking";
import Loading from "@/components/Utilities/Loading";
import TitlePage from "@/components/Utilities/TitlePage";
import { useEffect, useState } from "react";

const BreakingNews = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <Loading />;
  }
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
