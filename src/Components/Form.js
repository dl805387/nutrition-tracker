import React, { useState } from "react";

function Form(props) {
    var APP_ID = "cb858920";
    var APP_KEY = "23e79631876defaed65d9e35dd579c67";
    var items = []; // this holds the data from the API
    const [input, setInput] = useState("");             // update code to include the %20, quantity, and size
    const [status, setStatus] = useState("");

    async function searchFood(e) {
        e.preventDefault(); // prevents page from reloading  
        var url = "https://api.edamam.com/api/nutrition-data?app_id=" + APP_ID + "&app_key=" + APP_KEY + "&ingr=" + "1%20" + status + "%20" + input;
        items = await fetch(url).then(res => res.json()); // await allows the fetch to complete before moving on to rest of code
        console.log(items);
        capitalizeFirstLetter(input)
        setInput("");
        setNutrition();
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
                    <select className="filter-food" onChange={event => setStatus(event.target.value)} >
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