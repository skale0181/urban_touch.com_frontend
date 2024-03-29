import React, { useEffect, useState } from "react";
import "./Mens.css";
import { useSelector, useDispatch } from "react-redux";
//------material dependency---------------//
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { useNavigate } from "react-router-dom";
import { getwomens, getWomensData, getWomensFilterData } from "../../Redux/Womens/action";

export const Womens = () => {
  const [data, setData] = useState([]);
 
  

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const products = useSelector((store) => store.womens.data);
  
  const {loading, error} = useSelector((store) => store.womens)
 

  useEffect(() => {
    dispatch(getWomensData());
  }, []);

  // console.log(products)
  // ------------sorting and filter functionality-----------------//
  const handleChangeprice = (val) => {
    if (val === 1) {
      const x = products.sort((a, b) => {
        return b.price - a.price;
      });
      setData([...x]); // this is to update the state
      dispatch(getwomens(x));
    } else if (val === 2) {
      const x = products.sort((a, b) => {
        return a.price - b.price;
      });
      setData([...x]);
      // dispatch(getmens(x))
    }
  };


  const handleChangename = (val) => {
    if (val === "ase") {
      const x = products.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      setData([...x]);
    } else if (val === "des") {
      const x = products.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
      setData([...x]);
    }
  };

  const handlefilter = (val) => {
    if (val === 1) {
      const x = products.filter((item) => {
        return item.price <= 100;
      });
      dispatch(getWomensFilterData(1));
    } else if (val === 2) {
      const x = products.filter((item) => {
        return item.price > 100 && item.price <= 300;
      });
      dispatch(getWomensFilterData(2));
    } else if (val === 3) {
      const x = products.filter((item) => {
        return item.price >= 300;
      });
      dispatch(getWomensFilterData(3));
    }else if (val === 4) {
      const x = products.filter((item) => {
        return item.price >= 300;
      });
      dispatch(getWomensFilterData(4));
    }
  };

  return (
    <div>
       <div style={{ width: "100%", height: "250px" }} className='upper_img_womens'>
        <h1>Women's Apparels</h1>
      </div>
      <div className="all_item">
        {/* sorting and filter functionality */}
        <div className="sortdiv">
          <div className="schild">
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Sort By Price
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={price}
                  label="Age"
                  onChange={(event) => handleChangeprice(event.target.value)}
                >
                  <MenuItem value={1}>High to low</MenuItem>
                  <MenuItem value={2}>Low to high</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>

          <div className="schild">
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Sort By Name
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  onChange={(e) => handleChangename(e.target.value)}
                >
                  <MenuItem value={"ase"}>Asending (A-Z)</MenuItem>
                  <MenuItem value={"des"}>Desending (Z-A)</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div className="schild">
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  filter By Price
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  onChange={(e) => handlefilter(e.target.value)}
                >
                  <MenuItem value={1}>Below 100</MenuItem>
                  <MenuItem value={2}>Between 100-300 </MenuItem>
                  <MenuItem value={3}>Between 300-500</MenuItem>
                  <MenuItem value={4}>Abow 500</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>
        {products.map((ele, index) => {
          let temp = ele.image1;
          return (
            <div
              key={ele._id}
              className="individual_item"
              // onMouseOver={
              //   temp == ele.image2 ? (temp = ele.image1) : temp.image2
              // }
              onClick={() => {
                navigate(`/product/${ele._id}`);
              }
              }
            >
              <img src={temp} alt="" className="img_man_data" />
              <span style={{fontSize:"13px", fontWeight:"bold"}}>{ele.name}</span><br />
              <span style={{fontSize:"12px", fontWeight:"bold"}}>₹{ele.price}</span>
            </div>
          );
        })}
      </div>
      {loading && <h3 style={{margin:"20px"}}>Loadding........</h3> || error && <h3 style={{margin:"20px"}}>Something went wrong......</h3>}
    </div>
  );
}
