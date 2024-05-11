import React from 'react';
import '../Product.css';
import '../../../../components/Global/ProductCard.css'
import { productLine } from '../../../../Objects/products';
import ProductTemplate from './ProductTemplate';
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

    let prod = filterProducts(params.slug);
    const relProd = findRelated(prod.related);

    return (
        <div>
            <ProductTemplate prod={prod} />
            <ProductTabs tabs={prod.tabs} />
            <RelatedProducts related={relProd} />
        </div>
    )
}

export async function generateStaticParams() {
    return productLine.map((p) => ({
        slug: p.slug,
    }))
}