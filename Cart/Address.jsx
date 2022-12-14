import React from 'react';
import { Link } from 'react-router-dom';
import style from "./Address.css"

function Address(props) {
    return (
        <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <div className="contadd">
    <h1 className="addh1">Add Address</h1>
    <div className="griddiv">
        <div className="area1">
         <p className="addp">Name*</p>
         <input type="text" className="addinput"/> 
        </div>
        <div className="area2">
            <p className="addp">Address*</p>
         <input type="text" className="addinput"  placeholder="(House/Flat No., Building, Street, Area/Locality)"/> 
        </div>
        <div className="area3">
            <p className="addp">Phone*</p>
         <input type="phone" className="addinput1"/> 
        </div>
        <div className="area4">
            <p className="addp1">Alternate Number</p>
         <input type="phone" className="addinput2" /> 
        </div>
        <div className="area5">
            <p className="addp">Pincode*</p>
         <input type="text" className="addinput1"/> 
        </div>
        <div className="area6">
            <p className="addp1">Landmark</p>
         <input type="text" className="addinput2" /> 
        </div>
    </div>
   <Link to="/payment"> <button className="addbtn">SAVE</button> </Link>
</div>
      </div>
    </div>
    );
}

export default Address;