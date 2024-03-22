import ProductCard from "../../../components/Global/ProductCard";
import { productLine } from "../../../Objects/products";
export default function Products() {
    return (
        <div className='container'>
            <h1 className="pad-lg">Our Products</h1>
            <div className="fourColumn">
                {productLine.map((object, i) => <ProductCard key={i} item={object} />)}
            </div>
        </div>
    )
}
