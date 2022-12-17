import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Styles from "./home.module.css";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Home = () => {
  return (
    <div className={Styles.home}>
      <Sidebar />
      <div className={Styles.homeContainer}>
        <Navbar />
        <div className={Styles.widgets}>
          <Widget type="user" />
          <Widget type="products"/>
          <Widget type="order" />
          <Widget type="earning"/>
        </div>
        <div className={Styles.charts}>
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className={Styles.listContainer}>
          <div className={Styles.listTitle}>Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
