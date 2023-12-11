import React from "react";

import Header from './Header';
import TableV from './TableView';
import Footer from './Footer';
import Title from './Service';

import { getData } from "./Service";
import { initRows } from "./TableView";

function Places() {

    return (
        <div className="App">
            {Title('Точки | ЯТёрочка')}
            <Header />
            <div className="content" style={
                {
                    color: '#ffffff',
                }
            }>
                Places
                <div className="table-v">
                    {TableV(initRows)}
                </div>
            </div>
            <Footer />
        </div >
    );
};

export default Places;