import React from "react";

import Header from './Header';
import Footer from './Footer';
import Title from './Service';

import Cat from './imgs/cat.png';


const Home = (props) => {
    return (
        <div className="App">
            {Title('Главная | ЯТёрочка')}
            <Header />

            <div class="content">
                <img
                    width={700}
                    src={Cat}
                    alt='cat'
                    class='cat'
                />
            </div>

            <Footer />
        </div >
    );
};

export default Home;