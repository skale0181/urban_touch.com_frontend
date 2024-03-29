import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartData, removeCartItem } from "../Redux/Cart/action";
import "./Cart.css";

export const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [coupen, setCoupen] = useState("");
  const [coupen_amount, setCoupen_amount] = useState(0);

const applycoupan=()=>{
  if(coupen_amount>0){
     alert("coupen already applied")
  }
  else if(coupen==="SK0181" || coupen==="SK2405"){
    alert("coupen applied")
    setCoupen_amount(35)
  }
  else if(coupen==="SK0182" || coupen==="SK2406"){
    alert("coupen applied")
    setCoupen_amount(50)
  }
  else{
    alert("invalid coupen")
  }
}
  const { token, name, userId } = useSelector((state) => state.login);
  const { data, total, loading } = useSelector((store) => store.cart);
  
  useEffect(() => {
    dispatch(getCartData(userId));
  }, []);
  

  const handleremove = (id) => {
    dispatch(removeCartItem(id,userId));
    // dispatch(getCartData(userId))
  };
  // console.log(data)

  let d_charge;
  if (total > 600 || total == 0) d_charge = 0;
  else d_charge = 60;

  const gst = (total * 12) / 100;

  const handlecontinue = () => {
    if (!token){
      alert("Please Login First")
      navigate("/login");
    } 
    else if(data.length==0){
      alert("No Item in Cart")
    }
    else{
      navigate("/checkout");
    } 
  };

  return (
    <div>
      <h2>Cart</h2>
      {(loading && <img src="https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif" className="loading_cart"/>) ||
        (!data[0] && (
          <img
            src="https://cdni.iconscout.com/illustration/free/thumb/empty-cart-4085814-3385483.png"
            className="empty_cart"
          ></img>
        ))}
      <div className="main_cart_div">
        {data[0] && (
          <table className="th">
            <thead className="tableh">
              <tr>
                <th className="ph1 pro">image</th>
                <th className="ph2 pro">name</th>
                <th className="ph4 pro">Quantity</th>
                <th className="ph3 pro">total</th>
                <th className="ph6 pro ">Remove</th>
              </tr>
            </thead>
            <tbody className="tableb">
              {data.map((el) => {
                return (
                  <tr key={el._id}>
                    <td className="pro">
                      <img
                        className="img_item_cart"
                        src={el.image1}
                        onClick={() => {
                          navigate(`/product/${el.item_id}`);
                        }}
                      />
                    </td>
                    <td className=" pro">{el.name}</td>
                    <td className="pro3 pro"> {el.number_of_items}</td>
                    <td className="pro2 pro">₹{el.price}/.</td>
                    <td className="pro ">
                      <button
                        className="remove_item"
                        onClick={() => handleremove(el._id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        <div>
          <div className="location" id="loc">
            <div className="summary">
              <h3>Order summary</h3>
            </div>
            <div className="main1">
              <div id="stotal">Cart Sub Total:</div>
              <div id="tamount" className="amount">
                ₹{total.toFixed(2)}
              </div>
            </div>
            <div className="main1">
              <div id="stotal">Estimated Delivery Charges: </div>
              <div className="amount" id="edcAmount">
                {total > 600 || total == 0 ? "FREE" : "+ ₹60.00"}
              </div>
            </div>
            <div className="main1">
              <div id="stotal">GST 12% </div>
              <div className="amount" id="gstAmount">
                 {gst % 1 == 0 ?"₹"+ gst + ".00" :"+ ₹"+ gst.toFixed(2)}
              </div>
            </div>
            {coupen_amount>0 && <div className="main1">
              <div id="stotal">Aplied Coupen</div>
              <div className="amount" id="gstAmount">
               - ₹{coupen_amount}
              </div>
            </div>}
            <div className="main1">
              <div id="stotal">Total Cart Amount:</div>
              <div className="amount" id="tcAmount">
                ₹{total - coupen_amount + d_charge + (total / 100) * 12}{total?null:".00"}
              </div>
            </div>
            <div className="main">
              <div id="stotal"></div>
              <div className="amount" id="tcAmount">
                <button className="checkout_btn" onClick={handlecontinue}>
                  PLACE ORDER
                </button>
              </div>
            </div>
          </div>
          <div id="front">
            <div className="box"></div>
            <div className="box2">
              <h4>Use your voucher code</h4>
              <p>Only one coupon code can be used per order at this time.</p>
              <input type="text" onChange={(e)=>setCoupen(e.target.value)} id="coupen" />
              <button id="apply" onClick={()=>applycoupan()} className="clickn_PROMO">
                APPLY
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
