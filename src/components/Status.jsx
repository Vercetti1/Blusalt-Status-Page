import { useState, useEffect } from "react";
import logoImg4 from "../assets/icons/icons8-checkmark-24.png";
import logoImg5 from "../assets/icons/icons8-warning-50.png";
import logoImg6 from "../assets/icons/icons8-warning-50 (1).png";
import logoImg7 from "../assets/icons/icons8-sort-down-30.png";
import logoImg8 from "../assets/icons/icons8-plus-50.png";


function Status() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000 * 60);

    return () => clearInterval(interval);
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const getOrdinal = (d) => {
    const s = ["th", "st", "nd", "rd"];
    const v = d % 100;
    return d + (s[(v - 20) % 10] || s[v] || s[0]);
  };

  const day = getOrdinal(currentDate.getDate());
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();
  const formattedDate = `${day} ${month} ${year}`;

  const serviceDetails = [
    { name: "NIN Service", date: currentDate.toLocaleString() },
    { name: "Data Service", date: currentDate.toLocaleString() },
    { name: "API Management", date: currentDate.toLocaleString() },
  ];

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
          {serviceDetails.map((service, index) => (
            <div className="dropdown-item" key={index}>
              <div className="issues-detected-menu">
                <div>{formattedDate} <span className="status-indi"></span>{service.name}</div>
                <div className="sub-item"><img className="sub-item-icon" src={logoImg8} alt="" /></div>
                </div>
            </div>
          ))}
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
