import './Collection.css';
import ProductCard from './ProductCard'
import { productLine } from '../../Objects/products'

function findRelated(related: any) {
    let relatedProducts = [];
    for (var i = 0; i < related.length; i++) {
        let product = productLine.filter((x) => x.id === related[i]);
        relatedProducts.push(product[0]);
    }
    return relatedProducts
}

export default function Collection(featured: any) {
    const featuredProd = findRelated(featured.featured);
    console.log('Featured Products List')
    console.log(featuredProd)
    return (
        <div className='container md-spacing'>
            <h2 className='text-center w-full'>Our Products</h2>
            <div className="fourColumn">
                {featuredProd.map((object, i) => <ProductCard key={i} item={object} />)}
            </div>
        </div>
    )
}
