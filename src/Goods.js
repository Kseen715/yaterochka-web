import React from "react";

import Header from './Header';
import Footer from './Footer';
import Title from './Service';

function Goods() {

    return (
        <div className="App">
            {Title('Товары | ЯТёрочка')}
            <Header />
            <div class="content" style={
                {
                    color: '#ffffff',
                }
            }>
                Goods
            </div>
            <Footer />
        </div >
    );
};

export default Goods;