import React from "react";
import "./SidebarOption.css";

function SidebarOption({ title, Icon }) {
  //passing in props Icon is a component we passing in
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {/* if theres an Icon && then render <Icon/> */}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
      {/* Icon ? If we have icon show <h4> title : otherwise show <p> title */}
    </div>
  );
}

export default SidebarOption;
