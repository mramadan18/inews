import Image from "next/image";
import ModalVideo from "../Utilities/ModalVideo";

const VideoLiveCard = () => {
  return (
    <div className="position-relative">
      <div className="position-absolute w-100 h-100 bg-black bg-opacity-50 d-flex justify-content-center align-items-center overflow-hidden">
        <button
          className="btn"
          data-bs-target="#exampleModal"
          data-bs-toggle="modal"
        >
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
        </button>
      </div>

      <Image src="/images/img_2.png" width={750} height={424} alt="..." />

      <ModalVideo />
    </div>
  );
};

export default VideoLiveCard;
