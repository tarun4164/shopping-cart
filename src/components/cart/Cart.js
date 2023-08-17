import { useSelector, useDispatch } from 'react-redux';
import './Cart.css';
import CartItem from './CartItem';
const Cart = ()=> {
    const items = useSelector((store)=> store.cart.items)
    return (
        <div className="card">
            {
                items.length === 0 && <h3 className='cart-empty'>No item are added into cart</h3>
            }
            {
                items.map((item)=> (
                    <CartItem 
                    key={item.id}
                    item ={
                        {
                            id: item.id,
                            title: item.name,
                            quantity: item.quantity
                        }
                    }
                    />
                ))
            }
        </div>
    )
}

export default Cart;