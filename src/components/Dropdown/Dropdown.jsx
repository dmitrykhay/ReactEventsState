import "./Dropdown.css";
import { useState } from "react";
import { DropdownList } from "./DropdownList";

export const Dropdown = () => {
  const [open, setOpen] = useState("dropdown-wrapper");

  const handleClick = () => {
    if (open === "dropdown-wrapper open") {
      setOpen("dropdown-wrapper")
    } else {
      setOpen("dropdown-wrapper open")
    }
  }

  return (
    <div className="container">
      <div data-id="wrapper" className={open}>
        <button data-id="toggle" className="btn" onClick={handleClick}>
          <span>Account Settings</span>
          <i className="material-icons">public</i>
        </button>
        <DropdownList />
      </div>
    </div>
  )
}
