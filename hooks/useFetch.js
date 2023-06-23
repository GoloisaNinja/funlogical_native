import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = (endpoint) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://sbbadideasapi-production.up.railway.app/api/v1/${endpoint}`
    }

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.request(options);
            setData(response.data);
            setIsLoading(false);
        } catch(error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        fetchData().then();
    }, [])

    const refetch = () => {
        setIsLoading(true)
        fetchData().then();
    }

    return { data, isLoading, error, refetch }
}

export default useFetch;