/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const NewsCard = ({ data }) => {
  return (
    <div className="p-3 bg-white mb-3 mb-lg-0 text-end fs-6 animate-section">
      <div className="overflow-hidden" style={{ height: "200px" }}>
        <img
          className="w-100 h-100"
          src={data?.thumbnail}
          alt={data?.title_ar}
          loading="lazy"
        />
      </div>
      <Link
        className="mt-4 text-black d-block line-height-35 fw-bold"
        style={{
          textDecoration: "none",
        }}
        href={`/posts/${data?.id}`}
      >
        <p
          className="overflow-hidden"
          style={{ height: "100px" }}
          dangerouslySetInnerHTML={{
            __html:
              data?.title_ar +
              '<span style="color: var(--red-color);"> أقرأ المزيد</span>',
          }}
        />
      </Link>
    </div>
  );
};

export default NewsCard;
