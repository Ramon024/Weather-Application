"use strict";

// api key : f7da05a365f32f077a3e566d8742ec2e

const locationElement = document.querySelector(".location p");
const iconElement = document.querySelector(".weather-icon");
const descElement = document.querySelector(".description p");
const currentElement = document.querySelector(".current-tempature p");
const maxElement = document.querySelector(".max-tempature p");
const minElement = document.querySelector(".min-tempature p");
const humidityElement = document.querySelector(".humidity p");
const speedElement = document.querySelector(".wind-speed p");
const directionElement = document.querySelector(".wind-direction p");

// API KEY
const key = "f7da05a365f32f077a3e566d8742ec2e";

function searchcity() 
{
	// body...
	var input = document.getElementById("myText").value;
	var cityOrZip = "";
    if (isNaN(input) == true)
    {
		cityOrZip = "q";
    }
	else
	{
		cityOrZip = "zip";
	}
	let api = `http://api.openweathermap.org/data/2.5/weather?${cityOrZip}=${input}&units=imperial&appid=${key}`;
	fetch(api)
    	.then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data){
        	if (data.cod == 404)
        	{
        		alert(data.message);
        	}
        	else
        	{
    			locationElement.innerHTML = data.name + "," + data.sys.country 
    			+ " (" + data.coord.lat + ", " + data.coord.lon + ")";
    			iconElement.innerHTML = '<img src="icons/' + data.weather[0].icon + '.png"/>';
    			descElement.innerHTML = data.weather[0].main + " with " + data.weather[0].description;
    			currentElement.innerHTML = data.main.temp + "°<span>F</span>";
    			maxElement.innerHTML = data.main.temp_max + "°<span>F</span>";
    			minElement.innerHTML = data.main.temp_min + "°<span>F</span>";
    			humidityElement.innerHTML = "Humidity: " + data.main.humidity + "%";
    			speedElement.innerHTML = "Wind Speed: " + data.wind.speed + "<span>mph</span>";
    			directionElement.innerHTML = "Wind Direction: " + data.wind.deg + "°";
            }

        });
}