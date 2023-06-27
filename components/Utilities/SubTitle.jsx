import Link from "next/link";

const SubTitle = ({ title, more = true, color, text = "black" }) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="d-flex justify-content-center align-items-center gap-3">
        <span className="line" style={{ backgroundColor: color }}></span>
        <h5 className={"fw-bold text-" + text}>{title}</h5>
      </div>

      {more && (
        <Link
          href="/"
          className={"text-" + text}
          style={{ textDecoration: "underline" }}
        >
          اعرف المزيد
        </Link>
      )}
    </div>
  );
};

export default SubTitle;
