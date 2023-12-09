import React from "react";

import Header from './Header';
import Footer from './Footer';
import Title from './Service';

function History() {

    return (
        <div className="App">
            {Title('История покупок | ЯТёрочка')}
            <Header />
            <div class="content" style={
                {
                    color: '#ffffff',
                }
            }>
                History
            </div>
            <Footer />
        </div >
    );
};

export default History;