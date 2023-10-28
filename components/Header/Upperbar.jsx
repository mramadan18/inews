import { useEffect, useState } from "react";
import baseUrl from "@/baseUrl";

const Upperbar = () => {
  const [lang, setLang] = useState("ar");
  const [data, setData] = useState([]);

  const handleLang = (lang) => {
    const htmlTag = document.querySelector("html");
    const direction = lang === "ar" ? "rtl" : "ltr";
    setLang(lang);
    htmlTag.setAttribute("dir", direction);
    htmlTag.setAttribute("lang", lang);
  };

  const getData = async () => {
    const { data } = await baseUrl.get(
      "http://vps97897.serveur-vps.net/settings/"
    );
    setData(data?.results[0]);
    return data;
  };

  useEffect(() => {
    handleLang(lang);
    getData();
  }, [lang]);

  return (
    <div className="upper d-flex align-items-center">
      <div className="container d-flex justify-content-around justify-content-md-between align-items-center gap-5 text-white fs-5">
        <div className="d-flex justify-content-center align-items-center gap-4">
          <p>{data?.name_main_header_ar}</p>
          {lang === "ar" ? (
            <a
              className="d-flex justify-content-center align-items-center gap-1 text-white fs-6"
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleLang("en");
              }}
            >
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
              <span>AR</span>
            </a>
          )}
        </div>
        <p>{data?.our_sub_lable_ar}</p>
      </div>
    </div>
  );
};

export default Upperbar;
