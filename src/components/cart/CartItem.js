import { useDispatch, useSelector} from 'react-redux';
import { addItemToCart, removeItemToCart } from '../../store/cart-slice';
import './CartItem.css'
const CartItem = ({ item }) => {
    const { title, quantity, id } = item;
    const products = useSelector((store) => store.product.products);
    const dispatch = useDispatch();
    const handleAddItem = () => {
        dispatch(addItemToCart({
            id,
            name: title
        }))
    }
    const handleRemoveItem = () => {
        dispatch(removeItemToCart(id))
    }
    const [favouriteItem] = products.filter((item)=> item.id === id);
    console.log(favouriteItem)
    return (
        <div className="product-card" index={id}>
            <div className="product-image">
                <img src={favouriteItem.image_url} alt={title} />
            </div>
            <div className="product-details">
                <h3 className="beer-name">{title}</h3>
                <p className="beer-description">{favouriteItem.description}</p>
                <div className="actions">
                <span>{`Number of quantity ${quantity}`}</span>
                    <button onClick={handleRemoveItem}>
                        Remove
                    </button>
                    <button onClick={handleAddItem}>
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}
export default CartItem