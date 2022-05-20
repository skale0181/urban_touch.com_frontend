import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import "./Checkout.css"

export const Checkout = () => {
  const navigate = useNavigate()
  const {cart} = useSelector((store) => store.cart)

  const handlecontinue = ()=>{
    navigate("/payment")
  }
  return (
    <div>
        <h1>Checkout</h1>
        <div className='main_checkout'>
          <form onSubmit={handlecontinue}>
          <div className='form_div_1st'>
                <div className='form_div'>
                    <h3>express checkout</h3>
                  <div className='direct_pay'>
                    <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9PdfjuRPQvPUv-fzMLCnxlfPIFdTANOA2s1YkYjVNgz5lFEUcJfhaQlLWH1SAtYmRaJs&usqp=CAU" alt="" /></div>
                    <div><img src="https://www.mobigyaan.com/wp-content/uploads/2017/03/Paytm-logo.jpg" alt="" /></div>
                    <div><img src="data:image/png;base64,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" alt="" /></div>
                   </div>
                   <hr />
                   <div className='contact_details'>
                      <h3>Contact Information</h3>
                      <input type="email" placeholder='Enter your Email address' className='email' required/>
                      <br />
                      <input type="checkbox" name="" id="" />
                      <span> Email me with news and offer</span>
                      <hr />
                      <h3>Shipping Address</h3>
                      <div className='username_1st_2nd'>
                        <input type="text"placeholder='First name' required/>
                        <input type="text"placeholder='Last name' required/>
                      </div>
                      <input type="text" className='email' placeholder='company (optional)' /><br />
                      <input type="text" className='email' placeholder='Address' required/>
                      <div className='username_contry_pin'>
                        <input type="text"placeholder='Country' required/>
                        <input type="text"placeholder='State' required/>
                        <input type="number"placeholder='Passcode' required maxLength={6}/>
                      </div>
                      <input type="number" className='email' placeholder='Mobile number' required maxLength={10}/>
                   </div>
                   <div className='move_forword_div'>
                     <div className='goback_cart' onClick={()=>navigate("/cart")}>{"<- Retrun to cart"}</div>
                     <div className='goback_cart'><button  type="submit">Cotinue to Shipping</button></div>
                   </div>
                </div>
                </div>
                </form>
        </div>
    </div>
  )
}
