import Image from "next/image";

const VideoNewsCard = () => {
  return (
    <div className="position-relative">
      <div className="position-absolute w-100 h-100 bg-black bg-opacity-50 d-flex justify-content-center align-items-center overflow-hidden">
        <Image
          src="/images/icons/play_icon.png"
          alt="play video"
          width={50}
          height={50}
          style={{
            width: "50px",
            cursor: "pointer",
          }}
        />
      </div>
      <Image src="/images/img_12.png" width={740} height={308} alt="..." />
    </div>
  );
};

export default VideoNewsCard;
