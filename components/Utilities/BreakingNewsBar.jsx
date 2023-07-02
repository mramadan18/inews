import Image from "next/image";

const BreakingNewsBar = () => {
  return (
    <div
      className="alert alert-bar text-white bg-red text-white fade show position-absolute w-100 rounded-0 z-1"
      role="alert"
    >
      <div className="container d-flex justify-content-between align-items-center">
        <p className="fs-5">
          عاجل : نزاعات العشائر في العراق.. ميراث قديم يتغذى على الفوضى
        </p>
        <button className="btn">
          <Image
            src="/images/icons/close_icon.svg"
            width={30}
            height={30}
            alt="close"
            data-bs-dismiss="alert"
            aria-label="Close"
          />
        </button>
      </div>
    </div>
  );
};

export default BreakingNewsBar;
