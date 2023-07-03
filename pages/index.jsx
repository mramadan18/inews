import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
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
import { useEffect, useState } from "react";

export default function Home() {
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
    handleNotifactionsOnSite();
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
          imgs={["/images/img_3.png", "/images/img_4.png", "/images/img_5.png"]}
        />
        <LatestNewsSection
          title={"اقتصاد"}
          color="#168A03"
          imgs={["/images/img_6.png", "/images/img_7.png", "/images/img_8.png"]}
        />
      </div>
      <SportsNewsSection
        bg="/images/bg_1.png"
        bgColor="rgba(111, 100, 2, 0.70)"
        img="/images/img_9.png"
        title="الغن"
        color="#FFD930"
        text="white"
      />
      <div className="container">
        <LatestNewsSection
          title={"أخبار دولية و أقليمية"}
          color="#C58E00"
          imgs={[
            "/images/img_11.png",
            "/images/img_12.png",
            "/images/img_13.png",
          ]}
        />

        <div className="my-5">
          <SubTitle title="تكنولوجيا" color="#5B9BD7" />
          <div className="mt-5">
            <BreakingNewsSection img="/images/img_10.png" />
          </div>
        </div>

        <HealthSection
          title="الصحة"
          color="#0052A1"
          img="/images/img_14.png"
          imgs={["/images/img_15.png", "/images/img_16.png"]}
        />
      </div>

      <SportsNewsSection
        bg="/images/bg_2.png"
        bgColor="rgba(87, 1, 140, 0.70)"
        img="/images/img_17.png"
        title="الفن"
        color="#FFFFFF"
        text="white"
      />

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

      <div className="container">
        <LatestNewsSection
          title={"تراث"}
          color="#BA5900"
          imgs={[
            "/images/img_23.png",
            "/images/img_24.png",
            "/images/img_25.png",
          ]}
        />

        <HealthSection
          title="ريادة"
          color="#0501C8"
          img="/images/img_26.png"
          imgs={["/images/img_27.png", "/images/img_28.png"]}
        />
      </div>
    </>
  );
}
