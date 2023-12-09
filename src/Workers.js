import React from "react";

import Header from './Header';
import Footer from './Footer';
import Title from './Service';

function Workers() {

    return (
        <div className="App">
            {Title('Работники | ЯТёрочка')}
            <Header />
            <div class="content" style={
                {
                    color: '#ffffff',
                }
            }>
                Workers
            </div>
            <Footer />
        </div >
    );
};

export default Workers;