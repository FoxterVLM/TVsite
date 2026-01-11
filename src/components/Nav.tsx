import { Link } from "react-router-dom";
import Logo from "../../public/img/Logo_text.png";
import SearchImg from "../../public/img/movies_shows/SearchImg.png";
import Notification from "../../public/img/movies_shows/Notifications.png";
import { useLocation } from "react-router-dom";
// import {useSearch} from "../stores/useSearch.ts";
// import Search from "./movies_shows/search/Search.tsx";

export default function Nav() {
  const location = useLocation();

  const defClassName =
    "pages-title font-[Manrope] text-white text-[18px] rounded-[8px] bg-[#262626] py-[14px] px-[24px] text-[#ffffff] font-medium transition-all ease-in-out duration-150";
  const className =
    "pages-title font-[Manrope] text-[18px] focus:font-[Manrope]  focus:py-[14px] focus:px-[24px]  focus:text-[18px]    focus:rounded-[8px]    focus:bg-[#262626]    focus:py-[14px]focus:px-[24px]focus:text-[#ffffff]focus:font-medium transition-all ease-in-out duration-150";
  // const { page, setPage } = useCurrentPage();

  // const {isSearching, setIsSearching} = useSearch();

  return (
    <nav className="navbar flex w-full px-[162px] text-white justify-between gap items-center pt-[22px] pb-[23px] bg-[#141414] ">
      <Link to="/" className="navbar-logo mr-[307px]">
        <img src={Logo} alt="Logo" className="logo-img cursor-pointer" />
      </Link>
      <div className="nav-pages text-white flex px-[40px] py-[10px] gap-[30px]  rounded-[12px] border-[#1F1F1F] border-4 bg-[#0F0F0F] items-center">
        <Link
          to="/"
          className={location.pathname === "/" ? defClassName : className}
        >
          Home
        </Link>
        <Link
          to="/ms"
          className={location.pathname === "/ms" ? defClassName : className}
        >
          Movies & Shows
        </Link>
        <Link
          to="/support"
          className={
            location.pathname === "/support" ? defClassName : className
          }
        >
          Support
        </Link>
        <Link
          to="/sub"
          className={location.pathname === "/sub" ? defClassName : className}
        >
          Subscriptions
        </Link>
      </div>
      <div className="navbar-activities flex gap-[30px] ml-[307px]">
        {/*<div className="activities-search">*/}
          {/*{isSearching && <Search/>}*/}
          <img
              src={SearchImg}
              alt="Search"
              className="activities-search w-[34px] h-[34px] cursor-pointer"
              onClick={() => isSearching ? setIsSearching(false) : setIsSearching(true)}
          />
        {/*</div>*/}

        <img
          src={Notification}
          alt="Notifications"
          className="activities-notifications w-[34px] h-[34px] cursor-pointer"
        />
      </div>
    </nav>
  );
}
