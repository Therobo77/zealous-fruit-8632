import Styles from "./widget.module.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardCapslockIcon from "@mui/icons-material/KeyboardCapslock";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { useEffect, useState } from "react";
import { query, where, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const Widget = ({ type }) => {
  const [amount, setAmount] = useState(null);
  const [diff, setDiff] = useState(null);
  let data;

  //temporary
  // const amount = 100;
  // const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        query: "users",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlinedIcon
            className={Styles.icon}
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        query: "orders",
        link: "View all orders",
        icon: (
          <ShoppingCartOutlinedIcon
            className={Styles.icon}
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        query: "earning",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className={Styles.icon}
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "products":
      data = {
        title: "PRODUTS",
        query: "products",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className={Styles.icon}
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  useEffect(() => {
    const fectchData = async () => {
      const today = new Date();
      const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
      const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));
      const lastMonthQuery = query(
        collection(db, data.query),
        where("timeStamp", "<=", today),
        where("timeStamp", ">", lastMonth)
      );
      const prevMonthQuery = query(
        collection(db, data.query),
        where("timeStamp", "<=", lastMonth),
        where("timeStamp", ">", prevMonth)
      );
      const LastMonthData = await getDocs(lastMonthQuery);
      const PrevMonthData = await getDocs(prevMonthQuery);
      setAmount(LastMonthData.docs.length);
      let valuetotal =
        ((LastMonthData.docs.length - PrevMonthData.docs.length) /
          PrevMonthData.docs.length) *
        100;
      if (valuetotal === Infinity) valuetotal = 0;
      setDiff(valuetotal);
    };
    fectchData();
  }, []);
  return (
    <div className={Styles.widget}>
      <div className={Styles.left}>
        <span className={Styles.title}>{data.title}</span>
        <span className={Styles.counter}>
          {data.isMoney && "$"} {amount}
        </span>
        <span className={Styles.link}>{data.link}</span>
      </div>
      <div className={Styles.right}>
        <div
          className={`${Styles.percentage} ${
            diff < 0 ? Styles.negative : Styles.positive
          }`}
        >
          {diff < 0 ? (
            <KeyboardArrowDownIcon />
          ) : diff === 0 ? (
            <KeyboardCapslockIcon />
          ) : (
            <KeyboardArrowUpIcon />
          )}
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
