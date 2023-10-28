const VideoLiveCard = () => {
  return (
    <div className="position-relative h-100 overflow-hidden">
      <iframe
        className="overflow-hidden"
        style={{ height: "100%" }}
        src="https://player.l1vetv.com/inewstv/"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoLiveCard;
