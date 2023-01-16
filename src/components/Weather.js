import React, { useEffect, useState } from "react";
import './Weather.css'

const Weather = () => {

    const [data, setData] = useState("pune");
    // const [data, setData] = useState({main:[],sys:[]});

    // const len=data.length;
    const bydefault="pune"
   

 

    const [search, setSearch] = useState("Pune")



    const getWeatherData = async () => {
        try {
            // const res= await fetch("https://www.weatherapi.com/docs/conditions.json");
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d4f46cf81317c6b3a0944343d170b20d`);
            // const res1 = await fetch(`https://api.unsplash.com/search/photos?page=1&query=weather&client_id=YabgKrAr3F26nVAjUVRaRuQl0P1oE5GTjlAwbzJZiOI`);


            // const res= await fetch("https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=djgkv43439d90bkckcs");


            const ActualData = await res.json();


            // console.log(res)
            // console.log(ActualData.temp);
            console.log(ActualData);;
            console.log(ActualData.main);



             setData(ActualData.main.temp);
            //  setData(ActualData);




        }
        catch (err) {
            console.log(err);

        }

    }


       

        
       

    

    //when u reload page function will call and data will be  updated using (useEffect)
    useEffect(() => {

        getWeatherData();
        // getImg();


    }, [search]);

    return (
        <div>



            {!data ? (
                <div className="notfound"> <p>data not found</p></div>


            ) : (
                <div className="main_inner">


                    <div className="search-section">
                        <input type="search" placeholder="enter your city name" className="input-field" onChange={(event) => { setSearch(event.target.value || bydefault) 
                            
                        }}></input>

                    </div>

                    <div className="card" >



                        <ul className="card_content" >
                            <li className=" list-items">

                                <div className="card__inner1">
                                    <p className="card__day">{search || bydefault}</p>
                                    <hr></hr>
                                    {/* <p>{data.main.temp }</p> */}
                                    <p>{data }</p>

                                   
                                </div>
                                <br></br>

                                    {/* <div className="card__inner1">
                                        <p className="card__day">Country</p>
                                        <hr></hr>
                                       
                                        <p>{data.sys.country}</p>
                                    </div>  
                                    <br></br> */}


                                




                                {/* <div className="card__inner2">
                                <p className="card__day">Weather</p>
                                <hr></hr>
                                <p>{data}</p>

                            </div> */}

                                {/* <div className="card__inner">

                   <p className="card__clear">clear</p>
                   <hr></hr> 
                  
                

                </div> */}
                                {/* </div> */}


                            </li>
                        </ul>
                    </div>
                </div>
            )
            }


            {/* <section className="Main-section" > */}


            {/* // </section> */}

        </div>

    )
}
export default Weather;