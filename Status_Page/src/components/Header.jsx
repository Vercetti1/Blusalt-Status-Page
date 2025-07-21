import logoImg1 from "../assets/icons/blusalt-logo.webp";
import logoImg2 from "../assets/icons/icons8-calendar-50.png";
import logoImg3 from "../assets/icons/icons8-search-30.png";
import logoImg4 from '../assets/icons/icons8-checkmark-24.png';
import logoImg5 from '../assets/icons/icons8-warning-50.png';
import logoImg6 from '../assets/icons/icons8-warning-50 (1).png';

function Header() {
  return (
    <>
      <div className="cont-1">
        <img className="blu-logo" src={logoImg1} alt="" />
        <div className="search-wrapper">
          <img className="search-icon" src={logoImg3} alt="" />
          <input className="search-bar" type="search" placeholder="Search" />
        </div>
        <img className="calendar" src={logoImg2} alt="" />
      </div>

      <div className="cont-2">
        <div className="box box-1">
          <img className="info-icons" src={logoImg4} alt="" />
          <div>All Systems Operational</div>
        </div>
        <div className="box box-2">
          <img className="info-icons" src={logoImg5} alt="" />
          <div>Issues Detected</div>
        </div>
        <div className="box box-3">
          <img className="info-icons" src={logoImg6} alt="" />
          <div>Complete Downtime</div>
        </div>
      </div>
    </>
  );
}

export default Header;
