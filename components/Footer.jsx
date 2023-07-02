import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white pt-5 pb-4 mb-lg-0 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex flex-column justify-content-center align-items-center gap-4">
            <Image
              src={"/images/inews_logo.png"}
              alt="iNEWS"
              width={130}
              height={40}
            />
            <p
              className="text-black fw-bold text-center"
              style={{
                lineHeight: "30px",
              }}
            >
              إخبارية عامة تعنى بالشأن العراقي والإقليمي والدولي بتفصيلاته كافة
              تبث من جمهورية العراق. على التردد 11258 H
            </p>

            <div className="d-flex justify-content-center align-items-center gap-3">
              <div
                className="d-flex justify-content-center align-items-center rounded-circle border border-2 border-dark"
                style={{ width: "35px", height: "35px" }}
              >
                <Image
                  src={"/images/icons/footer_facebook.svg"}
                  alt="facebook"
                  width={24}
                  height={24}
                />
              </div>
              <div
                className="d-flex justify-content-center align-items-center rounded-circle border border-2 border-dark"
                style={{ width: "35px", height: "35px" }}
              >
                <Image
                  src={"/images/icons/footer_twitter.svg"}
                  alt="facebook"
                  width={24}
                  height={24}
                />
              </div>
              <div
                className="d-flex justify-content-center align-items-center rounded-circle border border-2 border-dark"
                style={{ width: "35px", height: "35px" }}
              >
                <Image
                  src={"/images/icons/footer_youtube.svg"}
                  alt="facebook"
                  width={24}
                  height={24}
                />
              </div>
              <div
                className="d-flex justify-content-center align-items-center rounded-circle border border-2 border-dark"
                style={{ width: "35px", height: "35px" }}
              >
                <Image
                  src={"/images/icons/footer_telegram.svg"}
                  alt="facebook"
                  width={24}
                  height={24}
                />
              </div>
              <div
                className="d-flex justify-content-center align-items-center rounded-circle border border-2 border-dark"
                style={{ width: "35px", height: "35px" }}
              >
                <Image
                  src={"/images/icons/footer_linkedin.svg"}
                  alt="facebook"
                  width={24}
                  height={24}
                />
              </div>
              <div
                className="d-flex justify-content-center align-items-center rounded-circle border border-2 border-dark"
                style={{ width: "35px", height: "35px" }}
              >
                <Image
                  src={"/images/icons/footer_instagram.svg"}
                  alt="facebook"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex flex-column justify-content-start align-items-start gap-3 px-5 my-3 mb-md-0">
            <h5 className="fw-bold mb-3 d-flex">عنا</h5>
            <div className="d-flex flex-row flex-md-row flex-wrap justify-content-start align-items-start gap-3">
              <Link href="/who-are-we">من نحن</Link>
              <Link href="/terms-and-conditions">الأحكام والشروط</Link>
              <Link href="/privacy-policy">سياسة الخصوصية</Link>
              <Link href="/contact-us">تواصل معنا</Link>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex flex-column justify-content-start align-items-start gap-3 px-5 mb-5 mt-3 mt-lg-0">
            <h5 className="fw-bold mb-3">الأقسام</h5>
            <div className="d-flex justify-content-start align-items-center gap-4">
              <div className="d-flex flex-column justify-content-center align-items-start gap-3">
                <Link href="/policy">أقتصاد</Link>
                <Link href="/policy">سياسة</Link>
                <Link href="/policy">رياضة</Link>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-start gap-3">
                <Link href="/policy">أمني</Link>
                <Link href="/policy">محلي</Link>
                <Link href="/policy">أخبار دولية وأقليمية</Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex flex-column justify-content-start align-items-start gap-4 px-5 mt-3 mt-lg-0">
            <h5 className="fw-bold mb-3">اشترك بالنشرة البريدية</h5>
            <input
              className="w-100"
              type="text"
              placeholder="البريد الإلكتروني"
            />
            <div className="btn btn-primary rounded-0 w-100">اشترك</div>
          </div>
        </div>
      </div>
      <div
        className="copy-right mt-4 py-4 text-center"
        style={{
          borderTop: "1px solid #D2D2D2",
        }}
      >
        <p>جميع الحقوق محفوظة © 2023 شبكة آي نيوز الفضائية</p>
      </div>
    </footer>
  );
};

export default Footer;
