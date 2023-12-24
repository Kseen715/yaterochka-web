import React from "react";

import Header from './Header';
import Footer from './Footer';
import Title from './Service';
import TableV from './TableView';
// class Product(models.Model):
//     expiration_date = models.DateField()
//     price = models.IntegerField()
const cols = [
    {
        field: 'id',
        headerName: 'ID',
        width: 100,
        editable: true,
    },
    {
        field: 'expiration_date',
        headerName: 'Срок годности',
        width: 180,
        editable: true,
    },
    {
        field: 'price',
        headerName: 'Цена',
        type: 'number',
        align: 'left',
        headerAlign: 'left',
        width: 150,
        editable: true,
    },
]

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
                <div className="table-v">
                    {TableV(cols, 'sel/product')}
                </div>
            </div>
            <Footer />
        </div >
    );
};

export default Goods;