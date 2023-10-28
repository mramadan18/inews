import Image from "next/image";

const Breaking = ({ data }) => {
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
          <span>
            {new Date(data?.created_at).toLocaleDateString("ar-eg", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
        <div className="col-9">
          <p className="line-height-35">{data?.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Breaking;
