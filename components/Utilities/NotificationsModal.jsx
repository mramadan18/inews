import Image from "next/image";

const NotificationsModal = () => {
  return (
    <div
      className="notify-modal position-fixed top-0 start-0 w-100 h-100 z-3 d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{
          width: "450px",
        }}
      >
        <div
          className="d-flex justify-content-center align-items-center w-100 py-5"
          style={{ backgroundColor: "var(--black-color)" }}
        >
          <Image
            src="/images/icons/notify_icon.svg"
            alt="notify"
            width={110}
            height={130}
          />
        </div>
        <div className="bg-white w-100 text-center d-flex flex-column justify-content-center align-content-center p-5">
          <h4 className="text-danger mb-4">لتصلك آخر أخبار آي نيوز دائمًا</h4>
          <p className="fs-5">
            اشترك بإشعارات آي نيوز العراقية عبر الضغط على زر Allow
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotificationsModal;
