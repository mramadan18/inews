import baseUrl from "@/baseUrl";
import Image from "next/image";
import { useEffect, useState } from "react";

const About = ({ aboutUs }) => {
  return (
    <section className="bg-white p-4">
      <div className="row">
        <div className="col-lg-4">
          <Image
            src={aboutUs?.main_image}
            width={620}
            height={343}
            alt={aboutUs?.main_header_ar}
          />
        </div>
        <div className="col-lg-8">
          <h5 className="fw-bold mb-4 mt-5 mt-lg-0">
            {aboutUs?.main_header_ar}
          </h5>
          <p className="line-height-35">{aboutUs?.desc_ar}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
