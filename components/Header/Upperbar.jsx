import { useEffect, useState } from "react";
import Image from "next/image";

const Upperbar = () => {
  const [lang, setLang] = useState("ar");

  const handleLang = (lang) => {
    const htmlTag = document.querySelector("html");
    const direction = lang === "ar" ? "rtl" : "ltr";
    setLang(lang);
    htmlTag.setAttribute("dir", direction);
    htmlTag.setAttribute("lang", lang);
  };

  useEffect(() => {
    handleLang(lang);
  }, [lang]);

  return (
    <div className="upper d-flex align-items-center">
      <div className="container d-flex justify-content-around justify-content-md-between align-items-center gap-5 text-white fs-5">
        <div className="d-flex justify-content-center align-items-center gap-4">
          <p>قناة اي نيوز الفضائية</p>
          {lang === "ar" ? (
            <a
              className="d-flex justify-content-center align-items-center gap-1 text-white fs-6"
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleLang("en");
              }}
            >
              <Image
                src="/images/icons/en.png"
                alt="en"
                width={24}
                height={24}
              />
              <span>EN</span>
            </a>
          ) : (
            <a
              className="d-flex justify-content-center align-items-center gap-1 text-white fs-6"
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleLang("ar");
              }}
            >
              <Image
                src="/images/icons/ar.png"
                alt="ar"
                width={24}
                height={24}
              />
              <span>AR</span>
            </a>
          )}
        </div>
        <p>نعلم لتعلم</p>
      </div>
    </div>
  );
};

export default Upperbar;
