import Image from "next/image";

const Breaking = () => {
  return (
    <div className="border-bottom border-right bg-gray p-4">
      <div className="row align-items-center">
        <div className="col-1">
          <Image
            src="/images/icons/icon_time.png"
            alt="time"
            width={40}
            height={40}
          />
        </div>
        <div className="col-2">
          <span>قبل 30 دقيقة</span>
        </div>
        <div className="col-9">
          <p className="line-height-35">
            لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل
            ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور
            او فلاير على سبيل المثال ... او نماذج مواقع انترنت ...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Breaking;
