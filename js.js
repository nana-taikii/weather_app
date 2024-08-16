const key = "7aea0ae7d0cd1fc559f0d2351f87aa59";
const api_link = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const city_input = document.querySelector(".left input");
const search_btn = document.querySelector(".left button");
const weather_icon = document.querySelectorAll(".weather_icon");
const weather_icon_white = document.querySelectorAll(".weather_icon_white");
const temp = document.querySelectorAll(".temp");
const city_name = document.querySelector(".city_name");
const city_description= document.querySelector(".city_description");
const weather_name = document.querySelector(".weather_name");
const weather_description = document.querySelector(".weather_description");
const weather_icon_bottom = document.querySelector(".weather_icon_bottom")
const humidity = document.querySelector(".humidity");
const pressure = document.querySelector(".pressure");
const wind_deg = document.querySelector(".wind_deg");
const wind_spd = document.querySelector(".wind_spd");
const wind_gst = document.querySelector(".wind_gst");

const loc_note = document.querySelector('.loc_note');
const right = document.querySelector('.right');



async function weather(city){
    const response = await fetch(api_link + city +`&appid=${key}`);
    let data = await response.json();
    console.log(data);

    function details(){
        
        weather_name.innerHTML = data.weather[0].main;
        weather_description.innerHTML = data.weather[0].description;
        city_name.innerHTML = data.name;
        if(data.sys.country == undefined){
            city_description.innerHTML = '';
        }
        else{
            city_description.innerHTML = data.sys.country;

        }
        temp.forEach(function(temp){
            temp.innerHTML = Math.round(data.main.temp) + "°C";
        });
  
        humidity.innerHTML = data.main.humidity + "%";
        pressure.innerHTML = data.main.pressure + "hPa";
        wind_deg.innerHTML = data.wind.deg + "°";
        wind_spd.innerHTML = data.wind.speed + "m/s";
        if(data.wind.gust == undefined){
            wind_gst.innerHTML = "NA";
        }
        else{
            wind_gst.innerHTML = data.wind.gust + "m/s";
        }
  
        loc_note.style.display = "flex";
        right.style.right = "0";
  
  }

    if(response.status == "404"){
        city_input.style.border = "2px solid red";
        console.log("hakdog");
    }
    else{
        city_input.style.border = "2px solid transparent";
        console.log("okie");
        
        if(data.weather[0].main == "Rain"){
            document.body.style.backgroundImage = "url('images/rainy_photo.jpg')";
            document.querySelector(".left h2").style.color = "#222";
            document.querySelector(".right").style.backgroundColor = "rgba(34,34,34,0.2)";
            weather_icon.forEach(function(icon){
                icon.src = "images/rainy_black.png";
            });
            weather_icon_white.forEach(function(icon){
                icon.src = "images/rainy_white.png";
            });
            weather_icon_bottom.src = "images/rainy_bottom.png";
            document.querySelectorAll(".details_content h4").forEach(function(h4){
                h4.style.color = "#a4a4a4";
            });
            document.querySelectorAll(".details_content img").forEach(function(img){
                img.style.filter = "contrast(0%)";
            });

            details();
            
        }
        else if(data.weather[0].main == "Thunderstorm"){
            document.body.style.backgroundImage = "url('images/thunderstorm.jpg')";
            document.querySelector(".right").style.backgroundColor = "rgba(34,34,34,0.2)";
            document.querySelectorAll(".details_content h4").forEach(function(h4){
                h4.style.color = "#a4a4a4";
            });
            document.querySelectorAll(".details_content img").forEach(function(img){
                img.style.filter = "contrast(0%)";
            });
            weather_icon.forEach(function(icon){
                icon.src = "images/thunderstorm.png";
            });
            weather_icon_white.forEach(function(icon){
                icon.src = "images/thunderstorm.png";
            });
            weather_icon_bottom.src = "images/thunderstorm_bottom.png";
            details();
          
            
        }
        else if(data.weather[0].main == "Snow"){
            document.body.style.backgroundImage = "url('images/snow.jpeg')";
            document.querySelector(".right").style.backgroundColor = "rgba(34,34,34,0.2)";
            document.querySelector(".left h2").style.color = "#fff";
            document.querySelector(".left p").style.color = "#222";
            weather_icon.forEach(function(icon){
                icon.src = "images/snow.png";
            });
            weather_icon_white.forEach(function(icon){
                icon.src = "images/snow.png";
            });
            weather_icon_bottom.src = "images/snow_bottom.png";
            details();
        }
        else if(data.weather[0].main == "Drizzle"){
            document.body.style.backgroundImage = "url('images/drizzle.jpg')";
            document.querySelector(".right").style.backgroundColor = "rgba(34,34,34,0.2)";
            document.querySelector(".left h2").style.color = "#fff";
            document.querySelector(".left p").style.color = "#fff";
            weather_icon.forEach(function(icon){
                icon.src = "images/rainy_white.png";
            });
            details();
           

        }
        else if(data.weather[0].main == "Mist"){
            document.body.style.backgroundImage = "url('images/mist.jpg')";
            document.querySelector(".right").style.backgroundColor = "rgba(34,34,34,0.2)";
            document.querySelector(".left h2").style.color = "#fff";
            document.querySelector(".left h2").style.color = "#222";
            weather_icon.forEach(function(icon){
                icon.src = "images/mist_black.png";
            });
            weather_icon_white.forEach(function(icon){
                icon.src = "images/mist_white.png";
            });
            weather_icon_bottom.src = "images/mist_bottom.png";
            document.querySelector(".right").style.backgroundColor = "rgba(34,34,34,0.2)";
            document.querySelectorAll(".details_content h4").forEach(function(h4){
                h4.style.color = "#a4a4a4";
            });
            document.querySelectorAll(".details_content img").forEach(function(img){
                img.style.filter = "contrast(0%)";
            });

            details();
    

        }
        else if(data.weather[0].main == "Clouds"){
            document.body.style.backgroundImage = "url('images/cloudy.jpeg')";
            document.querySelector(".left h2").style.color = "#fff";
            document.querySelector(".left p").style.color = "#222";
            document.querySelector(".right").style.backgroundColor = "rgba(149,111,220,0.2)";
            weather_icon.forEach(function(icon){
                icon.src = "images/clouds.png";
            });
            weather_icon_white.forEach(function(icon){
                icon.src = "images/clouds.png";
            });
            weather_icon_bottom.src = "images/cloudy_bottom.png";
            document.querySelectorAll(".details_content h4").forEach(function(h4){
                h4.style.color = "#222";
            });
            document.querySelectorAll(".details_content img").forEach(function(img){
                img.style.filter = "contrast(100%)";
            });
            details();

        }
        else if(data.weather[0].main == "Clear"){
            document.body.style.backgroundImage = "url('images/clear.jpg')";
            document.querySelector(".left h2").style.color = "#fff";
            document.querySelector(".right").style.backgroundColor = "rgba(149,111,220,0.2)";
            document.querySelectorAll(".details_content h4").forEach(function(h4){
                h4.style.color = "#a4a4a4";
            });
            document.querySelectorAll(".details_content img").forEach(function(img){
                img.style.filter = "contrast(0%)";
            });
            weather_icon.forEach(function(icon){
                icon.src = "images/clear.png";
            });
            weather_icon_white.forEach(function(icon){
                icon.src = "images/clear.png";
            });
            weather_icon_bottom.src = "images/clear_bottom.png";
            details();


        }
        else{
            weather_name.innerHTML = data.weather[0].main;
            weather_description.innerHTML = data.weather[0].description;
            city_name.innerHTML = data.name;
            city_description.innerHTML = data.sys.country;
            temp.forEach(function(temp){
                temp.innerHTML = Math.round(data.main.temp) + "°C";
            });

            humidity.innerHTML = data.main.humidity + "%";
            pressure.innerHTML = data.main.pressure + "hPa";
            wind_deg.innerHTML = data.wind.deg + "°";
            wind_spd.innerHTML = data.wind.speed + "m/s";
            if(data.wind.gust == undefined){
                wind_gst.innerHTML = "NA";
            }
            else{
                wind_gst.innerHTML = data.wind.gust + "m/s";
            }

            //display
            loc_note.style.display = "flex";
    
            right.style.right = "0";
        }
    }
    
}
search_btn.addEventListener("click", ()=>{
    weather(city_input.value);
});



