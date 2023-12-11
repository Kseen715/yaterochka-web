import { /*useState,*/ useEffect } from "react";
// import { Routes, Route, Link } from 'react-router-dom'
import axios from "axios";
// import { useNavigate } from "react-router-dom";


export function Title(ttl) {
    useEffect(() => {
        document.title = ttl;
    }, [ttl]);
}

export const baseURL = "https://anapioficeandfire.com/api/characters/583";
export const headers = {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With"
};


// const [menus, setMenus] = useState([]);
// const navigate = useNavigate();

export function getData() {
    axios
        .get(`${baseURL}`, {
            headers: {
                headers,
            },
        })
        .then((res) => {
            return res.data;
        })
}

export default Title;