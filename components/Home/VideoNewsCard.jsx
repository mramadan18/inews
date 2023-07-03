import Image from "next/image";

const VideoNewsCard = () => {
  return (
    <div>
      <div className="position-relative">
        <div className="position-absolute w-100 h-100 bg-black bg-opacity-50 d-flex justify-content-center align-items-center overflow-hidden">
          <Image
            src="/images/icons/play_icon.png"
            alt="play video"
            width={50}
            height={50}
            style={{
              width: "50px",
              height: "50px",
              cursor: "pointer",
            }}
          />
        </div>

        <div
          className="position-absolute bottom-0 end-0 d-flex justify-content-center align-items-center gap-1 p-2 text-white"
          style={{
            backgroundColor: "var(--black-color)",
          }}
        >
          <span className="fs-5">22:31</span>

          <Image
            src="/images/icons/play_icon_2.svg"
            alt="play video 2"
            width={24}
            height={24}
          />
        </div>
        <Image src="/images/img_12.png" width={740} height={308} alt="..." />
      </div>

      <div className="py-3 text-center bg-white fs-5">
        ضربة موجعة لسلاح الجو الروسي
      </div>
    </div>
  );
};

export default VideoNewsCard;
