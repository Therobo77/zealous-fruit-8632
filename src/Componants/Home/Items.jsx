import React, { useRef, useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Styles from "./HomeCss/items.module.css";
import { loadData } from "../../Nitesh/utils/accessLocalStorage";

// const image_url =
//   "https://cdn09.nnnow.com/web-images/large/styles/NAG35MWAZB5/1603956012732/1.jpg";
// const image2_url =
//   "https://cdn12.nnnow.com/web-images/large/styles/NAG35MWAZB5/1603956012729/2.jpg";
// const brandname = "OLAPLEX";
// const productDescription = "N°4 Bond Maintenance Shampoo";
// const price = 6500;
let cart = loadData("cart") || [];
let whitelist = loadData("whitelist") || [];
export default function Items({ e }) {
  const { image_url, image2_url, brandname, productDescription, price } = e;
  const [hover, setHover] = useState(false);
  const ref = useRef(null);
  const hoverdiv = () => {
    ref.current.src = image2_url;
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
    ref.current.src = image_url;
  };
  const addtocart = () => {
  // cart.push()
  alert("Items adding in cart successfully")
}

  const addtowhitelist = () => {
    alert("Items adding in Favourite successfully")
  }
  return (
    <div id={Styles.main} onMouseOver={hoverdiv} onMouseOut={handleMouseOut}>
      <img id={Styles.image1} src={image_url} alt="" ref={ref} />
      <div className={`${hover ? Styles.Scrollup : Styles.hoveron}`}>
        <button>
          <HiOutlineShoppingBag size={40} color="white"></HiOutlineShoppingBag>
          <span id={Styles.textCSS} onClick={addtocart}>ADD TO CART</span>
        </button>

        <button>
          <MdFavoriteBorder size={40} color="white"></MdFavoriteBorder>
          <span id={Styles.textCSS} onClick={addtowhitelist}>FAVOURITE</span>
        </button>
      </div>

      <div style={{ width: "90%" }}>
        <span style={{ marginRight: "5px", paddingBottom: "5px" }}>
          <img
            width="20px"
            src="https://cdn02.nnnow.com/web-images/master/product_tags/cb6e9f96-922e-42cb-84ae-9337178f87fa/1554297283453/Sale.png"
            alt=""
          />
        </span>
        <span
          style={{
            color: "rgb(213, 0, 50)",
            fontWeight: "bold",
            fontSize: "12px",
          }}
        >
          OFFER
        </span>
        <div>
          <span className={Styles.tag1} style={{ padding: "5px 0px 0px 0px" }}>
            {brandname}
            <p style={{ fontWeight: "lighter" }}>{productDescription}</p>
            <span>Rs.{price}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
