import { /*useState,*/ useEffect } from "react";
// import { Routes, Route, Link } from 'react-router-dom'
import axios from "axios";
// import { useNavigate } from "react-router-dom";


export function Title(ttl) {
    useEffect(() => {
        document.title = ttl;
    }, [ttl]);
}

function getCookie(name) {
    const cookieArr = document.cookie.split(";");

    for (let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");

        if (name === cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }

    return null;
}
// https://anapioficeandfire.com/api/characters/583
export const apiURL = "http://localhost:8000/";
export const endURL = "?format=json";
export const headers = {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
    'X-CSRFToken': getCookie('csrftoken')
};


export async function getData(midURL) {
    const baseURL = `${apiURL}${midURL}${endURL}`;
    const response = await axios.get(`${baseURL}`, {
        headers: {
            headers,
        },
        withCredentials: true
    });
    // console.log(response.data);
    return response.data;
}


export default Title;