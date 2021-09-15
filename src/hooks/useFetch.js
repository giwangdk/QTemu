import React, {useEffect, useState} from 'react';
import axios from 'axios'

const useFetch = () => {
    const [peoples, setPeoples] = useState([])

    async function fetchAPI() {
        try {
            let {data} = await axios.get('https://swapi.dev/api/people/')
            console.log(data.results)
            const result = await data.results
            setPeoples(result)
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        fetchAPI()
    }, []);

    return{peoples, setPeoples}
}
 
export default useFetch;