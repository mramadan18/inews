const VideoNewsCard = ({ data }) => {
  return (
    <>
      <div className="position-relative">
        {/* <div className="position-absolute w-100 h-100 bg-black bg-opacity-50 d-flex justify-content-center align-items-center overflow-hidden">
          <img
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
        </div> */}
        {/* <div
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
        </div> */}
        <iframe
          src={`https://www.youtube.com/embed/${data?.video_id}`}
          style={{ height: "350px" }}
          title={data?.title}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div className="py-3 text-center bg-white fs-5">
        {data?.title.slice(0, 30)}...
      </div>
    </>
  );
};

export default VideoNewsCard;
