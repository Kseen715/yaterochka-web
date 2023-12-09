import React from "react";

import Header from './Header';
import Footer from './Footer';
import Title from './Service';

function Places() {

    return (
        <div className="App">
            {Title('Точки | ЯТёрочка')}
            <Header />
            <div class="content" style={
                {
                    color: '#ffffff',
                }
            }>
                Places
            </div>
            <Footer />
        </div >
    );
};

export default Places;