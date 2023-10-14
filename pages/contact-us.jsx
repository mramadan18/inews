import baseUrl from "@/baseUrl";
import Loading from "@/components/Utilities/Loading";
import SubTitle from "@/components/Utilities/SubTitle";
import Image from "next/image";
import { useEffect, useState } from "react";

const ContactUs = () => {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handlePostMessage = async (e) => {
    e.preventDefault();
    const formData = {
      first_name,
      last_name,
      phone,
      email,
      message,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      setIsLoading(true);
      const { data } = await baseUrl.post("/contactus/", formData, config);
      setIsLoading(false);
      setFirst_name("");
      setLast_name("");
      setPhone("");
      setEmail("");
      setMessage("");
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <div className="container">
        <div className="row pt-5 pb-3 px-3 bg-white">
          <div className="col-lg-6">
            <SubTitle title="تواصل معنا" color="#D30707" more={false} />

            <form onSubmit={handlePostMessage}>
              <div className="row mt-4">
                <div className="col-6">
                  <input
                    className="w-100"
                    type="text"
                    required
                    placeholder="الاسم الأول *"
                    value={first_name}
                    onChange={({ target }) => setFirst_name(target.value)}
                  />
                </div>
                <div className="col-6">
                  <input
                    className="w-100"
                    type="text"
                    required
                    placeholder="الاسم الثاني *"
                    value={last_name}
                    onChange={({ target }) => setLast_name(target.value)}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-6">
                  <input
                    className="w-100"
                    type="tel"
                    required
                    placeholder="رقم الجوال *"
                    value={phone}
                    onChange={({ target }) => setPhone(target.value)}
                  />
                </div>
                <div className="col-6">
                  <input
                    className="w-100"
                    type="email"
                    required
                    placeholder="الإيميل *"
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12">
                  <textarea
                    className="w-100"
                    rows="6"
                    placeholder="الرسالة *"
                    required
                    value={message}
                    onChange={({ target }) => setMessage(target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-primary w-100 rounded-0"
                  >
                    {isLoading ? <Loading /> : "إرسال"}
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
