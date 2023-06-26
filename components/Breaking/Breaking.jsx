import Image from "next/image";
import React from "react";

const Breaking = () => {
  return (
    <div className="border-bottom border-right bg-gray d-flex justify-content-center align-items-center gap-3 p-4">
      <Image
        src="/images/icons/icon_time.png"
        alt="time"
        width={40}
        height={40}
      />
      <span
        style={{
          width: "150px",
        }}
      >
        قبل 30 دقيقة
      </span>
      <p>
        لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور
        طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير
        على سبيل المثال ... او نماذج مواقع انترنت ...
      </p>
    </div>
  );
};

export default Breaking;
