import React, { useState } from "react";

function Form(props) {
    var APP_ID = "cb858920";
    var APP_KEY = "23e79631876defaed65d9e35dd579c67";
    var items = []; // this holds the data from the API
    const [input, setInput] = useState("");             // update code to include the %20, quantity, and size

    async function searchFood(e) {
        e.preventDefault(); // prevents page from reloading  
        var url = "https://api.edamam.com/api/nutrition-data?app_id=" + APP_ID + "&app_key=" + APP_KEY + "&ingr=" + "1%20" + props.grams + "%20" + input;
        items = await fetch(url).then(res => res.json()); // await allows the fetch to complete before moving on to rest of code
        console.log(items);
        capitalizeFirstLetter(input)
        setInput("");
        setNutrition();
        setDailyValue()
    }

    function capitalizeFirstLetter(string) {
        props.setName(string.charAt(0).toUpperCase() + string.slice(1));
    }

    function setNutrition() {
        props.setCalories(items.calories.toFixed(2));
        props.setFat(items.totalNutrients.FAT.quantity.toFixed(2));
        props.setCholesterol(items.totalNutrients.CHOLE.quantity.toFixed(2));
        props.setSodium(items.totalNutrients.NA.quantity.toFixed(2));
        props.setPotassium(items.totalNutrients.K.quantity.toFixed(2));
        props.setCarbs(items.totalNutrients.CHOCDF.quantity.toFixed(2));
        props.setFiber(items.totalNutrients.FIBTG.quantity.toFixed(2));
        props.setSugar(items.totalNutrients.SUGAR.quantity.toFixed(2));
        props.setProtein(items.totalNutrients.PROCNT.quantity.toFixed(2));
        props.setVitaminA(items.totalNutrients.VITA_RAE.quantity.toFixed(2));
        props.setVitaminC(items.totalNutrients.VITC.quantity.toFixed(2));
        props.setVitaminD(items.totalNutrients.VITD.quantity.toFixed(2));
        props.setCalcium(items.totalNutrients.CA.quantity.toFixed(2));
        props.setIron(items.totalNutrients.FE.quantity.toFixed(2));

        props.setCaloriesTotal((parseFloat(props.caloriesTotal) + parseFloat(items.calories)).toFixed(2));
        props.setFatTotal((parseFloat(props.fatTotal) + parseFloat(items.totalNutrients.FAT.quantity)).toFixed(2));
        props.setCholesterolTotal((parseFloat(props.cholesterolTotal) + parseFloat(items.totalNutrients.CHOLE.quantity)).toFixed(2));
        props.setSodiumTotal((parseFloat(props.sodiumTotal) + parseFloat(items.totalNutrients.NA.quantity)).toFixed(2));
        props.setPotassiumTotal((parseFloat(props.potassiumTotal) + parseFloat(items.totalNutrients.K.quantity)).toFixed(2));
        props.setCarbsTotal((parseFloat(props.carbsTotal) + parseFloat(items.totalNutrients.CHOCDF.quantity)).toFixed(2));
        props.setFiberTotal((parseFloat(props.fiberTotal) + parseFloat(items.totalNutrients.FIBTG.quantity)).toFixed(2));
        props.setSugarTotal((parseFloat(props.sugarTotal) + parseFloat(items.totalNutrients.SUGAR.quantity)).toFixed(2));
        props.setProteinTotal((parseFloat(props.proteinTotal) + parseFloat(items.totalNutrients.PROCNT.quantity)).toFixed(2));
        props.setVitaminATotal((parseFloat(props.vitaminATotal) + parseFloat(items.totalNutrients.VITA_RAE.quantity)).toFixed(2));
        props.setVitaminCTotal((parseFloat(props.vitaminCTotal) + parseFloat(items.totalNutrients.VITC.quantity)).toFixed(2));
        props.setVitaminDTotal((parseFloat(props.vitaminDTotal) + parseFloat(items.totalNutrients.VITD.quantity)).toFixed(2));
        props.setCalciumTotal((parseFloat(props.calciumTotal) + parseFloat(items.totalNutrients.CA.quantity)).toFixed(2));
        props.setIronTotal((parseFloat(props.ironTotal) + parseFloat(items.totalNutrients.FE.quantity)).toFixed(2));
    }

    function setDailyValue() {
        props.setFatDaily(items.totalDaily.FAT.quantity.toFixed(2));
        props.setCholesterolDaily(items.totalDaily.CHOLE.quantity.toFixed(2));
        props.setSodiumDaily(items.totalDaily.NA.quantity.toFixed(2));
        props.setPotassiumDaily(items.totalDaily.K.quantity.toFixed(2));
        props.setCarbsDaily(items.totalDaily.CHOCDF.quantity.toFixed(2));
        props.setFiberDaily(items.totalDaily.FIBTG.quantity.toFixed(2));
        props.setProteinDaily(items.totalDaily.PROCNT.quantity.toFixed(2));
        props.setVitaminADaily(items.totalDaily.VITA_RAE.quantity.toFixed(2));
        props.setVitaminCDaily(items.totalDaily.VITC.quantity.toFixed(2));
        props.setVitaminDDaily(items.totalDaily.VITD.quantity.toFixed(2));
        props.setCalciumDaily(items.totalDaily.CA.quantity.toFixed(2));
        props.setIronDaily(items.totalDaily.FE.quantity.toFixed(2));

        props.setFatDailyTotal((parseFloat(props.fatDailyTotal) + parseFloat(items.totalDaily.FAT.quantity)).toFixed(2));
        props.setCholesterolDailyTotal((parseFloat(props.cholesterolDailyTotal) + parseFloat(items.totalDaily.CHOLE.quantity)).toFixed(2));
        props.setSodiumDailyTotal((parseFloat(props.sodiumDailyTotal) + parseFloat(items.totalDaily.NA.quantity)).toFixed(2));
        props.setPotassiumDailyTotal((parseFloat(props.potassiumDailyTotal) + parseFloat(items.totalDaily.K.quantity)).toFixed(2));
        props.setCarbsDailyTotal((parseFloat(props.carbsDailyTotal) + parseFloat(items.totalDaily.CHOCDF.quantity)).toFixed(2));
        props.setFiberDailyTotal((parseFloat(props.fiberDailyTotal) + parseFloat(items.totalDaily.FIBTG.quantity)).toFixed(2));
        props.setProteinDailyTotal((parseFloat(props.proteinDailyTotal) + parseFloat(items.totalDaily.PROCNT.quantity)).toFixed(2));
        props.setVitaminADailyTotal((parseFloat(props.vitaminADailyTotal) + parseFloat(items.totalDaily.VITA_RAE.quantity)).toFixed(2));
        props.setVitaminCDailyTotal((parseFloat(props.vitaminCDailyTotal) + parseFloat(items.totalDaily.VITC.quantity)).toFixed(2));
        props.setVitaminDDailyTotal((parseFloat(props.vitaminDDailyTotal) + parseFloat(items.totalDaily.VITD.quantity)).toFixed(2));
        props.setCalciumDailyTotal((parseFloat(props.calciumDailyTotal) + parseFloat(items.totalDaily.CA.quantity)).toFixed(2));
        props.setIronDailyTotal((parseFloat(props.ironDailyTotal) + parseFloat(items.totalDaily.FE.quantity)).toFixed(2));
    }

    // const statusHandler = (e) => {
    //     setStatus(e.target.value);
    // }

    return(
        <div>
            <form className="search-form" onSubmit={searchFood}>
                <input type="text" className="food-input"  onChange={event => setInput(event.target.value)}  value={input} />
                <button className="food-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select className="filter-food" onChange={event => props.setGrams(event.target.value)} >
                        <option value="default" selected disabled>Select Quantity</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </div>
            </form> 
        </div>
    );
}

export default Form;