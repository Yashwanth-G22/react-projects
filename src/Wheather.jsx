import React , { useEffect , useState }from 'react'
import { useRef } from 'react'
import './Style_Wheather.css'

function Wheather() {
    const [wheatherData , setwheatherData] = useState({})
    let [ city , setcity] = useState("")
    const cityName=useRef()

    useEffect(()=>{
        let URL=`https://api.openweathermap.org/data/2.5/weather?q=${city ? city : city = 'bengaluru'}&appid=c0d30e86b1ca3c7c5af702d91bd57bc7`
        fetch(URL).then(a=>a.json()).then(b=>{
            console.log(b)
            setwheatherData(b)
        })
    },[city])

    const cityNameSearch=(e)=>{
        setcity(cityName.current.value)
        cityName.current.value=''
    }
  return (
    <div>
      <div id='container'>
        <input type="text" id='input' placeholder='Enter City Name' ref={cityName}/>
        <button onClick={(e)=>{cityNameSearch(e)}}>Search</button>
      </div>

  <div className='name'>
    <h1>{wheatherData ?.name}</h1>
    <div id='lan'>
        <h2>Latitude : {wheatherData?.coord?.lat}</h2>
        <h2>Longitude : {wheatherData?.coord?.lon}</h2>
    </div>
    <div>
        <h2>Temp.Max : {wheatherData ?.main?.temp_max}</h2>
        <h2>Temp.Min : {wheatherData ?.main?.temp_min}</h2>
    </div>
    <div>
    <h3>Speed : {wheatherData?.wind?.speed}</h3>
    <h3>deg : {wheatherData?.wind?.deg}</h3>
    </div>
  </div>
    </div>
  )
}

export default Wheather
