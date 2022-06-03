import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCartData, updateCartItem } from "../../Redux/Cart/action";
import { getMensData } from "../../Redux/Mens/action";

import "./Product.css";

export const Product = () => {
  
  const { id } = useParams();
  const [aparel1, setAparel1] = useState([])
  const [aparel2, setAparel2] = useState([])
  const [aparel3, setAparel3] = useState([])
  const [aparel4, setAparel4] = useState([])
  useEffect(() => {
     axios.get(`https://urban-touch-0181.herokuapp.com/mennapparel`)
       .then(res => {
            setAparel1([...res.data])
            // console.log(res.data)
          })
          .catch(err => {
              console.log(err)
          }
      )
     axios.get(`https://urban-touch-0181.herokuapp.com/womennapparel`)
       .then(res => {
            setAparel2([...res.data])
            // console.log(res.data)
          })
          .catch(err => {
              console.log(err)
          }
      )
     axios.get(`https://urban-touch-0181.herokuapp.com/kidapparel`)
       .then(res => {
            setAparel3([...res.data])
            // console.log(res.data)
          })
          .catch(err => {
              console.log(err)
          }
      )
      axios.get(`https://urban-touch-0181.herokuapp.com/giftapparel`)  
      .then(res => {
        setAparel4([...res.data])
        // console.log(res.data)
      }
      )
      .catch(err => {
          console.log(err)
      }
  )
  }, [])

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [size, setSize] = useState("S");
  const [btn_color1, setBtnColor1] = useState("white");
  const [btn_color2, setBtnColor2] = useState("white");
  const [btn_color3, setBtnColor3] = useState("white");
  const [item_no, setItemNo] = useState(1);

  useEffect(() => {
    dispatch(getMensData());
    // dispatch(getCartData())
    // dispatch(getWomensData())
    // dispatch(getKidsData())
  }, []);

  const mens_item = useSelector((store) => store.mens.data);
  // console.log(mens_item)
  const womens_item = useSelector((store) => store.womens.data);
  const kids_item = useSelector((store) => store.kids.data);
  const gift_item = useSelector((store) => store.gift.data);
  const cart_item = useSelector((store) => store.cart.data);
  // console.log(cart_item);

  const mens_item_filter = mens_item.filter((item) => {
    return item._id == id;
  });
  const womens_item_filter = womens_item.filter((item) => {
    return item._id == id;
  });
  const kids_item_filter = kids_item.filter((item) => {
    return item._id == id;
  });
  const gift_item_filter = gift_item.filter((item) => {
    return item._id == id;
  });
  const cart_item_filter = cart_item.filter((item) => {
    return item._id == id;
  });
  const aparel1_item_filter = aparel1.filter((item)=>{
    return item._id == id;
  })
  const aparel2_item_filter = aparel2.filter((item)=>{
    return item._id == id;
  })
  const aparel3_item_filter = aparel3.filter((item)=>{
    return item._id == id;
  })
  const aparel4_item_filter = aparel4.filter((item)=>{
    return item._id == id;
  })

  
// console.log(mens_item_filter)
  let item;
  if (mens_item_filter[0]) item = mens_item_filter[0];
  else if (womens_item_filter[0]) item = womens_item_filter[0];
  else if (kids_item_filter[0]) item = kids_item_filter[0];
  else if (gift_item_filter[0]) item = gift_item_filter[0];
  else if (cart_item_filter[0]) item = cart_item_filter[0]; 
  else if (aparel1_item_filter[0]) item = aparel1_item_filter[0];
  else if (aparel2_item_filter[0]) item = aparel2_item_filter[0];
  else if (aparel3_item_filter[0]) item = aparel3_item_filter[0];
  else if (aparel4_item_filter[0]) item = aparel4_item_filter[0];


  const {token, name,userId} = useSelector(state=>state.login)
  // console.log(userId)
  
  // for checking item is already in cart or not
const [confirm, setConfirm] = useState(false)
const [change, setChange] = useState(0)
const [alredy, setAlredy] = useState({})
  useEffect(()=>{
    axios.get(`https://urban-touch-0181.herokuapp.com/cart/${id}`)
    .then(res=>{
      setConfirm(true)
      setAlredy(...res.data)
      // console.log(alredy)
      // console.log(change)
    })
    .catch(err=>{
      // console.log(err)
    })
  },[change])

  useEffect(()=>{
    setChange(change+1)
  },[])

  const addToCart = () => {
   
    const cartItem = {
      name:item.name,
      description: item,
      image1:item.image1,
      image2:item.image2,
      discount:item.discount,
      price: alredy.price+item.price*item_no,
      number_of_items: alredy.number_of_items + item_no,
      size: size,
      user_id:userId,
      item_id:id,
    }
    if(!token){
      alert("Please Login to add to cart")
      navigate("/login")
    }
  
  
    else if(confirm){
      dispatch(updateCartItem(cartItem,id))
      alert("Item updated to cart")
    }
    else{
    const payload = {
      name: item.name,
      description: item.description,
      image1:item.image1,
      image2:item.image2,
      discount:item.discount,
      price: item.price*item_no,
      number_of_items: item_no,
      size: size,
      user_id:userId,
      item_id:id,
    };
    // console.log(payload)
   
    axios
      .post("https://urban-touch-0181.herokuapp.com/cart", payload)
      .then((res) => {
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // navigate("/cart");
    alert("Item added to cart");
    }
  };

  return (
    <div className="main_cart_div">
     
      <div className="heading_cart"><h3>Product Details</h3></div>
      {!item && <h2>Loading...</h2>}
      {item && (
        <div className="product_details_div">
          <div className="product_details_img_div">
            <img src={item.image1} alt="product" />
          </div>
          <div className="product_details_info_div">
            <div className="product_details_info_div_title">
              <h1>{item.name}</h1>
              <span style={{ fontSize: "30px" }}>₹{item.price*item_no}</span>
              <br />
              <br />
              <br />
              <p>
                Pay in 4 interest-free installments of ₹18.00 with Googlepay
              </p>

              <span>SIZE |</span>
              <span> {size}</span>
              <br />
              <button
                className="size_btn"
                style={{ backgroundColor: btn_color1, color: "black" }}
                onClick={() => {
                  setSize("S");
                  {
                    btn_color1 == "white"
                      ? setBtnColor1("gray")
                      : setBtnColor1("white");
                  }
                  {
                    btn_color1 == "white"
                      ? setBtnColor2("white")
                      : setBtnColor1("white");
                  }
                  {
                    btn_color1 == "white"
                      ? setBtnColor3("white")
                      : setBtnColor1("white");
                  }
                }}
              >
                S
              </button>
              <button
                className="size_btn"
                style={{ backgroundColor: btn_color2, color: "black"  }}
                onClick={() => {
                  setSize("M");
                  {
                    btn_color2 == "white"
                      ? setBtnColor2("gray")
                      : setBtnColor2("white");
                  }
                  {
                    btn_color2 == "white"
                      ? setBtnColor1("white")
                      : setBtnColor2("white");
                  }
                  {
                    btn_color2 == "white"
                      ? setBtnColor3("white")
                      : setBtnColor2("white");
                  }
                }}
              >
                M
              </button>
              <button
                className="size_btn"
                style={{ backgroundColor: btn_color3, color: "black"  }}
                onClick={() => {
                  setSize("L");
                  {
                    btn_color3 == "white"
                      ? setBtnColor3("gray")
                      : setBtnColor3("white");
                  }
                  {
                    btn_color3 == "white"
                      ? setBtnColor1("white")
                      : setBtnColor3("white");
                  }
                  {
                    btn_color3 == "white"
                      ? setBtnColor2("white")
                      : setBtnColor3("white");
                  }
                 
                }}
              >
                L
              </button>
              <br />
              <br />

              <div className="item_inc_dec">
                <button
                  className="item__btn"
                  style={{ color: "black" }}
                  onClick={() =>
                    item_no >= 2 ? setItemNo((pre) => pre - 1) : setItemNo(1)
                  }
                >
                  -
                </button>
                <span>{item_no}</span>
                <button
                 style={{ color: "black" }}
                  className="item__btn"
                  onClick={() => setItemNo((pre) => pre + 1)}
                >
                  +
                </button>
              </div>
              <br />

              <button
                className="add_to_cart_btn"
                onClick={() => {
                  setChange(change+1)
                  addToCart();
                  // setConfirm(true)
                }}
              >
                ADD TO CART
              </button>

              <br />
              <br />
              <br />
              <hr />
              <span style={{ fontSize: "18px", fontWeight: "10px" }}>
                DESCRIPTION
              </span>
              <br />
              <br />
              <span style={{ fontSize: "15px" }}>{item.description}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
