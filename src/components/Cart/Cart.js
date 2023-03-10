import React, { useEffect, useState } from "react";
import style from "./card.module.css";

const Cart = ({ collection, setCollection, handleChange }) => {
  const [price, setPrice] = useState(0);

  const onRemove = (id) => {
    let arr = collection.filter((product) => product.id !== id);
    setCollection(arr);
  };

  const handlePrice = () => {
    let total = 0;
    collection.map((item) => {
      total += item.amount * item.price;
    });
    setPrice(total);
    console.log(price);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <>
      <div className={style.box}>
        <h1>Cart page</h1>

        <div className={style.card}>
          {collection.map((item ,index) => {
            return (
              <div className={style.list} key={item.id}>
                <p>{index +1}</p>
                <h1>{item.title}</h1>
                <p>
                  <img src={item.img} alt="" className={style.img} />
                </p>
                <p>
                  <button
                    className={style.btn}
                    onClick={() => handleChange(item, +1)}
                  >
                    +
                  </button>
                  <button className={style.btnvalue}>{item.amount}</button>
                  <button
                    className={style.btn}
                    onClick={() => handleChange(item, -1)}
                  >
                    -
                  </button>
                </p>
                <p>{item.amount * item.price} $</p>
                <button
                  className={style.removeBtn}
                  onClick={() => onRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
        <div className={style.totalPrice}>
          <h2>total price is here :</h2> <p> <b>{price}</b> </p>
        </div>
      </div>
    </>
  );
};

export default Cart;
