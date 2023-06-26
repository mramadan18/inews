import Image from "next/image";
import SubTitle from "../Utilities/SubTitle";
import NewsCard from "./NewsCard";
import Link from "next/link";

const HealthSection = ({ title, color, img, urgent, imgs }) => {
  return (
    <div className="mt-5">
      <SubTitle title={title} color={color} />

      <div className="row mt-5 overflow-hidden">
        <div className="col-lg-8">
          <div className="position-relative">
            <div
              className="position-absolute w-100 h-100 d-flex justify-content-center align-items-center overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 0.85) 100%)",
              }}
            ></div>
            {urgent && (
              <button
                className="btn btn-danger position-absolute rounded-0 px-3"
                style={{
                  top: "10px",
                  right: "20px",
                  fontSize: "13px",
                }}
              >
                عاجل
              </button>
            )}
            <Image src={img} width={855} height={328} alt="..." />
            <h6
              className="fs-6 mb-4 mt-3 position-absolute text-white"
              style={{
                left: "40%",
                bottom: "10px",
              }}
            >
              حرب روسيا و أوكرانيا
            </h6>
          </div>

          <div className="row mt-4">
            {imgs.map((item, index) => (
              <div className="col-md-6" key={index}>
                <NewsCard key={index} img={item} />
              </div>
            ))}
          </div>
        </div>
        <div className="col-lg-4 animate-section">
          <h5 className="health-title bg-blue-light py-3 text-white text-center mb-0">
            اخر اخبار {title}
          </h5>
          <div className="details-news py-3 px-3 bg-white">
            <p
              className="mb-4 text-black"
              style={{ paddingLeft: "2rem", lineHeight: "28px" }}
            >
              يقولون دائما إن الوقاية خير من العلاج، ومن هنا فإن الحفاظ على
              البشرة وحمايتها من أشعة الشمس الحارقة يساعد على سلامة الجلد والبعد
              عن الأمراض الجلدية.
            </p>
            <p
              className="mb-4 text-black"
              style={{ paddingLeft: "2rem", lineHeight: "27px" }}
            >
              ومن ناحية أخرى، ينبغي علينا أن نتابع ونلاحظ التغيرات التي تطرأ على
              الجلد، من بثور وبقع، خاصة تلك التي تكون بلون أحمر مائل إلى البني،
              وأيضا تلك التي تشعر بخشونتها، فهذه البقع يمكن أن تكون التهابات ذات
              قشور تكونت بفعل تضرر الجلد من أشعة الشمس، ويطلق عليها الأطباء
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
              ورغم أن هذه الالتهابات والبقع شائعة ولا تمثل عادة مخاطر صحية، فإن
              هناك فرصة ضئيلة لأن تتحول إلى سرطان الجلد، يعرف باسم سرطان الخلايا
              الحرشفية
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
  );
};

export default HealthSection;
