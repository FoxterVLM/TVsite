import { Link } from "react-router-dom";
import Logo from "../../public/img/Logo_text.png";
import Search from "../../public/img/movies_shows/Search.png";
import Notification from "../../public/img/movies_shows/Notifications.png";
import { useCurrentPage } from "../stores/useCurrentPage.ts";

export default function Nav() {
  const defClassName =
    "pages-title font-[Manrope] text-white text-[18px] rounded-[8px] bg-[#262626] py-[14px] px-[24px] text-[#ffffff] font-medium transition-all ease-in-out duration-150";
  const className =
    "pages-title font-[Manrope] text-[18px] focus:font-[Manrope]  focus:py-[14px] focus:px-[24px]  focus:text-[18px]    focus:rounded-[8px]    focus:bg-[#262626]    focus:py-[14px]focus:px-[24px]focus:text-[#ffffff]focus:font-medium transition-all ease-in-out duration-150";
  const { page, setPage } = useCurrentPage();

  return (
    <nav className="navbar flex w-full px-[162px] text-white justify-between gap items-center pt-[22px] pb-[23px] bg-[#141414] ">
      <Link to="/" className="navbar-logo mr-[307px]">
        <img src={Logo} alt="Logo" className="logo-img cursor-pointer" />
      </Link>
      <div className="nav-pages text-white flex px-[40px] py-[10px] gap-[30px]  rounded-[12px] border-[#1F1F1F] border-4 bg-[#0D0C0C] items-center">
        <Link
          to="/"
          onClick={() => setPage("home")}
          className={page === "home" ? defClassName : className}
        >
          Home
        </Link>
        <Link
          to="/ms"
          onClick={() => setPage("ms")}
          className={page === "ms" ? defClassName : className}
        >
          Movies & Shows
        </Link>
        <Link
          to="/support"
          onClick={() => setPage("support")}
          className={page === "support" ? defClassName : className}
        >
          Support
        </Link>
        <Link
          to="/sub"
          onClick={() => setPage("sub")}
          className={page === "sub" ? defClassName : className}
        >
          Subscriptions
        </Link>
      </div>
      <div className="navbar-activities flex gap-[30px] ml-[307px]">
        <img
          src={Search}
          alt="Search"
          className="activities-search w-[34px] h-[34px] cursor-pointer"
        />
        <img
          src={Notification}
          alt="Notifications"
          className="activities-notifications w-[34px] h-[34px] cursor-pointer"
        />
      </div>
    </nav>
  );
}
