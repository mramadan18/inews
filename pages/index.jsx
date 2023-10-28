import { useEffect, useState } from "react";
import BreakingNewsSection from "@/components/Home/BreakingNewsSection";
import LiveSection from "@/components/Home/LiveSection";
import LatestNewsSection from "@/components/Home/LatestNewsSection";
import SportsNewsSection from "@/components/Home/SportsNewsSection";
import SubTitle from "@/components/Utilities/SubTitle";
import HealthSection from "@/components/Home/HealthSection";
import LocalSection from "@/components/Home/LocalSection";
import OurProgramsSection from "@/components/Home/OurProgramsSection";
import SocialMediaIcons from "@/components/Utilities/SocialMediaIcons";
import NotificationsModal from "@/components/Utilities/NotificationsModal";
import baseUrl from "@/baseUrl";

export default function Home({
  latest_news,
  political_news,
  security_news,
  local_news,
  economic_news,
  various_artistic_news,
  international_news,
  breaking_news,
  programs,
  broadcaster_sliders,
}) {
  const [showNotify, setShowNotify] = useState(true);

  const handleNotifactionsOnSite = async () => {
    if (!window.Notification) {
      alert("This browser does not support desktop notification");
    } else {
      let permission = await Notification.requestPermission();
      if (permission === "granted") {
        setShowNotify(false);
        let notify = new Notification("آي نيوز", {
          body: "أنباء عن ضربة موجعة لسلاح الجو الروسي وزيلينسكي يطلب وساطة دولة أفريقية لإنهاء هذه الحرب ..  ",
          icon: "/images/inews_logo.png",
          dir: "rtl",
          lang: "ar-eg",
        });

        notify.addEventListener("click", () => {
          console.log("Greet!");
        });
      } else {
        setShowNotify(false);
      }
    }
  };

  useEffect(() => {
    handleNotifactionsOnSite();
  }, []);

  return (
    <>
      {showNotify && <NotificationsModal />}

      <SocialMediaIcons />

      <div className="container">
        <BreakingNewsSection data={breaking_news.results[0]} urgent={true} />
        <LiveSection data={broadcaster_sliders} />
        <LatestNewsSection
          title={"أخر الأخبار"}
          color="#D30707"
          data={latest_news}
        />
        <LatestNewsSection
          title={political_news?.results[0]?.category?.name}
          color={political_news?.results[0]?.category?.color}
          data={political_news}
          link={`/categories/${political_news?.results[0]?.category?.id}`}
        />
      </div>
      <SportsNewsSection
        data={security_news}
        text="white"
        link={`/categories/${security_news?.results[0]?.category?.id}`}
      />
      <div className="container">
        <LatestNewsSection
          title={local_news?.results[0]?.category?.name}
          color="#C58E00"
          data={latest_news}
          link={`/categories/${local_news?.results[0]?.category?.id}`}
        />

        <div className="my-5">
          <SubTitle
            title={economic_news?.results[0]?.category?.name}
            color={economic_news?.results[0]?.category?.color}
            link={`/categories/${economic_news?.results[0]?.category?.id}`}
          />
          <div className="mt-5">
            <BreakingNewsSection
              data={economic_news?.results[0]}
              link={`/categories/${economic_news?.results[0]?.category?.id}`}
            />
          </div>
        </div>

        <HealthSection
          data={various_artistic_news}
          link={`/categories/${various_artistic_news?.results[0]?.category?.id}`}
        />
      </div>

      <SportsNewsSection
        data={international_news}
        text="white"
        link={`/categories/${international_news?.results[0]?.category?.id}`}
      />

      <div className="container">
        <LocalSection title="محلي" color="#01B73F" link={"/categories/7"} />
      </div>

      <OurProgramsSection
        bgColor="#012A83"
        data={programs}
        title="برامجنا"
        color="#D30707"
        text="white"
        link={"/our-program"}
      />
    </>
  );
}

export async function getServerSideProps() {
  const { data: latest_news } = await baseUrl.get("/posts/?sort=-id");
  const { data: political_news } = await baseUrl.get(
    "/posts/?category=2&sort=-id"
  );
  const { data: security_news } = await baseUrl.get(
    "/posts/?category=3&sort=-id"
  );
  const { data: local_news } = await baseUrl.get("/posts/?category=4&sort=-id");
  const { data: economic_news } = await baseUrl.get(
    "/posts/?category=5&sort=-id"
  );
  const { data: various_artistic_news } = await baseUrl.get(
    "/posts/?category=6&sort=-id"
  );
  const { data: international_news } = await baseUrl.get(
    "/posts/?category=7&sort=-id"
  );
  const { data: horoscope_news } = await baseUrl.get(
    "/posts/?category=8&sort=-id"
  );
  const { data: breaking_news } = await baseUrl.get("/posts/?urgent=true");
  const { data: programs } = await baseUrl.get("/programs/");
  const { data: broadcaster_sliders } = await baseUrl.get(
    "/programs/broadcaster-sliders/"
  );
  return {
    props: {
      latest_news,
      political_news,
      security_news,
      local_news,
      economic_news,
      various_artistic_news,
      international_news,
      horoscope_news,
      breaking_news,
      programs,
      broadcaster_sliders,
    },
  };
}
