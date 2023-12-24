import React from "react";

import Header from './Header';
import TableV from './TableView';
import Footer from './Footer';
import Title from './Service';


const cols = [
    {
        field: 'id',
        headerName: 'ID',
        width: 100,
        editable: true,
    },
    {
        field: 'store_name',
        headerName: 'Название',
        width: 180,
        editable: true,
    },
    {
        field: 'city',
        headerName: 'Город',
        width: 170,
        editable: true,
    },
    {
        field: 'address',
        headerName: 'Адрес',
        width: 200,
        editable: true,
    },
    {
        field: 'phone',
        headerName: 'Телефон',
        width: 150,
        editable: true,
    },
]

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
                <div className="table-v">
                    {TableV(cols, "sel/store")}
                </div>
            </div>
            <Footer />
        </div >
    );
};

export default Places;