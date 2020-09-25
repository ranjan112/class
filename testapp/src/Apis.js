import React,{useEffect,useState} from 'react';
import axios from 'axios'
export const Apis = () => {
    const [countries, setCountries] = useState([]);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {axios.get('https://jsonplaceholder.typicode.com/photos')
        
            .then(res => {
                setCountries(res.data);
                setLoad(true);
            })
            .catch(err => {
                setError(err.message);
                setLoad(true)
            })
    }, []);
    
    
    if (load) {
        return (<ul>
            {error ? <li>{error.message}</li> : countries.map((country, index) => <li key={index}><text>{country.title}</text></li>)}
        </ul>);
    } else {
        return (
            <div>
                Loading...
            </div>
        );
    }
};
export default Apis;