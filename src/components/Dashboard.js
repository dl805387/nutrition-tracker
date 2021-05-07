import React, { useState, useEffect } from "react";
import Nutrition from './Nutrition';
import '../styles/Dashboard.css'
const axios = require('axios').default;

function Dashboard(props) {

    const {
        handleLogout,
        user
    } = props;



    const [totalCal, setTotalCal] = useState(0);
    const [totalCarb, setTotalCarb] = useState(0);
    const [totalProtein, setTotalProtein] = useState(0);
    const [totalFat, setTotalFat] = useState(0);

    const [dogPic, setDogPic] = useState("");

    // Uses Dog CEO's dog API for user profile pic!
    const getDogPic = async () => {
        const res = await axios.get('https://dog.ceo/api/breeds/image/random');
        setDogPic(res.data.message);
    }

    useEffect(() => {
        getDogPic();
    }, []);

    return (
        <div>

            <div className="horzDisplay">

                <div className="section">
                    <p>Welcome, {user.email} </p>
                    <div>
                        {dogPic !== "" && (<img src={dogPic} alt="Profile Pic" className="profilePic"></img>)}
                    </div>
                    <button className="roundedBtn" onClick={()=> {handleLogout();}}>Logout</button>
                </div>

                        
                <div className="section"> 
                    <Nutrition 
                        totalCal = {totalCal}
                        totalCarb = {totalCarb}
                        totalProtein = {totalProtein}
                        totalFat = {totalFat}
                        setTotalCal = {setTotalCal}
                        setTotalCarb = {setTotalCarb}
                        setTotalProtein = {setTotalProtein}
                        setTotalFat = {setTotalFat}
                    />
                </div>             

            </div>

        </div>
    );
}

export default Dashboard;