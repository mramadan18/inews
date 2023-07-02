import BreakingNewsBar from "../Utilities/BreakingNewsBar";
import Navbar from "./Navbar";
import Upperbar from "./Upperbar";
import Searchbar from "./Searchbar";

const Header = () => {
  const handleShowSearchBar = () => {
    const searchBar = document.querySelector(".search-bar");

    if (searchBar.classList.contains("show")) {
      searchBar.classList.remove("show");
      setTimeout(() => {
        searchBar.classList.remove("d-block");
        searchBar.classList.add("d-none");
      }, 500);
    } else {
      searchBar.classList.remove("d-none");
      searchBar.classList.add("d-block");
      setTimeout(() => {
        searchBar.classList.add("show");
      }, 0);
    }
  };

  return (
    <header className="shadow-header mb-5 position-sticky top-0 end-0 w-100 z-3">
      <Upperbar />
      <Navbar handleShowSearchBar={handleShowSearchBar} />
      <BreakingNewsBar />
      <Searchbar />
    </header>
  );
};

export default Header;
