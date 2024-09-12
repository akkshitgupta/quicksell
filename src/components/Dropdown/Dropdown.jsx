import { DownIcon } from "../../assets";
import "./Dropdown.css";

export default function ComponentName({ children }) {
  return (
    <button type="button" className="dropdown">
      {children}
      <img src={DownIcon} alt="Down Icon" />
    </button>
  );
}
