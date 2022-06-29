import React, { useEffect, useState } from 'react'
import '../css/style.css'

const WeatherReport = () => {

    const [city, setCity] = useState([]);
    const [search, setSearch] = useState('')
    console.log(search, '===')
    useEffect(() => {
        const fetchApi = async () => {
            const url = //`http://api.weatherstack.com/current?access_key=2286862be51fcade2dfee0b020303d72&query=${search}`
            `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=5c5ed96b9361a5c37efcbaee6a24fe8f`
            const response = await fetch(url)
            const res = await response.json()
            console.log(res)
            setCity(res.main)
        }
        fetchApi();
    }, [search])

    return (
        <>
            <div className='box'>
                <div className="inputData">
                    <input
                        type='search'
                        className='inputField'
                        // value={search}
                        onChange={(e) => { setSearch(e.target.value) }}
                    />
                </div>
                <h1>Weather Report</h1>
                {
                    !city ? (
                        <p>No Data Found</p>
                    ) :
                        <div className="info">
                            <h2>{search}</h2>
                            <h1 className='temp' >{city.temp}°C </h1>
                            <h3>Min:{city.temp}°C  Max:{city.temp}°C</h3>
                        </div>
                }
                

            </div>


        </>
    )
}

export default WeatherReport