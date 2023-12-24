import React from "react";

import Header from './Header';
import Footer from './Footer';
import Title from './Service';
import TableV from './TableView';

const cols = [
    {
        field: 'id',
        headerName: 'ID',
        width: 100,
        editable: true,
    },
    {
        field: 'name',
        headerName: 'Имя',
        width: 180,
        editable: true,
    },
    {
        field: 'job',
        headerName: 'Должность',
        width: 170,
        editable: true,
    },
    {
        field: 'phone',
        headerName: 'Телефон',
        // type: 'number',
        align: 'left',
        headerAlign: 'left',
        width: 200,
        editable: true,
    },
    {
        field: 'store_id',
        headerName: 'ID магазина',
        width: 150,
        editable: true,
    },
]

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
                <div className="table-v">
                    {TableV(cols, 'sel/employee')}
                </div>
            </div>
            <Footer />
        </div >
    );
};

export default Workers;