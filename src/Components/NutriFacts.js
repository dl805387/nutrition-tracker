import React, { useState } from "react";

function NutriFacts(props) {
    return(
        <div>
            <h1> {props.name} Nutrition Facts</h1>
            <table className="nutri-table" >
                <tbody>
                    <tr>
                        <th>Amount per </th>
                        <th>Quantity</th>
                        <th>% Daily value</th>
                    </tr>
                    <tr>
                        <td>Calories</td>
                        <td>{props.calories}</td>
                        <td>0%</td>
                    </tr>
                    <tr>
                        <td>Fat</td>
                        <td>{props.fat}</td>
                        <td>0%</td>
                    </tr>
                    <tr>
                        <td>Cholesterol</td>
                        <td>{props.cholesterol}</td>
                        <td>0%</td>
                    </tr>
                    <tr>
                        <td>Sodium</td>
                        <td>{props.sodium}</td>
                        <td>0%</td>
                    </tr>
                    <tr>
                        <td>Potassium</td>
                        <td>{props.potassium}</td>
                        <td>0%</td>
                    </tr>
                    <tr>
                        <td>Carbohydrate</td>
                        <td>{props.carbs}</td>
                        <td>0%</td>
                    </tr>
                    <tr>
                        <td>Fiber</td>
                        <td>{props.fiber}</td>
                        <td>0%</td>
                    </tr>
                    <tr>
                        <td>Sugar</td>
                        <td>{props.sugar}</td>
                        <td>0%</td>
                    </tr>
                    <tr>
                        <td>Protein</td>
                        <td>{props.protein}</td>
                        <td>0%</td>
                    </tr>
                    <tr>
                        <td>Vitamin A</td>
                        <td>{props.vitaminA}</td>
                        <td>0%</td>
                    </tr>
                    <tr>
                        <td>Vitamin C</td>
                        <td>{props.vitaminC}</td>
                        <td>0%</td>
                    </tr>
                    <tr>
                        <td>Vitamin D</td>
                        <td>{props.vitaminD}</td>
                        <td>0%</td>
                    </tr>
                    <tr>
                        <td>Calcium</td>
                        <td>{props.calcium}</td>
                        <td>0%</td>
                    </tr>
                    <tr>
                        <td>Iron</td>
                        <td>{props.iron}</td>
                        <td>0%</td>
                    </tr>
                    
                </tbody>       
            </table>
        </div>     
    );
}

export default NutriFacts;