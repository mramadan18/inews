import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ handleShowSearchBar }) => {
  const router = useRouter();
  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <Image
            src="/images/inews_logo.png"
            alt="iNEWS"
            width={130}
            height={40}
            priority
          />
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
          <ul className="navbar-nav me-start mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  router.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                href="/"
              >
                الرئيسية
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  router.pathname === "/policy" ? "active" : ""
                }`}
                aria-current="page"
                href="/policy"
              >
                سياسة
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href="/">
                أمني
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href="/">
                محلي
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href="/">
                أخبار دولية و أقليمية
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href="/">
                اقتصاد
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                المزيد
              </Link>
              <ul className="dropdown-menu text-end pt-0 rounded-0">
                <li>
                  <Link className="dropdown-item" href="/">
                    الصحة
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/">
                    الفن
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/">
                    علوم
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/">
                    تراث
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/">
                    الرياضة
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/">
                    تكنولوجيا
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/">
                    ريادة
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/">
                    ثقافة
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/">
                    منوعات
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/">
                    مقالات
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/">
                    برامجنا
                  </Link>
                </li>
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
            <Link href="/" className="link-live">
              البث الحي
            </Link>
            <button className="btn btn-danger px-4 mx-3" type="submit">
              عاجل
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
