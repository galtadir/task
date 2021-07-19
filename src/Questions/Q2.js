import React from 'react'
import { useState, useEffect, useCallback } from 'react';
import { defer } from 'rxjs';
import { shareReplay} from "rxjs/operators";

export const Q2 = () => {

    const [load1, setLoad1] = useState(false)
    const [load2, setLoad2] = useState(false)


    return (
        <>
            <h1>Q2</h1>
            <button onClick={()=>{setLoad1(!load1);setLoad2(!load2) }}>Load 1 and 2</button>
            <div></div>

            <button onClick={()=>setLoad1(!load1)}>Load 1</button>
            {load1 && <Component1 />}
            <div></div>

            <button onClick={()=>setLoad2(!load2)}>Load 2</button>
            {load2 && <Component2  />}

        </>
        
    )
}

const observable = defer(APIGetCities).pipe(shareReplay())


function Component1(){
    
    const [cities, setCities] = useState(null)
    console.log("render1")
    useEffect(()=>{
        observable.subscribe(x=>setCities(x))
    },[])

    return(
        <div>
            <h3>Component 1</h3>
            {cities && cities.map(city=>{
                return <City key={city.name} city={city}/>
            })}

        </div>
    )

}




function Component2(){
    const [cities, setCities] = useState(null)
    console.log("render2")
    useEffect(()=>{
        observable.subscribe(x=>setCities(x))
    },[])

    
    return(
        <div>
            <h3>Component 2</h3>
            {cities && cities.map(city=>{
                return <City key={city.name} city={city}/>
            })}

        </div>
    )

}


function City(props) {
    return (
        <div>
            <div>name: {props.city.name}</div>
            <div>population: {props.city.Population}</div>
            <div></div>
        </div>
    )
}

function APIGetCities(){
    console.log("api")
    const data = [
        { name: "Jerusalem", Population : 936425 },
        { name: "Tel-Aviv", Population: 460613 },
        { name: "Haifa", Population: 285316}
    ]
    var promise = new Promise(function (resolve, reject) {
        window.setTimeout(function () {
            resolve(data);
        }, 1000);
    })
    return promise
}
