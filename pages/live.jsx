import VideoNewsCard from "@/components/Home/VideoNewsCard";
import Table from "@/components/Live/Table";
import SubTitle from "@/components/Utilities/SubTitle";
import TitlePage from "@/components/Utilities/TitlePage";

const Live = () => {
  return (
    <main>
      <div className="container">
        <TitlePage title="البث الحي" />

        <div className="p-4 pt-1 bg-white">
          <iframe
            src="https://player.l1vetv.com/inewstv/"
            allowFullScreen
          ></iframe>
        </div>

        <div className="my-5">
          <h5 className="text-danger fw-bold mb-3">
            يُعرض الآن برنامج حبر سياسي - مع مقدمة البرنامج امل علي
          </h5>
          <p className="line-height-35">
            برنامج حبر سياسي هو برنامج لوريم ايبسوم هو نموذج افتراضي يوضع في
            التصاميم <br /> لتعرض على العميل ليتصور طريقه
          </p>
        </div>

        <SubTitle title="المزيد من الغيديوهات" color="#D30707" more={false} />

        <div className="row mt-4">
          <div className="col-md-6 col-lg-4 mb-5">
            <VideoNewsCard img={"/images/img_11.png"} />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <VideoNewsCard img={"/images/img_12.png"} />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <VideoNewsCard img={"/images/img_13.png"} />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <VideoNewsCard img={"/images/img_12.png"} />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <VideoNewsCard img={"/images/img_13.png"} />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <VideoNewsCard img={"/images/img_11.png"} />
          </div>
        </div>

        <div className="p-4 pt-5 bg-white">
          <SubTitle
            title="جدول البث على قناة آي نيوز الفضائية"
            color="#D30707"
            more={false}
          />

          <div className="border-top pt-4">
            <Table />
            <Table />
            <Table />
            <Table />
            <Table />
            <Table />
            <Table />
            <Table />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Live;
