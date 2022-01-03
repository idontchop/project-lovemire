
import { useState, useEffect } from 'react';
import axios from 'axios'

const AUTHURL = "https://lovemire.com/auth";

/**
 * Quick api custom hook. Gets a Json from supplied url, provides
 * a true/false loading variable.
 * 
 * @param {String} url 
 * @returns 
 */
export const useGetApi = (url) => {

    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(true)

    const callUrl = () => {
        axios.get(url, {responseType: 'json'})
            .then ( r => {
                setResponse(r.data)
                setLoading(false)
            })
            .catch ( e => {
                console.log(e)
                // user will see infinite loading
            });
    };

    useEffect( () => {
        callUrl()
    }, [url])

    return [loading,response]
}

export const usePostApi = (url, payload) => {

    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    const callUrl = () => {
        axios.post ( url, payload )
            .then ( r => {
                setResponse(r.data)
            })
            .catch ( e => {
                setError(e)
            })
            .finally( () => setLoading(false))
    };

    useEffect ( () => {
        callUrl()
    }, [url, payload])

    return [loading, response, error]
}