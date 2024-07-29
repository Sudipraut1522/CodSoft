import React from "react";
import "../Footer/Footer.css";

const Footer = ({ items }) => {
  console.log("items", items);
  const countCheckedItems = items.filter((item) => item.checked).length;
  const ReamingWork = items.length - countCheckedItems;
  return (
    <div className="Footer">
      <div>
        <h1>Total Number Of Work:{items?.length}</h1>
        <div className="workDone">
          <h3>{`Work Done:${countCheckedItems}`}</h3>
          <h3>{`Remaining Work:${ReamingWork}`}</h3>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
