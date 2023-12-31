import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import baseUrl from "@/baseUrl";

const Navbar = ({ handleShowSearchBar }) => {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [logo, setLogo] = useState("");

  const fetchLinks = async () => {
    const { data } = await baseUrl.get("/category/");
    setCategories(data?.results);
  };

  const fetchLogo = async () => {
    const { data: logo } = await baseUrl.get("/settings/");
    setLogo(logo?.results[0]?.navbar_logo);
  };

  useEffect(() => {
    fetchLinks();
    fetchLogo();
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container">
        <Link className="navbar-brand me-0" href="/">
          <img src={logo} alt="i-news" width={130} height={40} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav flex justify-content-center align-content-center gap-3 me-start mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`${router.pathname === "/" ? "active" : ""}`}
                aria-current="page"
                href="/"
              >
                الرئيسية
              </Link>
            </li>
            {categories?.slice(0, 5).map((category) => {
              return (
                <li key={category?.id} className="nav-item">
                  <Link
                    className={`${
                      router.query.categoryId == category?.id ? "active" : ""
                    }`}
                    aria-current="page"
                    href={`/categories/${category?.id}`}
                  >
                    {category?.name}
                  </Link>
                </li>
              );
            })}
            <li className="nav-item dropdown">
              <Link
                className="dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                المزيد
              </Link>
              <ul className="dropdown-menu text-end py-0 rounded-0">
                {categories?.slice(5).map((category) => {
                  return (
                    <li key={category?.id}>
                      <Link
                        className="dropdown-item"
                        href={`/categories/${category.id}`}
                      >
                        {category?.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
          <form
            className="d-flex justify-content-center align-items-center gap-4 me-auto"
            role="search"
          >
            <Image
              className="ms-3"
              src="/images/icons/search_icon.png"
              alt="search"
              width={24}
              height={24}
              onClick={handleShowSearchBar}
              style={{ cursor: "pointer" }}
            />
            <Link href="/live" className="link-live">
              البث الحي
            </Link>
            <Link
              href="/breaking-news"
              className="btn btn-danger rounded-0 px-4 me-3"
            >
              عاجل
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
