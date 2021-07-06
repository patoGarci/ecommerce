import  {React, useContext, useState } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function ItemDetail({item}) {
    // console.log(item.title);
    const initial = 0;
    const [buyQuantity, setbuyQuantity] = useState(initial);

    const context = useContext(CartContext);

    const stockInCart = context.getItemQty(item.id);
    const [maxStock, setMaxStock] = useState(item.stock - stockInCart);
    const availableStock = maxStock - buyQuantity;

    const Stock = () => {
        return (
            <>
                <p className="stock">Available Stock: {availableStock}</p>
                <ItemCount min="0" max={maxStock} value={buyQuantity} onAdd={onAdd} onSubstract={onSubstract} />
                <div className="btn-group">
                    <Link to="/cart" className={`btn--big`}  >GO TO CART</Link>
                    <button onClick={(e) => { onAddToCart(e) }} className={`btn--big ${buyQuantity === 0 ? 'disabled' : ''}`} >ADD TO CART</button>
                </div>
            </>
        )
    }

    const NoStock = () => {
        return <h3 className="appear"> No more stock available </h3>
    }

    const onAdd = (e) => {
        e.preventDefault();
        if(buyQuantity > maxStock){
            setbuyQuantity(maxStock);
        }else{
            setbuyQuantity(buyQuantity + 1);
        }
    };

    const onSubstract = (e) => {
        e.preventDefault();
        if (buyQuantity < initial) {
            setbuyQuantity(initial);
        } else {
            setbuyQuantity(buyQuantity - 1);
        }
    };
    // const IsAvailable = maxStock > 0
    //     ? Stock
    //     : NoStock;

    const onAddToCart = (e) => {
        context.addItem(e, item, buyQuantity);
        setMaxStock(maxStock - buyQuantity);
        setbuyQuantity(0);
    };
    return (
        <div className="card-item-detail">
            <img class="card-img-top" src={item.pictureUrl}/>
            {/* <IsAvailable/> */}
            <ul className="card" style={{"width": "40%", "listStyle": "none"}}>
                {/* <li><img class="card-img-top" src={item.pictureUrl}/></li> */}
                <li>id: {item.id}</li>
                <li>title: {item.title}</li>
                <li>description: {item.description}</li>
                <li>price: {item.price}</li>
                <li>color: {item.color}</li>
                <li>nota: {item.nota}</li>
                <li>
                {buyQuantity===0 ?
                        (<ItemCount stock={5} initial={1} onAdd={onAdd} />) :
                        (<Link to='/cart'><button className="btn btn-primary">Terminar Compra</button></Link>)
                    }
                </li>
            </ul>
        </div>
    )
}
