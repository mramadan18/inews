import Image from "next/image";

const Searchbar = () => {
  return (
    <div
      className="search-bar bg-gray position-absolute w-100 py-3 z-2 shadow-header d-none fade"
      id="searchbar"
      tabindex="-1"
      aria-labelledby="searchbar"
      aria-hidden="true"
    >
      <div className="container">
        <div className="d-flex justify-content-between align-items-center gap-3">
          <div className="w-100 position-relative">
            <Image
              className="ms-3 position-absolute top-50"
              style={{
                right: "18px",
                transform: "translateY(-50%)",
              }}
              src="/images/icons/searchbar_icon.svg"
              alt="search"
              width={24}
              height={24}
            />
            <input
              className="w-100 py-2 px-5"
              type="text"
              placeholder="أبحث"
              style={{
                border: "1px solid var(--gray-color)",
              }}
            />
          </div>
          <button className="btn btn-gray rounded-0 py-2">أبحث</button>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
