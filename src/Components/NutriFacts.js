import React, { useState } from "react";

function NutriFacts(props) {
    return(
        <div>
            <h1>{props.title} Nutrition Facts</h1>
            <h2>{props.amount}</h2>
            <h2>{props.calories}</h2>
            <table className="nutri-table" >
                <tbody>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>% Daily value</th>
                    </tr>
                    <tr>
                        <td>Fat</td>
                        <td>{props.fat}</td>
                        <td>{props.fatDaily}%</td>
                    </tr>
                    <tr>
                        <td>Cholesterol</td>
                        <td>{props.cholesterol}</td>
                        <td>{props.cholesterolDaily}%</td>
                    </tr>
                    <tr>
                        <td>Sodium</td>
                        <td>{props.sodium}</td>
                        <td>{props.sodiumDaily}%</td>
                    </tr>
                    <tr>
                        <td>Potassium</td>
                        <td>{props.potassium}</td>
                        <td>{props.potassiumDaily}%</td>
                    </tr>
                    <tr>
                        <td>Carbohydrate</td>
                        <td>{props.carbs}</td>
                        <td>{props.carbsDaily}%</td>
                    </tr>
                    <tr>
                        <td>Fiber</td>
                        <td>{props.fiber}</td>
                        <td>{props.fiberDaily}%</td>
                    </tr>
                    <tr>
                        <td>Sugar</td>
                        <td>{props.sugar}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Protein</td>
                        <td>{props.protein}</td>
                        <td>{props.proteinDaily}%</td>
                    </tr>
                    <tr>
                        <td>Vitamin A</td>
                        <td>{props.vitaminA}</td>
                        <td>{props.vitaminADaily}%</td>
                    </tr>
                    <tr>
                        <td>Vitamin C</td>
                        <td>{props.vitaminC}</td>
                        <td>{props.vitaminCDaily}%</td>
                    </tr>
                    <tr>
                        <td>Vitamin D</td>
                        <td>{props.vitaminD}</td>
                        <td>{props.vitaminDDaily}%</td>
                    </tr>
                    <tr>
                        <td>Calcium</td>
                        <td>{props.calcium}</td>
                        <td>{props.calciumDaily}%</td>
                    </tr>
                    <tr>
                        <td>Iron</td>
                        <td>{props.iron}</td>
                        <td>{props.ironDaily}%</td>
                    </tr>
                    
                </tbody>       
            </table>
        </div>     
    );
}

export default NutriFacts;