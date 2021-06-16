import React, { useEffect,useState } from "react";
import axios from 'axios'

const ApiData=()=>{

    const [data, setData]=useState({})
    useEffect(()=>{
        axios.get('api call url to dispalu data')    
       .then(response=>setData(response.data))
    },[])
    return(
        <div>
		// This is for displaying api data in browser
            <div>{JSON.stringify(data)}</div>

            {/* <div>{JSON.stringify(data.date)}</div>
            <div>{JSON.stringify(data.token)}</div> */}
        </div>
    )
}
export default ApiData