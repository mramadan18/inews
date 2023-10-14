/* eslint-disable @next/next/no-img-element */
import baseUrl from "@/baseUrl";
import NewsCard from "@/components/Home/NewsCard";
import SubTitle from "@/components/Utilities/SubTitle";
import Image from "next/image";
import Link from "next/link";

const News = ({ data }) => {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="p-4 bg-white">
              <h6
                className="text-gray fw-light"
                style={{
                  fontSize: "14px",
                }}
              >
                سياسة | السودان
              </h6>
              <h4 className="mt-4 mb-3 fw-semibold line-height-50">
                {data?.title_ar}
              </h4>
              <div className="date text-gray">
                16 مايو 2023 الساعة الرابعة مساءًا
              </div>

              <img
                className="mt-4"
                src={data?.thumbnail}
                alt={data?.title_ar}
                width={1000}
                height={300}
              />

              <div className="text mt-4">
                <p
                  className="mb-4 line-height-35"
                  dangerouslySetInnerHTML={{ __html: data?.content_ar }}
                />
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="animate-section mt-3 mt-lg-0">
              <h5 className="health-title bg-blue-light py-3 text-white text-center mb-0">
                اخر اخبار
              </h5>
              <div className="details-news py-3 px-3 bg-white">
                <p
                  className="mb-4 text-black"
                  style={{ paddingLeft: "2rem", lineHeight: "28px" }}
                >
                  يقولون دائما إن الوقاية خير من العلاج، ومن هنا فإن الحفاظ على
                  البشرة وحمايتها من أشعة الشمس الحارقة يساعد على سلامة الجلد
                  والبعد عن الأمراض الجلدية.
                </p>
                <p
                  className="mb-4 text-black"
                  style={{ paddingLeft: "2rem", lineHeight: "27px" }}
                >
                  ومن ناحية أخرى، ينبغي علينا أن نتابع ونلاحظ التغيرات التي تطرأ
                  على الجلد، من بثور وبقع، خاصة تلك التي تكون بلون أحمر مائل إلى
                  البني، وأيضا تلك التي تشعر بخشونتها، فهذه البقع يمكن أن تكون
                  التهابات ذات قشور تكونت بفعل تضرر الجلد من أشعة الشمس، ويطلق
                  عليها الأطباء
                  <Link
                    href="/"
                    className="text-blue"
                    style={{ textDecoration: "underline" }}
                  >
                    التقرن الشمسي أو التقرن السفعي
                  </Link>
                  .
                </p>
                <p
                  className="mb-4 text-black"
                  style={{ paddingLeft: "2rem", lineHeight: "27px" }}
                >
                  والتقرن الشمسي تغير في الجلد ناجم عن لفح (سفع) أشعة الشمس له،
                  وتشمل أعراضه ظهور بعض التغيّرات الجلدية كالتقرنات أو المواضع
                  الخشنة أو المتقشرة أو الندبات، ولا سيما في المواضع الأكثر عرضة
                  لأشعة الشمس كالجبين أو الأنف أو الأذن.
                </p>
                <p
                  className="text-black"
                  style={{ paddingLeft: "2rem", lineHeight: "28px" }}
                >
                  ورغم أن هذه الالتهابات والبقع شائعة ولا تمثل عادة مخاطر صحية،
                  فإن هناك فرصة ضئيلة لأن تتحول إلى سرطان الجلد، يعرف باسم سرطان
                  الخلايا الحرشفية
                  <Link
                    href="/"
                    className="text-blue"
                    style={{ textDecoration: "underline" }}
                  >
                    (أحد أنواع الخلايا المكونة للجلد)
                  </Link>
                  وفقا لما يقوله الدكتور ديرك شاديندورف.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <SubTitle title="أخبار ذات صلة" color="#D30707" more={false} />

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
      </div>
    </main>
  );
};

export default News;

export const getServerSideProps = async (context) => {
  const { data } = await baseUrl.get(
    `http://vps97897.serveur-vps.net/posts/${context.params.postId}`
  );

  return { props: { data } };
};
