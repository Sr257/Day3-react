import React from 'react'
import Label from './label'
import Quantity from './quantity'


const CartItem = ({id,label,price,quantity,changeQuantity}) => {
  return (
    <div style={{display:'flex',justifyContent:'space-around',gap:'10px'}}>
      <Label label={label} price={price}/>
      <Quantity quantity={quantity} changeQuantity={changeQuantity} id={id}/>
    </div>
  )
}

export default CartItem 
