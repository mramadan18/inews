import Image from "next/image";
import Link from "next/link";

const NewsCard = ({ img }) => {
  return (
    <div className="p-3 bg-white mb-3 mb-lg-0 text-end fs-6 animate-section">
      <div className="overflow-hidden">
        <Image src={img} width={500} height={280} alt="" />
      </div>
      <Link
        className="mt-4 text-black d-block line-height-35 fw-bold"
        style={{
          textDecoration: "none",
        }}
        href="/"
      >
        أنباء عن ضربة موجعة لسلاح الجو الروسي وزيلينسكي يطلب وساطة دولة أفريقية
        لإنهاء هذه الحرب ..
        <span className="text-danger fw-normal">أقرأ المزيد</span>
      </Link>
    </div>
  );
};

export default NewsCard;
