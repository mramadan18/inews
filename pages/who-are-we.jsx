import Loading from "@/components/Utilities/Loading";
import SubTitle from "@/components/Utilities/SubTitle";
import About from "@/components/WhoWe/About";
import Image from "next/image";
import { useEffect, useState } from "react";

const whoAreWe = () => {
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
        <About />

        <div className="row mt-5">
          <div className="col-lg-6">
            <div className="p-4 bg-white">
              <SubTitle title="الرؤية" color="#D30707" more={false} />

              <p className="mt-4 line-height-35">
                لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل
                ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ...
                بروشور او فلاير او نماذج مواقع انترنت او غيرها . لوريم ايبسوم هو
                نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع
                النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير او
                نماذج مواقع انترنت او غيرها
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="p-4 bg-white mt-4 mt-lg-0">
              <SubTitle title="الرسالة" color="#D30707" more={false} />

              <p className="mt-4 line-height-35">
                لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل
                ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ...
                بروشور او فلاير او نماذج مواقع انترنت او غيرها . لوريم ايبسوم هو
                نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع
                النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير او
                نماذج مواقع انترنت او غيرها
              </p>
            </div>
          </div>
        </div>

        <div
          className="row mt-5 p-4 bg-white"
          style={{
            paddingRight: "3px !important",
          }}
        >
          <div className="col-md-2">
            <div
              className="d-flex justify-content-center align-items-center position-relative"
              style={{}}
            >
              <div className="style-img-profile">
                <Image
                  className="position-relative z-2"
                  src="/images/profile.png"
                  alt="profile"
                  width={177}
                  height={212}
                />
              </div>
            </div>
          </div>
          <div className="col-md-10">
            <div className="me-4">
              <h5 className="fw-bold mb-3">كلمة رئيس مجلس الإدارة</h5>
              <p className="line-height-35">
                لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل
                ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ...
                بروشور او فلاير او نماذج مواقع انترنت او غيرها . لوريم ايبسوم هو
                نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع
                النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير او
                نماذج مواقع انترنت او غيرها . لوريم ايبسوم هو نموذج افتراضي يوضع
                في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم
                سواء كانت تصاميم مطبوعه
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default whoAreWe;
