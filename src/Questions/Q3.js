import React from 'react'
import { useState, useEffect, useCallback } from 'react';

export const Q3 = (props) => {

    const [countries, setCountries] = useState([])

    function getCountryAndCities(countryName){
        var promise = new Promise(function (resolve, reject) {
            APIGetCountry(countryName).then((ans)=>{
                if(props.favoriteCountriesNames.includes(countryName)){
                    Promise.all(ans.citiesNames.map((city)=>{
                        return APIGetCities(city)
                    })).then(values=> {ans.cities=values; resolve(ans) })
                }
                else{
                    resolve(ans)  
                } 
            })
                   
        })
        return promise
    }

        useEffect(() => {
            Promise.all(props.countriesNames.map((name) => {
            return getCountryAndCities(name)})).then(values =>{ setCountries(values)})
        }, [])



    return (
        <>  
            <h1>Q3</h1>
            {countries.map(country=>{
                return <Country key={country.name} country={country}/>
            })}
        </>


        

    )
}

function Country(props){
    return(
        <div>
            <div>name: {props.country.name}</div>
            <div>capital: {props.country.capital}</div>
            <div>language: {props.country.language}</div>
            {props.country.cities && <div>
                <div><strong>Cities:</strong></div>
                {
                    props.country.cities.map(city=>{
                        return <City key={city.name} city={city}/>
                    })
                }
            </div>
            }
            <p></p>
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

function APIGetCities(city){
    const data = {
        Jerusalem: { name: "Jerusalem", Population : 936425 },
        "Tel-Aviv": { name: "Tel-Aviv", Population: 460613 },
        Haifa: { name: "Haifa", Population: 285316}
    }
    var promise = new Promise(function (resolve, reject) {
        window.setTimeout(function () {
            resolve(data[city]);
        }, 1000);
    })
    return promise

}

function APIGetCountry(country) {
    const data = {israel: { name:"Israel", capital:"Jerusalem",  language:"Hebrew", citiesNames:["Jerusalem","Tel-Aviv","Haifa"]},
            england: { name: "England",capital: "London", language: "English", citiescitiesNames: ["London","Manchester"] },
            spain: { name: "Spain",capital: "Madrid", language: "Spanish", citiescitiesNames: ["Madrid","Barcelona"] }
    }
    var promise = new Promise(function (resolve, reject) {
        window.setTimeout(function () {
            resolve(data[country]);
        },1000);
    })
    return promise
            
}