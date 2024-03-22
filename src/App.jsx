import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Main from "./Components/Main/Main";
import Nav from "./Components/Nav/Nav";
import Ourrecipes from "./Components/OurRecipes/Ourrecipes";

function App() {
  const [items, setItems] = useState([]);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./ingredients.json")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  

  const handleCart = (p) => {
    // console.log(p);
    const isExist = cart.find(item => item.recipe_id === p.recipe_id);

    if(!isExist){
      setCart([...cart,p]);
    }
    else {
      alert("Already added")
    }
    
  };
  console.log(cart);

  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Ourrecipes></Ourrecipes>

      <div className="main-container flex justify-between mt-12 p-4">
        <div className="cards-container cards p-2 lg:grid grid-cols-2 gap-6 w-2/3">
          {items.map((item) => (
            <Main
              handleCart={handleCart}
              key={item.recipe_id}
              item={item}
            ></Main>
          ))}
        </div>

        <div className="cart cart-container center">
          <div>
            <h1 className="text-2xl text-center mb-4">Want to cook 01</h1>
          </div>
<hr />
          <div className="cart-title flex justify-around mr-20 text-xl">
            <h3>Name</h3>
            <h3>Time</h3>
            <h3>Calories</h3>
          </div>

        
          <div className="cart-info p-2">
            {cart.map((item,index) => (
              <div className="div flex justify-between mt-6 items-center">
                <p className="p-2">{index+1}.</p>
                <h3>{item.recipe_name}</h3>
                <h3>{item.preparing_time}</h3>
                <h3>{item.calories}</h3>
                <div>
                <button className="cook btn primary">Preparing</button>
                </div>
              </div>

              
            ))}
          </div>
          <div>
            <h1 className="text-2xl text-center mb-4 mt-6">Currently Cooking 02</h1>
            <hr />
          </div>

          <div className="cart-title flex justify-around mr-20 text-xl">
            <h3>Name</h3>
            <h3>Time</h3>
            <h3>Calories</h3>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
