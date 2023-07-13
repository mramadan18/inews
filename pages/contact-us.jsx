import Loading from "@/components/Utilities/Loading";
import SubTitle from "@/components/Utilities/SubTitle";
import Image from "next/image";
import { useEffect, useState } from "react";

const ContactUs = () => {
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
        <div className="row pt-5 pb-3 px-3 bg-white">
          <div className="col-lg-6">
            <SubTitle title="تواصل معنا" color="#D30707" more={false} />

            <form>
              <div className="row mt-4">
                <div className="col-6">
                  <input
                    className="w-100"
                    type="text"
                    placeholder="الاسم الأول *"
                  />
                </div>
                <div className="col-6">
                  <input
                    className="w-100"
                    type="text"
                    placeholder="الاسم الثاني *"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-6">
                  <input
                    className="w-100"
                    type="text"
                    placeholder="رقم الجوال *"
                  />
                </div>
                <div className="col-6">
                  <input className="w-100" type="text" placeholder="الإيميل" />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12">
                  <textarea
                    className="w-100"
                    rows="6"
                    placeholder="الرسالة *"
                  ></textarea>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-primary w-100 rounded-0"
                  >
                    إرسال
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="col-lg-6 mt-5 mt-lg-0">
            <div
              className="d-flex flex-column justify-content-center align-items-start gap-3 pe-4"
              style={{ borderRight: "1px solid var(--grey-color)" }}
            >
              <div className="d-flex justify-content-center align-items-center gap-2">
                <Image
                  src="/images/icons/location_icon.svg"
                  alt="..."
                  width={24}
                  height={24}
                />
                <a href="#">بغداد, Karrada, Iraq, 10069</a>
              </div>
              <div className="d-flex justify-content-center align-items-center gap-2">
                <Image
                  src="/images/icons/email_icon.svg"
                  alt="..."
                  width={24}
                  height={24}
                />
                <a href="#">info@i-news.tv</a>
              </div>
              <div className="d-flex justify-content-center align-items-center gap-2">
                <Image
                  src="/images/icons/phone_icon.svg"
                  alt="..."
                  width={24}
                  height={24}
                />
                <a href="#">+964 773 081 7679</a>
              </div>
              <div className="w-100 mt-3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26678.360537267963!2d44.44557686391948!3d33.298023970909995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x155781bc7ed270e1%3A0x151cf02d7b87ca2f!2z2KfZhNmD2LHYp9iv2KnYjCDYqNi62K_Yp9iv2Iwg2KfZhNi52LHYp9mC!5e0!3m2!1sar!2seg!4v1687824296824!5m2!1sar!2seg"
                  style={{ border: "0", height: "260px" }}
                  loading="lazy"
                  className="w-100"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
