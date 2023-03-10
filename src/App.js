import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import api from "./api/api";

function App() {
  const [data, setData] = useState(api);
  const [collection,setCollection] = useState([])
  const [warning,setWarning] = useState(false)

  const handleSubmit= (item) => {
    let ispresent = false;
    collection.forEach( (product) => {
      if( item.id === product.id){
         ispresent = true;
      }
    })
    if(ispresent){
       setWarning(true)
      setTimeout( () => {
        setWarning(false)
      },2000)
      return ;
    }
    setCollection([...collection,item])
  }


  const handleChange = (item,d) => {
    let ind = -1;
    collection.forEach( (data,index) => {
      if(data.id === item.id)
      ind = index;
    });
    const tempArr = collection;
    tempArr[ind].amount += d;
    if(tempArr[ind].amount === 0)
    tempArr[ind].amount = 1;
    setCollection([...tempArr])
    // console.log(item,d)
  }
  return (
    <Router>
      <div className="App">
        <Navbar size={collection.length} />
        <Routes>
          <Route path="/" element={<Products data={data} handleSubmit={handleSubmit} />} />
          <Route path="/cart" element={<Cart collection={collection} setCollection={setCollection} handleChange={handleChange} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
