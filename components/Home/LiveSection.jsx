import SubTitle from "../Utilities/SubTitle";
import VideoLiveCard from "./VideoLiveCard";

const LiveSection = () => {
  return (
    <div className="mt-5">
      <SubTitle title={"البث المباشر"} more={false} color="#D30707" />
      <div className="row mt-4">
        <div className="col-lg-7 mb-4 mb-lg-0">
          <VideoLiveCard />
        </div>
        <div className="col-lg-5">
          <VideoLiveCard />
        </div>
      </div>
    </div>
  );
};

export default LiveSection;
