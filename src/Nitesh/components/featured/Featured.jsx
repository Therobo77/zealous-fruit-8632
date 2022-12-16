import Styles from "./featured.module.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className={Styles.featured}>
      <div className={Styles.top}>
        <h1 className={Styles.title}>Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className={Styles.bottom}>
        <div className={Styles.featuredChart}>
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className={Styles.title}>Total sales made today</p>
        <p className={Styles.amount}>$420</p>
        <p className={Styles.desc}>
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className={Styles.summary}>
          <div className={Styles.item}>
            <div className={Styles.itemTitle}>Target</div>
            <div className={`${Styles.itemResult}${Styles.negative}`}>
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className={Styles.resultAmount}>$12.4k</div>
            </div>
          </div>
          <div className={Styles.item}>
            <div className={Styles.itemTitle}>Last Week</div>
            <div className={`${Styles.itemResult} ${Styles.positive}`}>
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className={Styles.resultAmount}>$12.4k</div>
            </div>
          </div>
          <div className={Styles.item}>
            <div className={Styles.itemTitle}>Last Month</div>
            <div className={`${Styles.itemResult} ${Styles.positive}`}>
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className={Styles.resultAmount}>$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
