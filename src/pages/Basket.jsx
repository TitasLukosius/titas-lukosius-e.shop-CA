import React, { useState, useEffect } from 'react';
import BasketTable from '../components/basket/BasketTable';

const initItems = [
    { id: 1, type: 'strings', title: "Babolat Pure-Drive", price: 1600, description: 'aaa', img:"https://tennishead.net/wp-content/uploads/2019/04/Babolat-Pure-Drive-VS-2019.jpg", href: `/item/id/}` },
    { id: 2, type: 'strings', title: "Babolat Pure-Drive", price: 1200, description: 'aaa', img:"https://img.tennis-warehouse.com/watermark/rs.php?path=PDJR26-1.jpg&nw=296", href: `/item/id/` },
    { id: 3, type: 'strings', title: "Babolat Pure-Drive", price: 600, description: 'aaa', img:"https://tennishead.net/wp-content/uploads/2019/04/Babolat-Pure-Drive-VS-2019.jpg", href: `/item/id/` },
]

const Basket = () => {

    return (
        <div>
            <BasketTable items={initItems}/>
        </div>
    )
}

export default Basket;