import Image from "next/image";

const SocialMediaIcons = () => {
  return (
    <div
      className="position-fixed d-none d-lg-block"
      style={{
        top: "20%",
        left: "50px",
      }}
    >
      <div className="d-flex flex-column justify-content-center align-items-center gap-3">
        <a href="#">
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
        </a>
      </div>
    </div>
  );
};

export default SocialMediaIcons;
