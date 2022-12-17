import Styles from "./sidebar.module.css";
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
import { LogoutUser } from "../../Actions/allactions";

const Sidebar = () => {
  const { dispatch,darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? `${Styles.sidebar} ${Styles.dark}` : Styles.sidebar}>
      <div className={Styles.top}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className={Styles.logo}>Nitesh Sindhu</span>
        </Link>
      </div>
      <hr />
      <div className={Styles.center}>
        <ul>
          <p className={Styles.title}>MAIN</p>
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              <DashboardIcon className={Styles.icon} />
              <span>Dashboard</span>
            </Link>
          </li>
          <p className={Styles.title}>LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className={Styles.icon} />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className={Styles.icon} />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <CreditCardIcon className={Styles.icon} />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className={Styles.icon} />
            <span>Delivery</span>
          </li>
          <p className={Styles.title}>USEFUL</p>
          <li>
            <InsertChartIcon className={Styles.icon} />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className={Styles.icon} />
            <span>Notifications</span>
          </li>
          <p className={Styles.title}>SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className={Styles.icon} />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className={Styles.icon} />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className={Styles.icon} />
            <span>Settings</span>
          </li>
          <p className={Styles.title}>USER</p>
          <li>
            <AccountCircleOutlinedIcon className={Styles.icon} />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className={Styles.icon} />
            <span onClick={LogoutUser}>Logout</span>
          </li>
        </ul>
      </div>
      <div className={Styles.bottom}>
        <div
          className={Styles.colorOption}
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className={Styles.colorOption}
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
