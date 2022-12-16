import Sytles from "./sidebar.module.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className={Sytles.sidebar}>
      <div className={Sytles.top}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className={Sytles.logo}>Nitesh Sindhu</span>
        </Link>
      </div>
      <hr />
      <div className={Sytles.center}>
        <ul>
          <p className={Sytles.title}>MAIN</p>
          <li>
            <DashboardIcon className={Sytles.icon} />
            <span>Dashboard</span>
          </li>
          <p className={Sytles.title}>LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className={Sytles.icon} />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className={Sytles.icon} />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <CreditCardIcon className={Sytles.icon} />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className={Sytles.icon} />
            <span>Delivery</span>
          </li>
          <p className={Sytles.title}>USEFUL</p>
          <li>
            <InsertChartIcon className={Sytles.icon} />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className={Sytles.icon} />
            <span>Notifications</span>
          </li>
          <p className={Sytles.title}>SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className={Sytles.icon} />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className={Sytles.icon} />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className={Sytles.icon} />
            <span>Settings</span>
          </li>
          <p className={Sytles.title}>USER</p>
          <li>
            <AccountCircleOutlinedIcon className={Sytles.icon} />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className={Sytles.icon} />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className={Sytles.bottom}>
        <div
          className={Sytles.colorOption}
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className={Sytles.colorOption}
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
