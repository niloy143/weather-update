import React, { useEffect, useState } from 'react';
import Loader from '../../components/Loader';
import capitals from './capitals.json';

const Weather = () => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [capital, setCapital] = useState('Abu Dhabi');

    useEffect(() => {
        document.title = "Weather";
        fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_apiKey}&q=${capital}`)
            .then(res => res.json())
            .then(data => {
                setWeather(data);
                setLoading(false);
            })
            .catch(err => console.log(err))
    }, [capital])

    return (
        loading ? <Loader text /> : <div>

            <div className='flex flex-col-reverse sm:flex-row justify-between items-center'>
                <div className='grow flex justify-center items-center'>
                    <img src={weather?.current?.condition?.icon} alt="" />
                    <h4 className='font-semibold text-lg'>{weather?.current?.condition?.text}</h4>
                </div>
                <select className='select select-bordered' onChange={e => setCapital(e.target.value)}>
                    {
                        capitals.sort().map((capital, i) => <option key={i} value={capital}>{capital}</option>)
                    }
                </select>
            </div>
            <h2 className='text-center font-semibold text-7xl mt-12 flex justify-center'>
                {weather?.current?.temp_c}°<span className='text-xl mt-3'>C</span>
            </h2>
        </div>
    );
};

export default Weather;
