// import Home from "../pages/home/Home";
// import List from "../pages/list/List";
// import Single from "../pages/single/Single";
import { Routes, Route } from "react-router-dom";
import Styles from "../style/dark.module.css";
import { useContext } from "react";
import { DarkModeContext } from "../context/darkModeContext";
import Homes from "../pages/home/Home";
function Admin() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? `${Styles.app1} ${Styles.dark}` : Styles.app1}>
      <Routes>
        {/* <Route path="/users">
          <Route index element={<List />} />
          <Route path=":userId" element={<Single />} />
        </Route> */}
        <Route path="admin/" />
        <Route index element={<Homes />} />
      </Routes>
    </div>
  );
}

export default Admin;
