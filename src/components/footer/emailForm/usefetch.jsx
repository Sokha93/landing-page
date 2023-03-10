import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        axios.get(url)
        .then(res=> setData(res.data))
        .catch(err=> {
            setError(err)
        })
        .finally(()=>{
            setLoading(false);
        })
    }, [url])

    return{ loading, error, data }
};

export default useFetch;