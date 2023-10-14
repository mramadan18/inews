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
}) {
  const [showNotify, setShowNotify] = useState(false);

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
    // handleNotifactionsOnSite();
  }, []);

  return (
    <>
      {showNotify && <NotificationsModal />}

      <SocialMediaIcons />

      <div className="container ">
        <BreakingNewsSection img="/images/img_1.png" urgent={true} />
        <LiveSection />
        <LatestNewsSection
          title={"أخر الأخبار"}
          color="#D30707"
          data={latest_news}
        />
        <LatestNewsSection
          title={political_news?.results[0]?.category?.name}
          color={political_news?.results[0]?.category?.color}
          data={political_news}
        />
      </div>
      <SportsNewsSection data={security_news} text="white" />
      <div className="container">
        <LatestNewsSection
          title={local_news?.results[0]?.category?.name}
          color="#C58E00"
          data={latest_news}
        />

        <div className="my-5">
          <SubTitle
            title={economic_news?.results[0]?.category?.name}
            color={economic_news?.results[0]?.category?.color}
          />
          <div className="mt-5">
            <BreakingNewsSection data={economic_news?.results[0]} />
          </div>
        </div>

        <HealthSection data={various_artistic_news} />
      </div>

      <SportsNewsSection data={international_news} text="white" />

      <div className="container">
        <LocalSection title="محلي" color="#01B73F" />
      </div>

      <OurProgramsSection
        bgColor="#012A83"
        img="/images/img_9.png"
        title="برامجنا"
        color="#D30707"
        text="white"
      />
    </>
  );
}

export async function getServerSideProps() {
  const { data: latest_news } = await baseUrl.get(
    "http://vps97897.serveur-vps.net/posts/?sort=-id"
  );
  const { data: political_news } = await baseUrl.get(
    "http://vps97897.serveur-vps.net/posts/?category=2&sort=-id"
  );
  const { data: security_news } = await baseUrl.get(
    "http://vps97897.serveur-vps.net/posts/?category=3&sort=-id"
  );
  const { data: local_news } = await baseUrl.get(
    "http://vps97897.serveur-vps.net/posts/?category=4&sort=-id"
  );
  const { data: economic_news } = await baseUrl.get(
    "http://vps97897.serveur-vps.net/posts/?category=5&sort=-id"
  );
  const { data: various_artistic_news } = await baseUrl.get(
    "http://vps97897.serveur-vps.net/posts/?category=6&sort=-id"
  );
  const { data: international_news } = await baseUrl.get(
    "http://vps97897.serveur-vps.net/posts/?category=7&sort=-id"
  );
  const { data: horoscope_news } = await baseUrl.get(
    "http://vps97897.serveur-vps.net/posts/?category=8&sort=-id"
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
    },
  };
}
