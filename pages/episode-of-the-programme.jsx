import NewsCard from "@/components/Home/NewsCard";
import SubTitle from "@/components/Utilities/SubTitle";
import TitlePage from "@/components/Utilities/TitlePage";

const episodeOfTheProgramme = () => {
  return (
    <main>
      <div className="container">
        <TitlePage title="رنامج شريط اصفر" />

        <div className="border-top p-4 bg-white">
          <div className="row">
            <div className="col-lg-7">
              <video src="/videos/video.mp4" controls></video>
            </div>

            <div className="col-lg-5">
              <h3 className="line-height-50 fw-semibold mb-4">
                خدمت مع وزير الدفاع الحالي ولحد الان ما حصلت على قطعة ارض
              </h3>
              <p className="line-height-35">
                لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل
                ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ، وعند
                موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم
                ويتم وضع النصوص النهائية المطلوبة . لوريم ايبسوم هو نموذج
                افتراضي يوضع في التصاميم لتعرض على العميل .
              </p>
              <div className="date mt-5 text-gray">
                16 مايو 2023 الساعة الرابعة مساءًا
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <SubTitle
            title="المزيد من حلقات برنامج شريط أصفر"
            color="#D30707"
            more={false}
          />

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
      </div>
    </main>
  );
};

export default episodeOfTheProgramme;
