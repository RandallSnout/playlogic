import './Collection.css';
import ProductCard from './ProductCard'

export default function RelatedProducts({ related }) {

    return (
        <div className='container md-spacing'>
            <h2 className='text-center w-full'>Related Products</h2>
            <div className="fourColumn">
                {related.map((object, i) => <ProductCard key={i} item={object} />)}
            </div>
        </div>
    )
}