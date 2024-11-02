import React from 'react'

const Quantity = ({quantity,id,changeQuantity}) => {
  return (
    <div style={{display:'flex',justifyContent:'space-between'}}>
        <button onClick={()=>changeQuantity(id,-1)}>-</button>
        <p>{quantity}</p>
        <button onClick={()=>changeQuantity(id,+1)}>+</button>
      
    </div>
  )
}

export default Quantity
