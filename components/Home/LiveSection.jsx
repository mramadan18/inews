import Image from "next/image";
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
          <Image src="/images/img_2.png" width={750} height={424} alt="..." />
        </div>
      </div>
    </div>
  );
};

export default LiveSection;
