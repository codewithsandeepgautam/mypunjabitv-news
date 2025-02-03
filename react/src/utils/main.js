import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function Main() {
    const [data, setData] = useState([]);
    const getLatestData = async (lang) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/news/getnews/en`,);
            setData(response);
        } catch (error) {
            console.log("Error fetching latest news", error);
        }
    };
    console.log("data<<", data);
    useEffect(() => {
        getLatestData();
    }, [])
    console.log("data<<", data)
    return (
        <div>

        </div>
    )
}
