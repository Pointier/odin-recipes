import "./style.css";

interface CurrentConditions {
  location: string;
  windspeed: number;
  condition: string;
  temp: string;
  humidity: number;
}

interface WeatherData {
  address: string;
  currentConditions: CurrentConditions;
}

async function getWeather(location: string): Promise<Object | undefined> {
  try {
    const key: string = "C8MCNY2Z4259B22DT96RFZNKL";
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?unitGroup=metric&key=${key}&contentType=json`,
    );
    if (!response.ok) {
      throw new Error(`Error fetching weather data : ${response.statusText}`);
    }
    const weatherData = await response.json();
    return weatherData;
  } catch (err) {
    alert(err);
    return undefined;
  }
}

async function displayWeather(
  location: string,
): Promise<CurrentConditions | undefined> {
  try {
    const weatherData = (await getWeather(location)) as any;
    const currentConditions = weatherData.currentConditions;
    const weatherFiltered: CurrentConditions = {
      location: weatherData.address,
      windspeed: currentConditions.windspeed,
      condition: currentConditions.conditions,
      temp: currentConditions.temp,
      humidity: currentConditions.humidity,
    };
    console.log(weatherFiltered);
    return weatherFiltered;
  } catch (err) {
    console.log(err);
    return undefined;
  }
}

const input = document.getElementById("location") as HTMLInputElement;
const button = document.querySelector("#location + button");

button?.addEventListener("click", async (event) => {
  event.preventDefault();
  if (input) {
    const loc = input.value;
    const data = await displayWeather(loc);
    const location = document.querySelector(".location");
    const windspeed = document.querySelector(".windspeed");
    const condition = document.querySelector(".condition");
    const temp = document.querySelector(".temp");
    const humidity = document.querySelector(".humidity");
    if (data && location && windspeed && condition && temp && humidity) {
      location.textContent = data.location;
      windspeed.textContent = String(data.windspeed);
      condition.textContent = data.condition;
      temp.textContent = String(data.temp);
      humidity.textContent = String(data.humidity);
    }
  }
});
