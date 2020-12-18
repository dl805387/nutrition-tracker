import './App.css';
import React, { useState } from "react";
import Form from './Components/Form';
import NutriFacts from './Components/NutriFacts';
// 1%20100grams%20apple       // git add -A
// https://api.edamam.com/api/nutrition-data?app_id=cb858920&app_key=23e79631876defaed65d9e35dd579c67&ingr=1%20large%20apple

function App() {
  const [name, setName] = useState(""); 
  const [grams, setGrams] = useState("");

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

  // % daily value 
  const [fatDaily, setFatDaily] = useState(0); 
  const [cholesterolDaily, setCholesterolDaily] = useState(0); 
  const [sodiumDaily, setSodiumDaily] = useState(0); 
  const [potassiumDaily, setPotassiumDaily] = useState(0); 
  const [carbsDaily, setCarbsDaily] = useState(0);
  const [fiberDaily, setFiberDaily] = useState(0);
  const [proteinDaily, setProteinDaily] = useState(0);
  const [vitaminADaily, setVitaminADaily] = useState(0);
  const [vitaminCDaily, setVitaminCDaily] = useState(0);
  const [vitaminDDaily, setVitaminDDaily] = useState(0);
  const [calciumDaily, setCalciumDaily] = useState(0);
  const [ironDaily, setIronDaily] = useState(0);

  // Total nutrition facts
  const [caloriesTotal, setCaloriesTotal] = useState(0); 
  const [fatTotal, setFatTotal] = useState(0); 
  const [cholesterolTotal, setCholesterolTotal] = useState(0); 
  const [sodiumTotal, setSodiumTotal] = useState(0); 
  const [potassiumTotal, setPotassiumTotal] = useState(0); 
  const [carbsTotal, setCarbsTotal] = useState(0);
  const [fiberTotal, setFiberTotal] = useState(0);
  const [sugarTotal, setSugarTotal] = useState(0);
  const [proteinTotal, setProteinTotal] = useState(0);
  const [vitaminATotal, setVitaminATotal] = useState(0);
  const [vitaminCTotal, setVitaminCTotal] = useState(0);
  const [vitaminDTotal, setVitaminDTotal] = useState(0);
  const [calciumTotal, setCalciumTotal] = useState(0);
  const [ironTotal, setIronTotal] = useState(0);

  // Total daily nutrition facts
  const [fatDailyTotal, setFatDailyTotal] = useState(0); 
  const [cholesterolDailyTotal, setCholesterolDailyTotal] = useState(0); 
  const [sodiumDailyTotal, setSodiumDailyTotal] = useState(0); 
  const [potassiumDailyTotal, setPotassiumDailyTotal] = useState(0); 
  const [carbsDailyTotal, setCarbsDailyTotal] = useState(0);
  const [fiberDailyTotal, setFiberDailyTotal] = useState(0);
  const [proteinDailyTotal, setProteinDailyTotal] = useState(0);
  const [vitaminADailyTotal, setVitaminADailyTotal] = useState(0);
  const [vitaminCDailyTotal, setVitaminCDailyTotal] = useState(0);
  const [vitaminDDailyTotal, setVitaminDDailyTotal] = useState(0);
  const [calciumDailyTotal, setCalciumDailyTotal] = useState(0);
  const [ironDailyTotal, setIronDailyTotal] = useState(0);

  return (
    <div className="App">
      <header>
        <h1>Nutrition Tracker</h1>
      </header>

      <Form
        setName = {setName} grams = {grams} setGrams = {setGrams}

        setCalories = {setCalories} setFat = {setFat} setCholesterol = {setCholesterol} setSodium = {setSodium}
        setPotassium = {setPotassium} setCarbs = {setCarbs} setFiber = {setFiber} setSugar = {setSugar} setProtein = {setProtein}
        setVitaminA = {setVitaminA} setVitaminC = {setVitaminC} setVitaminD = {setVitaminD} setCalcium = {setCalcium} setIron = {setIron}

        setFatDaily = {setFatDaily} setCholesterolDaily = {setCholesterolDaily} setSodiumDaily = {setSodiumDaily}
        setPotassiumDaily = {setPotassiumDaily} setCarbsDaily = {setCarbsDaily} setFiberDaily = {setFiberDaily} 
        setProteinDaily = {setProteinDaily} setVitaminADaily = {setVitaminADaily} setVitaminCDaily = {setVitaminCDaily} 
        setVitaminDDaily = {setVitaminDDaily} setCalciumDaily = {setCalciumDaily} setIronDaily = {setIronDaily}

        caloriesTotal = {caloriesTotal} fatTotal = {fatTotal} cholesterolTotal = {cholesterolTotal} sodiumTotal = {sodiumTotal}
        potassiumTotal = {potassiumTotal} carbsTotal = {carbsTotal} fiberTotal = {fiberTotal} sugarTotal = {sugarTotal} 
        proteinTotal = {proteinTotal} vitaminATotal = {vitaminATotal} vitaminCTotal = {vitaminCTotal} vitaminDTotal = {vitaminDTotal} 
        calciumTotal = {calciumTotal} ironTotal = {ironTotal}

        setCaloriesTotal = {setCaloriesTotal} setFatTotal = {setFatTotal} setCholesterolTotal = {setCholesterolTotal} 
        setSodiumTotal = {setSodiumTotal} setPotassiumTotal = {setPotassiumTotal} setCarbsTotal = {setCarbsTotal} 
        setFiberTotal = {setFiberTotal} setSugarTotal = {setSugarTotal} setProteinTotal = {setProteinTotal} setVitaminATotal = {setVitaminATotal} 
        setVitaminCTotal = {setVitaminCTotal} setVitaminDTotal = {setVitaminDTotal} setCalciumTotal = {setCalciumTotal} setIronTotal = {setIronTotal}

        fatDailyTotal = {fatDailyTotal} cholesterolDailyTotal = {cholesterolDailyTotal} sodiumDailyTotal = {sodiumDailyTotal}
        potassiumDailyTotal = {potassiumDailyTotal} carbsDailyTotal = {carbsDailyTotal} fiberDailyTotal = {fiberDailyTotal} 
        proteinDailyTotal = {proteinDailyTotal} vitaminADailyTotal = {vitaminADailyTotal} vitaminCDailyTotal = {vitaminCDailyTotal} 
        vitaminDDailyTotal = {vitaminDDailyTotal} calciumDailyTotal = {calciumDailyTotal} ironDailyTotal = {ironDailyTotal}

        setFatDailyTotal = {setFatDailyTotal} setCholesterolDailyTotal = {setCholesterolDailyTotal} setSodiumDailyTotal = {setSodiumDailyTotal}
        setPotassiumDailyTotal = {setPotassiumDailyTotal} setCarbsDailyTotal = {setCarbsDailyTotal} setFiberDailyTotal = {setFiberDailyTotal} 
        setProteinDailyTotal = {setProteinDailyTotal} setVitaminADailyTotal = {setVitaminADailyTotal} setVitaminCDailyTotal = {setVitaminCDailyTotal} 
        setVitaminDDailyTotal = {setVitaminDDailyTotal} setCalciumDailyTotal = {setCalciumDailyTotal} setIronDailyTotal = {setIronDailyTotal}
      />

      <NutriFacts 
        title = {name} amount = {"Amount per " + grams + "g"} calories = {"Calories " + calories} 

        fat = {fat} cholesterol = {cholesterol} sodium = {sodium} potassium = {potassium} carbs = {carbs} fiber = {fiber} 
        sugar = {sugar} protein = {protein} vitaminA = {vitaminA} vitaminC = {vitaminC} vitaminD = {vitaminD} calcium = {calcium} iron = {iron}

        fatDaily = {fatDaily} cholesterolDaily = {cholesterolDaily} sodiumDaily = {sodiumDaily} potassiumDaily = {potassiumDaily} 
        carbsDaily = {carbsDaily} fiberDaily = {fiberDaily} proteinDaily = {proteinDaily} vitaminADaily = {vitaminADaily} 
        vitaminCDaily = {vitaminCDaily} vitaminDDaily = {vitaminDDaily} calciumDaily = {calciumDaily} ironDaily = {ironDaily}
      />

      <NutriFacts 
        title = "Total" amount = "" calories = {"Total Calories " + caloriesTotal} 

        fat = {fatTotal} cholesterol = {cholesterolTotal} sodium = {sodiumTotal} potassium = {potassiumTotal} 
        carbs = {carbsTotal} fiber = {fiberTotal} sugar = {sugarTotal} protein = {proteinTotal} vitaminA = {vitaminATotal} 
        vitaminC = {vitaminCTotal} vitaminD = {vitaminDTotal} calcium = {calciumTotal} iron = {ironTotal}

        fatDaily = {fatDailyTotal} cholesterolDaily = {cholesterolDailyTotal} sodiumDaily = {sodiumDailyTotal} potassiumDaily = {potassiumDailyTotal} 
        carbsDaily = {carbsDailyTotal} fiberDaily = {fiberDailyTotal} proteinDaily = {proteinDailyTotal} vitaminADaily = {vitaminADailyTotal} 
        vitaminCDaily = {vitaminCDailyTotal} vitaminDDaily = {vitaminDDailyTotal} calciumDaily = {calciumDailyTotal} ironDaily = {ironDailyTotal}
      />

    </div>
  );

}

export default App;
