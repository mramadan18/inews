import Image from "next/image";

const BreakingNewsSection = ({ img, urgent = false }) => {
  return (
    <section className="border-top bg-white p-4 animate-section">
      <div className="row">
        <div className="col-lg-6">
          <div className="position-relative">
            <div
              className="overlay position-absolute w-100 h-100 d-flex justify-content-center align-items-center overflow-hidden z-1"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 0.85) 100%)",
              }}
            ></div>
            {urgent && (
              <button
                className="btn btn-danger position-absolute rounded-0 px-3 z-1"
                style={{
                  top: "10px",
                  right: "20px",
                  fontSize: "13px",
                }}
              >
                عاجل
              </button>
            )}
            <div className="overflow-hidden">
              <Image src={img} width={720} height={343} alt="..." />
            </div>
            <span
              className="fs-6 mb-4 mt-3 position-absolute text-white z-2"
              style={{
                left: "40%",
                bottom: "10px",
              }}
            >
              حرب روسيا و أوكرانيا
            </span>
          </div>
        </div>
        <div className="col-lg-6">
          <h6 className="text-black mb-4 mt-3 fs-6">حرب روسيا و أوكرانيا</h6>
          <h5 className="line-height-35 fw-bold mb-4">
            أنباء عن ضربة موجعة لسلاح الجو الروسي وزيلينسكي يطلب وساطة دولة
            أفريقية لإنهاء الحرب
          </h5>
          <p className="line-height-35">
            كشفت مصادر صحفية روسية عن تعرض سلاح الجو الروسي لضربة موجعة قرب
            الحدود الأوكرانية، في حين حث الرئيس الأوكراني فولوديمير زيلينسكي
            دولة أفريقية على المساعدة في تنفيذ خطة كييف للسلام لإنهاء الحرب.
          </p>

          <div className="date mt-5 text-gray">
            16 مايو 2023 الساعة الرابعة مساءًا
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreakingNewsSection;
