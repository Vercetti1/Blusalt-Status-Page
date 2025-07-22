import { useState } from "react";
import logoImg4 from "../assets/icons/icons8-checkmark-24.png";
import logoImg5 from "../assets/icons/icons8-warning-50.png";
import logoImg6 from "../assets/icons/icons8-warning-50 (1).png";
import logoImg7 from '../assets/icons/icons8-sort-down-30.png'

function Status() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="cont-2">
      <div className="box box-1">
        <img className="info-icons" src={logoImg4} alt="" />
        <div>All Systems Operational</div>
      </div>

      <div className="box box-2-wrapper">
        <div className="box box-2" onClick={toggleDropdown}>
          <div className="box-details">
            <img className="info-icons" src={logoImg5} alt="" />
            <div>Issues Detected</div>
          </div>
          <img className="drop-down" src={logoImg7} alt="" />
        </div>

        <div className={`dropdown-content ${showDropdown ? "show" : ""}`}>
          <div className="dropdown-item">NIN Service</div>
          <div className="dropdown-item">Data Service</div>
          <div className="dropdown-item">Saaaa Service</div>
        </div>
      </div>

      <div className="box box-3">
        <img className="info-icons" src={logoImg6} alt="" />
        <div>Complete Downtime</div>
      </div>
    </div>
  );
}

export default Status;
