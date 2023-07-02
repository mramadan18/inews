import Image from "next/image";

const TitlePage = ({ title }) => {
  return (
    <div className="p-4 bg-white">
      <div
        className="bg-blue-light py-2 px-3 fs-5 text-white position-relative"
        style={{ width: "fit-content" }}
      >
        <Image
          src="/images/img_29.png"
          alt=""
          width={24}
          height={24}
          className="position-absolute top-0 end-0"
        />
        {title}
      </div>
    </div>
  );
};

export default TitlePage;
