import React from 'react';
import ItemLayout from '../components/item/ItemLayout';
import ItemDescription from '../components/item/ItemDescription';
import ItemImage from '../components/item/ItemImage';
import { useParams } from "react-router-dom";

import { selectItemById } from '../store/selectors';
import { addToCart } from '../store/actionCreators';
import { connect } from 'react-redux';


const Item = ({ selectItemById, addToCart }) => {
    console.log(selectItemById);
    let { itemId } = useParams();
    console.log(itemId);
    const { id, title, price, description, img } = selectItemById(Number(itemId));
    return (
        <ItemLayout>
            <ItemImage key={id} img={img} />
            <ItemDescription key={id} id={id} title={title} price={price} description={description} addToCart={addToCart} />
        </ItemLayout>
    )
}

const mapStateToProps = (store) => ({
    selectItemById: id => selectItemById(store, id)
});


const mapDispatchToProps = dispatch => ({
    addToCart: (id) => dispatch(addToCart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);

