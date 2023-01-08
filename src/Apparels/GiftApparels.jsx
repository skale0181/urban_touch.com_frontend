import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./MensApparel.css"
import { useNavigate } from 'react-router-dom'
import { GIFT_APPARELS_FRONT } from '../Api_helper/api_helper'

export const GiftApparels = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
      setLoading(true)
       axios.get(GIFT_APPARELS_FRONT)
         .then(res => {
              setProducts(res.data)
              setLoading(false)
              // console.log(res.data)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            }
        )
    }, [])

  return (
    <div>
        <h3>Gifts-Apparels</h3>
        <div style={{display:"flex", alignItems:'center',justifyContent:"space-around", flexWrap:"wrap",marginBottom:"20px" }}>
        {loading ? <div style={{margin:"30px"}}>Loading...</div> : null}
            {products.map((ele,index) => {
                let img = ele.image1
                return (
                    <div key={index}  className="div_div"  onClick={()=>navigate(`/product/${ele._id}`)}>
                        <img src={img} alt="" className='img_img'  />
                        <span style={{fontSize:"13px", fontWeight:"bold"}}>{ele.name}</span><br />
                        <span style={{fontSize:"12px", fontWeight:"bold"}}>₹{ele.price}</span>
                      </div>
                )
            })}

        </div>
              <button className='btn_chnage_page' onClick={()=>navigate("/gift-cards")}>View All</button>
    </div>
  )
}
