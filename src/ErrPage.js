import React from "react";

import Header from './Header';
import Footer from './Footer';
import Title from './Service';

import './ErrPage.css';


const ErrPage = (props) => {
    return (
        <div className="App">
            {Title('Ошибка | ЯТёрочка')}
            <Header />
            <div class="errpage">
                <text class="errtext" style={
                    {
                        marginTop: '10px',
                        color: '#ffffff',
                        fontSize: '54px',
                    }
                }>
                    Ошибка
                </text>
                <a class="errtext" style={
                    {
                        marginTop: '10px',
                        color: '#ffffff',
                        fontSize: '24px',
                    }
                }>
                    недостаточно прав
                </a>
                <a href='/' class="errtext" style={
                    {
                        marginTop: '10px',
                        color: '#ffffff',
                        fontSize: '32px',
                    }
                }>
                    перейти на главную
                </a>
            </div>

        </div >
    );
};

export default ErrPage;