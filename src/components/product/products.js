import ProductItem from './productItem';
import './products.css'
const Products = ({products})=> {
    return (
        <div className="products product-card-container">
            {
                products.map((product)=> <ProductItem beer={product}/>)
            }
        </div>
    )
}

export default Products;