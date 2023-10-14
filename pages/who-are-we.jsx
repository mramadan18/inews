import baseUrl from "@/baseUrl";
import SubTitle from "@/components/Utilities/SubTitle";
import About from "@/components/WhoWe/About";
import Image from "next/image";

const WhoAreWe = ({ aboutUs, cards }) => {
  return (
    <main>
      <div className="container">
        <About aboutUs={aboutUs} />

        <div className="row mt-4">
          {cards?.results?.map((card) => {
            if (!card.image) {
              return (
                <>
                  <div className="col-lg-6 mt-4">
                    <div className="p-4 bg-white">
                      <SubTitle
                        title={card.name_ar}
                        color={card.color}
                        more={false}
                      />

                      <p className="mt-4 line-height-35">{card.desc_ar}</p>
                    </div>
                  </div>
                </>
              );
            }
          })}
        </div>

        {cards?.results?.map((item) => {
          if (item.image !== null) {
            return (
              <>
                <div
                  className="row mt-5 p-4 bg-white"
                  style={{
                    paddingRight: "3px !important",
                  }}
                >
                  <div className="col-md-2">
                    <div className="d-flex justify-content-center align-items-center position-relative">
                      <div className="style-img-profile">
                        <Image
                          className="position-relative z-2"
                          src={item.image}
                          alt={item.name_ar}
                          width={177}
                          height={212}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-10">
                    <div className="me-4">
                      <h5 className="fw-bold mb-3">{item.name_ar}</h5>
                      <p className="line-height-35">{item.desc_ar}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          }
        })}
      </div>
    </main>
  );
};

export default WhoAreWe;

export async function getServerSideProps() {
  const { data: cards } = await baseUrl.get("/settings/about-us/cards/");
  const { data: about } = await baseUrl.get("/settings/about-us/");
  return { props: { aboutUs: about.results[0], cards } };
}
