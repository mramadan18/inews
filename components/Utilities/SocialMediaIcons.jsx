import baseUrl from "@/baseUrl";
import Image from "next/image";
import { useEffect, useState } from "react";

const SocialMediaIcons = () => {
  const [social, setSocial] = useState([]);
  const getSocialMedia = async () => {
    const { data } = await baseUrl.get(
      "http://vps97897.serveur-vps.net/settings/links/"
    );
    setSocial(data.results);
  };

  useEffect(() => {
    getSocialMedia();
  }, []);

  return (
    <div
      className="position-fixed d-none d-lg-block z-2 top-50 translate-middle-y"
      style={{
        left: "40px",
      }}
    >
      <div className="d-flex flex-column justify-content-center align-items-center gap-3">
        {social?.map((item) => {
          return (
            <a key={item.id} href={item.url} target="__blank">
              <img
                className="animate-scale"
                src={item.logo}
                alt={item.name_ar}
                width={40}
                height={40}
              />
            </a>
          );
        })}

        {/* <a href="#">
          <Image
            className="animate-scale"
            src="/images/icons/facebook.png"
            width={40}
            height={40}
            alt="facebook"
          />
        </a>
        <a href="#">
          <Image
            className="animate-scale"
            src="/images/icons/twitter.png"
            width={40}
            height={40}
            alt="twitter"
          />
        </a>
        <a href="#">
          <Image
            className="animate-scale"
            src="/images/icons/youtube.png"
            width={40}
            height={40}
            alt="youtube"
          />
        </a>
        <a href="#">
          <Image
            className="animate-scale"
            src="/images/icons/telegram.png"
            width={40}
            height={40}
            alt="telegram"
          />
        </a>
        <a href="#">
          <Image
            className="animate-scale"
            src="/images/icons/linkedin.png"
            width={40}
            height={40}
            alt="linkedin"
          />
        </a>
        <a href="#">
          <Image
            className="animate-scale"
            src="/images/icons/instagram.png"
            width={40}
            height={40}
            alt="instagram"
          />
        </a> */}
      </div>
    </div>
  );
};

export default SocialMediaIcons;
