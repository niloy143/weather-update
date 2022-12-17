import React, { useEffect, useState } from 'react';
import Loader from '../../components/Loader';
import capitals from './capitals.json';

const Weather = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [capital, setCapital] = useState('Abu Dhabi');

    useEffect(() => {
        document.title = "Weather";
        fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_apiKey}&q=${capital}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(err => console.log(err))
    }, [capital])

    return (
        loading ? <Loader text /> : <div>
            <div>
                {console.log(data)}
            </div>
            <div className='flex justify-between items-center'>
                <h3 className='text-center grow text-3xl font-semibold'>{data.location.country}</h3>
                <select className='select select-bordered' onChange={e => setCapital(e.target.value)}>
                    {
                        capitals.sort().map((capital, i) => <option key={i} value={capital}>{capital}</option>)
                    }
                </select>
            </div>
        </div>
    );
};

export default Weather;