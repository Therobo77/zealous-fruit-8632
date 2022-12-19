import Styles from "./datatable.module.css";
import { DataGrid } from "@mui/x-data-grid";
import { productsColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

const ProductDatatable = () => {
  const [data, setData] = useState([]);
  // const userCollectiontionRef = collection(db, "products");

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "products"),
      (snapshot) => {
        let list = [];
        snapshot.forEach((doc) => list.push({ id: doc.id, ...doc.data() }));
        setData(list);
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
      await deleteDoc(doc(db, "products", id));
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
            <Link to="/products/test" style={{ textDecoration: "none" }}>
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
        Add New Product
        <Link to="newproduct" className={Styles.link}>
          Add New
        </Link>
      </div>
      <DataGrid
        className={Styles.datagrid}
        rows={data}
        columns={productsColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default ProductDatatable;
