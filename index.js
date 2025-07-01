const YOUR_API_KEY = "api_key";

const getWeather = async () => {
    const cityName= document.getElementById('weather-id').value
  try {
    const response=await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${YOUR_API_KEY}&units=metric`

    );
    if(!response.ok){
        throw new Error
    }
  const data= await response.json()
  console.log(data)

  const weather= data.main.temp_min
  console.log(weather)
  document.getElementById('displayWeather').innerText=weather+"°C"
  } catch (error) {
    console.log(error)
  }
};
