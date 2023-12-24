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
        field: 'type',
        headerName: 'Тип',
        width: 180,
        editable: true,
    },
    {
        field: 'number',
        headerName: 'Количество',
        width: 170,
        editable: true,
    },
    {
        field: 'product_id',
        headerName: 'ID товара',
        type: 'number',
        align: 'left',
        headerAlign: 'left',
        width: 150,
        editable: true,
    },
    {
        field: 'store_id',
        headerName: 'ID магазина',
        width: 150,
        editable: true,
    },
]

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
                <div className="table-v">
                    {TableV(cols, 'sel/group')}
                </div>
            </div>
            <Footer />
        </div >
    );
};

export default Groups;