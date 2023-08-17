import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, toggleFavItems } from '../../store/cart-slice';
import './productItem.css'
const ProductItem = ({ beer }) => {
    const { id, name, description } = beer;
    const dispatch = useDispatch();
    const toggleCart = useSelector((store) => store.cart.toggle)
    const items = useSelector((store)=> store.cart.items)
    const addToCartItem = () => {
        dispatch(addItemToCart({
            id,
            name,
            description
        }));
    }

    const isAdded = items.find((item)=> item.id === id);
    return (
        <div className={`${isAdded ? 'product-card-active' : ''} product-card`} index={beer.id}>
            <button className='favicon' onClick={addToCartItem}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>

            </button>
            <div className="product-image">
                <img src={beer.image_url} alt={beer.name} />
            </div>
            <div className="product-details">
                <h3 className="beer-name">{beer.name}</h3>
                <p className="beer-description">{beer.description}</p>
            </div>
        </div>
    )
}
export default ProductItem