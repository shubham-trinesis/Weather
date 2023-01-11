import React, { useEffect, useState  } from "react";
import './Weather.css'
const Weather= () => {

    const [data,setData]=useState([]);

    const getWeatherData=async()=>{
        try{
            const res= await fetch("https://www.weatherapi.com/docs/conditions.json");
        const ActualData=await res.json();
        console.log(ActualData);
        setData(ActualData[0])

        }
        catch(err){
            console.log(err);

        }

    }

    //when u reload page function will call and data will be  updated using (useEffect)
    useEffect(()=>{
        
        getWeatherData();

    },[]);

    return(
        <>

        <section>
        <h1>weather</h1>
        <ul>
            <li className="card">
              <div className="card__main">
                <div className="card__inner">
                   <p className="card__day">day</p>
                   <hr></hr>  
                   <p >{data.day}</p>
                
                </div>

                <div className="card__inner">
                   <p className="card__night">night</p>
                   <hr></hr> 
                   <p >{data.night}</p>
                

                </div>

                <div className="card__inner">

                   <p className="card__clear">clear</p>
                   <hr></hr> 
                   <p >{data.code}</p>
                  
                

                </div>
              </div>
             

            </li>
        </ul>
        </section>
        </>
    )
}

export default Weather;