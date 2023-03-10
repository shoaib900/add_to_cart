import React from 'react'
import style from "./products.module.css";

const Products = ({data,handleSubmit}) => {
  
  return (
    <div className={style.blocks}>
      <div style={{left:0}}>
        <h1> Shoes - Products</h1>
      </div>
        <div className={style.items}>
          {
            data.map( (item,index) =>{
              return(
                <div key={index} className={style.card}>
                <h2>{item.title}</h2>
                <img src={item.img} alt="picture" style={{width:"99%",borderRadius:"5px"}} />
                <p>{item.price} $</p>
                <button className={style.btn} onClick={() => handleSubmit(item)}>add to cart</button>
                </div>
              )
            })
          }
        </div>
      
    </div>
  )
}

export default Products
