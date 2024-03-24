'use client'
import React from 'react';
import '../Product.css';
import '../../../../components/Global/ProductCard.css'
import { productLine } from '../../../../Objects/products'
import ProductTabs from '../../../../components/Global/ProductTabs';
import RelatedProducts from '../../../../components/Global/RelatedProducts';

function filterProducts(slug: any) {
    let product = productLine.filter((x) => x.slug === slug);
    return product[0]
}

function findRelated(related: any) {
    let relatedProducts = [];
    for (var i = 0; i < related.length; i++) {
        let product = productLine.filter((x) => x.id === related[i]);
        relatedProducts.push(product[0]);
    }
    return relatedProducts
}

export default function Products({ params }: { params: { slug: string } }) {
    const [custom, setCustom] = React.useState(false);
    const [activeimage, setActiveimage] = React.useState(0);
    const prod = filterProducts(params.slug);
    const relProd = findRelated(prod.related);
    const swapImage = (ind: any) => {
        setActiveimage(ind);
    }

    const togglePrice = () => {
        setCustom(prevCheck => !prevCheck);
    }
    return (
        <div>
            <div className='container-flex'>
                <div className='one-half-col pad-md'>
                    <img src={prod.images[activeimage]} className='w-full' alt="image of bus" />
                    <div className='images-thumbs'>
                        {prod.images.map((object, i) => (
                            <div key={i} className={`thumbnail ${activeimage == i ? 'active' : ''}`} style={{ backgroundImage: `url(${object})` }} onClick={() => swapImage(i)}></div>
                        ))}
                    </div>
                </div>
                <div className='one-half-col pad-md'>
                    <p className='product-category-title'>{prod.category}</p>
                    <h1 className="prod-title">{prod.title}</h1>
                    <p>{prod.description}</p>
                    <div className='toggleContainer'>
                        <span className={`option ${custom ? '' : 'active'}`} onClick={togglePrice}>Regular</span>
                        <span className={`option ${custom ? 'active' : ''}`} onClick={togglePrice}>Customized</span>
                    </div>
                    <p className="product-price">${custom ? prod.prices.custom : prod.prices.regular}</p>
                    <div className='pad-md-y'>
                        <a className='button-primary' href={prod.link}>Buy on Etsy</a>
                    </div>
                </div>
            </div>
            <ProductTabs tabs={prod.tabs} />
            <RelatedProducts related={relProd} />
        </div>
    )
}