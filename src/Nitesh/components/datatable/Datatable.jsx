import Styles from "./datatable.module.css";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";

const Datatable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "users"),
      (snapshot) => {
        let list = [];
        snapshot.forEach((doc) => list.push({ id: doc.id, ...doc.data() }));
        setData(list);
        // console.log(list);
      },
      (err) => {
        console.log(err);
      }
    );
    return () => {
      unsub();
    };
  }, []);
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
    } catch (err) {
      console.log(err);
    }
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className={Styles.cellAction}>
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className={Styles.viewButton}>View</div>
            </Link>
            <div
              className={Styles.deleteButton}
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className={Styles.datatable}>
      <div className={Styles.datatableTitle}>
        Add New User
        <Link to="/users/new" className={Styles.link}>
          Add New
        </Link>
      </div>
      <DataGrid
        className={Styles.datagrid}
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
