import React, { Fragment } from "react";
import "./cart.css"
// import data from "./db.json"
import { useState, useEffect} from "react";
import Address from "./Address";


function Cart(props) {

    const [data, setData] = useState([]);
    
    const pstyle={
    fontFamily:"Segoe UI, Tahoma, Geneva,Verdana,sans-serif",
    marginRight:"80%",
    fontSize:"20px",
    paddingTop:"1%",
    fontWeight:"bold",
    letterSpacing:"2px"
}


    useEffect(() => {
      const getData = async () => {
        let res = await fetch(`https://saphora-nnow.herokuapp.com/click`, {
          method: "GET",
          headers: {
            "contnet-type": "application/json",
          },
        });
        let data = await res.json();
        setData(data);
      };
      getData();
    }, []);


const [isOpen, setIsOpen]=useState(false)
const togglePopup = () => {
    setIsOpen(!isOpen);
  }
const [qty,setQty]=useState(1)

// console.log(data);




var total = data.reduce((acc, el) => {
    return acc + Number((el.price*el.Qty));
  }, 0);

// var setQtyF = (e,id) => {
//     setQty(e.target.value);
//     console.log(e.target.value,id)
// }
const setQtyF = async (e,id) => {
        
     let res = await fetch(`https://saphora-nnow.herokuapp.com/click/${id}`, {
        method: "PATCH",
       headers: { "content-type": "application/json" },
      body: JSON.stringify({
          "Qty":e.target.value
    }),
    });
    let Newdata = await res.json();
      setData(Newdata);
      window.location.reload();
  };

    const deleteItem = async (id) => {
      let res = await fetch(`https://saphora-nnow.herokuapp.com/click/${id}`, {
        method: "DELETE",
      });
      let Newdata = await res.json();
      setData(Newdata);
      window.location.reload();
    };


    return (
        <Fragment>
            <div className="main111">
           <img className="logo" src="https://cdn07.nnnow.com/web-images/master/navtree_metaData/59b2657be4b0e6b6e16a9180/1548053082431/se.png" alt="Sephora logo" /> 
           <div className="bag">
               <p style={pstyle}>MY BAG({data.length})</p>
           </div>
           <div className="container">
        <div className="rightbox">
            {data.map((el)=>{
               return(
               <div key={el.id}>
                    <div className="mapdiv">
                        <div>
                    
                        <img src={el.image1} alt="" />
                        </div>
    
                        
                        <div>
                            <p style={{marginBottom:"-15px"}}>{el.brand}</p><br></br>
                            <h4 style={{marginBottom:"-15px"}}>{el.title}</h4>
                            {/* <p style={{marginBottom:"-15px"}}>Color - {el.color}</p> */}<br></br>
                            <p style={{marginBottom:"-15px"}}>Size - {el.size}</p>
                        </div> 
                        <div style={{marginLeft:"100px",marginTop:"25px",display:"flex"}}><h3>Qty:</h3>  
                               <select style={{height:"50px",width:"40px",marginLeft:"10px"}} id="qty" value={qty} onChange={(e) =>setQtyF(e,el.id)}>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>
                        </div>
                        <div style={{marginLeft:"100px",marginTop:"25px"}}><h3>Rs. {el.price*el.Qty}</h3><div><button onClick={() => {deleteItem(el.id);}}>delete</button></div></div>
                    </div>
                </div>
               ) 
            })}
        </div>
        <div className="leftbox">
            <div className="promo">
                   
                <img src="https://static.nnnow.com/client/assets/images/promotions/icon_promo.png" alt=""/>
                <p>APPLY PROMO CODE</p>
               
               </div>
               <div> <input className="input1" type="text"/></div>
               <hr/>
            <div className="d1 ">
                
                <h1 className="overv">overview</h1>
            
            </div>
            <div className="subto"><p>Subtotal</p> <h4>Rs.  {total}</h4></div>
            
            <div className="disc"><p>Discount</p><p className="disc1">-Rs. 0</p></div>
            <div className="gst"><p>GST</p><p>RS.0</p></div>
            <div className="dilivery"><p>Delivery Charges</p><p>Rs.0</p></div>
            <hr/>
            <div className="dilivery"><p>Total</p><h3 className="tol">RS.{total}</h3></div>

            <input className="checkout" type="button" value="CHECKOUT" onClick={togglePopup} /> 
            <div style={{width:"80%"}}>
                <input type="button" value="SHOP MORE" className="input2"/>

                </div>
        </div>
    </div>
    {isOpen && <Address
    handleClose={togglePopup}
    />}





       </div>
        </Fragment>
    );
    
}

export default Cart;