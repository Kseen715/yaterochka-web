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
        field: 'date',
        headerName: 'Дата',
        width: 180,
        editable: true,
    },
    {
        field: 'time',
        headerName: 'Время',
        width: 170,
        editable: true,
    },
    {
        field: 'total',
        headerName: 'Итого',
        type: 'number',
        align: 'left',
        headerAlign: 'left',
        width: 200,
        editable: true,
    },
    {
        field: 'product_group_id',
        headerName: 'Группа',
        width: 150,
        editable: true,
    },
    {
        field: 'store_id',
        headerName: 'ID магазина',
        width: 150,
        editable: true,
    },
    {
        field: 'number_sold_group',
        headerName: 'Продано',
        width: 150,
        editable: true,
    },
]


function History() {
    return (
        <div className="App">
            {Title('История покупок | ЯТёрочка')}
            <Header />
            <div className="content" style={
                {
                    color: '#ffffff',
                }
            }>
                <div className="table-v">
                    {TableV(cols, 'sel/check')}
                </div>
            </div>
            <Footer />
        </div >
    );
};

export default History;