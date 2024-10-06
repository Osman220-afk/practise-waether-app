const apiKey="03713a47106348763e8b4f45d9b36b31";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBtn=document.querySelector(".search-icon img");
const searchInput=document.querySelector(".search-bar input");
const img=document.querySelector(".rain img");


async function checkWeather(city){
   const response= await fetch (apiUrl+ city+`&appid=${apiKey}`);
   if(response.status==404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";

   }
   else{
    const data=await response.json();
    console.log(data);
    document.querySelector(".city-name").innerHTML=data.name;
    document.querySelector(".temparatue").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity-number").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind-number").innerHTML=data.wind.speed+ "Km/h";
 
    if(data.weather[0].main=="Clouds"){
     img.src="images/clouds.png";
    }
    else if(data.weather[0].main=="Rain"){
     img.src="images/rain.png";
    }
    else if(data.weather[0].main=="Mist"){
     img.src="images/mist.png";
    }
   else if(data.weather[0].main=="Drizzle"){
     img.src="images/drizzle.png";
    }
    else if(data.weather[0].main=="Clear"){
     img.src="images/clear.png";
    }
   else if (data.weather[0].main=="Snow"){
     img.src="images/snow.png";
    }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".main-body").style.background="linear-gradient(135deg, #ADD8E6, #F0F0F0)";
   document.querySelector(".main-body").style.boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)";
   document.querySelector(".error").style.display="none";
 
 }
 
   }
   
searchBtn.addEventListener("click",()=>{
    checkWeather(searchInput.value);
})

