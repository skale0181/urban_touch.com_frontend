import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartData, removeCartItem } from "../Redux/Cart/action";
import "./Cart.css";

export const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token, name, userId } = useSelector((state) => state.login);

  useEffect(() => {
    dispatch(getCartData(userId));
  }, []);


  const handleremove = (id) => {
    dispatch(removeCartItem(id));
    // dispatch(getCartData(userId))
  };
  const { data, total, loading } = useSelector((store) => store.cart);
  console.log(data)

  let d_charge;
  if (total > 600 || total == 0) d_charge = 0;
  else d_charge = 60;

  const gst = (total * 12) / 100;

  const handlecontinue = () => {
    if (token) navigate("/checkout");
    else{
      alert("Please Login First")
      navigate("/login");
    } 
  };

  return (
    <div>
      <h2>Cart</h2>
      {(loading && <h4>loading....</h4>) ||
        (!data[0] && (
          <img
            src="https://sethisbakery.com/assets/website/images/empty-cart.png"
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
                          navigate(`/product/${el._id}`);
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
              <p>Order summary</p>
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
                {total > 600 || total == 0 ? "₹00.00" : "₹60.00"}
              </div>
            </div>
            <div className="main1">
              <div id="stotal">GST 12% </div>
              <div className="amount" id="gstAmount">
                ₹{gst % 1 == 0 ? gst + ".00" : gst.toFixed(2)}
              </div>
            </div>
            <div className="main1">
              <div id="stotal">Total Cart Amount:</div>
              <div className="amount" id="tcAmount">
                ₹{total + d_charge + (total / 100) * 12}.00
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
              <input type="text" id="coupen" />
              <button id="apply" className="clickn_PROMO">
                APPLY
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
