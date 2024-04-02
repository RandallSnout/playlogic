import './Collection.css';
import ProductCard from './ProductCard'

export default function RelatedProducts(props: any) {
    const related = props.related;
    return (
        <div className='container md-spacing'>
            <h2 className='text-center w-full'>Related Products</h2>
            <div className="fourColumn">
                {related.map((object: any, i: any) => <ProductCard key={i} item={object} />)}
            </div>
        </div>
    )
}