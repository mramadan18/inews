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
      <div className="modal-dialog p-0 mt-5 mt-md-4 mx-auto">
        <div className="modal-content w-100 h-100 p-0">
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
              width={30}
              height={30}
              alt="close"
            />
          </button>
          <iframe
            style={{
              height: "100%",
            }}
            src="https://player.l1vetv.com/inewstv/"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ModalVideo;
