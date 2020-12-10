import './App.css';
import React, { useState } from "react";
import Form from './Components/Form';
import NutriFacts from './Components/NutriFacts';
// 1%20100grams%20apple       // git add -A

function App() {
  const [name, setName] = useState(""); 

  // these are states for nutrition facts
  const [calories, setCalories] = useState(0); 
  const [fat, setFat] = useState(0); 
  const [cholesterol, setCholesterol] = useState(0); 
  const [sodium, setSodium] = useState(0); 
  const [potassium, setPotassium] = useState(0); 
  const [carbs, setCarbs] = useState(0);
  const [fiber, setFiber] = useState(0);
  const [sugar, setSugar] = useState(0);
  const [protein, setProtein] = useState(0);
  const [vitaminA, setVitaminA] = useState(0);
  const [vitaminC, setVitaminC] = useState(0);
  const [vitaminD, setVitaminD] = useState(0);
  const [calcium, setCalcium] = useState(0);
  const [iron, setIron] = useState(0);

  return (
    <div className="App">
      <header>
        <h1>Nutrition Tracker</h1>
      </header>

      <Form
        setName = {setName} setCalories = {setCalories} setFat = {setFat} setCholesterol = {setCholesterol} setSodium = {setSodium}
        setPotassium = {setPotassium} setCarbs = {setCarbs} setFiber = {setFiber} setSugar = {setSugar} setProtein = {setProtein}
        setVitaminA = {setVitaminA} setVitaminC = {setVitaminC} setVitaminD = {setVitaminD} setCalcium = {setCalcium} setIron = {setIron}
      />

      <NutriFacts 
        name = {name}  calories = {calories} fat = {fat} cholesterol = {cholesterol} sodium = {sodium}
        potassium = {potassium} carbs = {carbs} fiber = {fiber} sugar = {sugar} protein = {protein}
        vitaminA = {vitaminA} vitaminC = {vitaminC} vitaminD = {vitaminD} calcium = {calcium} iron = {iron}
      />

    </div>
  );

}

export default App;
