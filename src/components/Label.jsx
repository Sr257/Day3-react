import React from 'react'

const Label = ({label,price}) => {
  return (
    <div style={{display:'flex',justifyContent:'space-between',gap:'10px'}}>
        <p>{label}</p>
        <p>INR:{price}</p>
      
    </div>
  )
}

export default Label
