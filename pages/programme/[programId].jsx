import baseUrl from "@/baseUrl";
import VideoNewsCard from "@/components/Home/VideoNewsCard";
import SubTitle from "@/components/Utilities/SubTitle";
import TitlePage from "@/components/Utilities/TitlePage";

const EpisodeOfTheProgramme = ({ data }) => {
  return (
    <main>
      <div className="container">
        <TitlePage title={data?.name} />

        <div className="border-top p-4 bg-white">
          <div className="row">
            <div className="col-lg-7">
              <iframe
                src={`https://www.youtube.com/embed/${data?.videos[0]?.video_id}`}
                style={{ height: "350px" }}
                title={data?.videos[0].title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            <div className="col-lg-5">
              <h5 className="line-height-50 fw-semibold mb-3">
                {data?.videos[0].title}
              </h5>
              <p className="line-height-35">{data?.videos[0].description}</p>
              <div className="date mt-4 text-gray">
                {data?.videos[0].published_at}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <SubTitle
            title="المزيد من حلقات برنامج شريط أصفر"
            color="#D30707"
            more={false}
          />

          <div className="row mt-4">
            {data?.videos?.map((video) => {
              return (
                <div key={video.video_id} className="col-md-6 col-lg-4 mb-3">
                  <VideoNewsCard data={video} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default EpisodeOfTheProgramme;

export async function getServerSideProps(context) {
  const { programId } = context.params;
  const { data } = await baseUrl.get(`/programs/${programId}`);
  return { props: { data } };
}
