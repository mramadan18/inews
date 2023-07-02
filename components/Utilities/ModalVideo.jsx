import Image from "next/image";

const ModalVideo = () => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog p-0">
        <div className="modal-content p-0">
          <button
            style={{
              top: "-20px",
              left: "-40px",
            }}
            type="button"
            className="btn position-absolute"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <Image
              src="/images/icons/close_icon.svg"
              width={18}
              height={18}
              alt="close"
            />
          </button>
          <video src="videos/video.mp4"></video>
        </div>
      </div>
    </div>
  );
};

export default ModalVideo;
