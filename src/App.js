import './App.css';
import React, { useState } from "react";
//import Form from './Components/Form';
// 1%20100grams%20apple

function App() {
  var APP_ID = "cb858920";
  var APP_KEY = "23e79631876defaed65d9e35dd579c67";
  const [input, setInput] = useState("");
  var items = [];

  async function addFood(e) {
    e.preventDefault(); // prevents page from reloading  
    var url = "https://api.edamam.com/api/nutrition-data?app_id=" + APP_ID + "&app_key=" + APP_KEY + "&ingr=" + input;
    items = await fetch(url).then(res => res.json()); // await allows the fetch to complete before moving on to rest of code
    console.log(items.totalNutrients.ENERC_KCAL.quantity);
    console.log(items);
  }


  return (
    <div className="App">
      <header>
        <h1>Nutrition Tracker</h1>
      </header>

      <form className="search-form">
        <input type="text" className="food-input"  onChange={event => setInput(event.target.value)} />
        <button className="food-button" type="submit"  onClick={addFood} >
          <i class="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="foods" className="filter-food">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>

    </div>
  );

}

export default App;
