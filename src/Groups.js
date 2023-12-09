import React from "react";

import Header from './Header';
import Footer from './Footer';
import Title from './Service';

function Groups() {

    return (
        <div className="App">
            {Title('Группы товаров | ЯТёрочка')}
            <Header />
            <div class="content" style={
                {
                    color: '#ffffff',
                }
            }>
                Groups
            </div>
            <Footer />
        </div >
    );
};

export default Groups;