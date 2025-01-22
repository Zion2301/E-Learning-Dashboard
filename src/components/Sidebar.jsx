import "./Sidebar.css";
import logo from "../assets/real-logo.png"
import { LuLayoutDashboard } from "react-icons/lu";
const Sidebar = () => {
  return (
    <>
      <div className="toplogodiv">
        <img src={logo} alt="" className="logo" />
         <h2>Estudy</h2>
         <p className="smallertext">Learn from home</p>
      </div>

      <div className="sidebar-links">
        <div className="each-link"><a href="" className="each"> <LuLayoutDashboard className="icon"/> Dashboard</a></div>
      </div>
    </>
  )
}

export default Sidebar