// Created by: Jaejun Lee
// Created on: June 2022
// This file contains the JS functions for index.html

'use strict'

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit6-03/sw.js", {
    scope: "/ICS2O-Unit6-03/",
  })
}

/**
 * Get API for weather.
*/
const getWeather = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const jsonData = await result.json()
    console.log(jsonData.main.temp)
    const temperature = jsonData.main.temp - 273.15
    const symbol = jsonData.weather[0].icon
    const description = jsonData.weather[0].description
    document.getElementById("api-weather").innerHTML = "The current weather is " + temperature.toFixed(0) + "°C" + "<img src='https://openweathermap.org/img/wn/" + symbol + "@2x.png' alt='Weather Icon' width='15%'>" + "with " + description
  } catch (err) {
    console.log(err)
    document.getElementById("api-weather").innerHTML = "Error fetching current weather."
  }
}


getWeather("https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5")