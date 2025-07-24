import logoImg1 from "../assets/icons/blusalt-logo.webp";
import logoImg2 from "../assets/icons/icons8-calendar-50.png";
import logoImg2b from '../assets/icons/icons8-menu-50.png';
import logoImg3 from "../assets/icons/icons8-search-30.png";
import { useNavigate, useLocation } from "react-router-dom";


function Header() {
    const navigate = useNavigate();
  const location = useLocation();

  const handleCalendarClick = () => {
    if (location.pathname === "/calendar") {
      navigate(-1);
    } else {
      navigate("/calendar");
    }
  };

    const calendarIcon = location.pathname === "/calendar" ? logoImg2b : logoImg2;


  return (
    <>
      <div className="cont-1">
        <img className="blu-logo" src={logoImg1} alt="" />
        <div className="search-wrapper">
          <img className="search-icon" src={logoImg3} alt="" />
          <input className="search-bar" type="search" placeholder="Search" />
        </div>
        
          <img className="calendar" src={calendarIcon} alt="" onClick={handleCalendarClick} />
      </div>
    </>
  );
}

export default Header;
