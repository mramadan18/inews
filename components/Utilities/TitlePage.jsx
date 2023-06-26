import Image from "next/image";

const TitlePage = ({ title }) => {
  return (
    <div className="p-4 bg-white">
      <button className="btn-primary rounded-0 py-1 px-3 fs-5 text-white position-relative">
        <Image
          src="/images/img_29.png"
          alt=""
          width={24}
          height={24}
          className="position-absolute top-0 end-0"
        />
        {title}
      </button>
    </div>
  );
};

export default TitlePage;
