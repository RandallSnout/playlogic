import './Collection.css';
import ProductCard from './ProductCard'

export default function Collection({ featured }) {

    return (
        <div className='container md-spacing'>
            <h2 className='text-center w-full'>Our Products</h2>
            <div className="fourColumn">
                {featured.map((object, i) => <ProductCard key={i} item={object} />)}
            </div>
        </div>
    )
}