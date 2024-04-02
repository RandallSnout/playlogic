'use client'
import './ProductCard.css';
import Link from 'next/link'

export default function ProductCard(item: any) {
    let product = item.item
    return (
        <div className='productCardWrapper'>
            <div className='product-image'>
                <img src={product.images.length > 0 ? product.images[0] : '/images/placeholder.jpg'} className='w-full' alt="image of bus" />
            </div>
            <div className='product-card-content'>
                <p className='product-category-title'>{product.category}</p>
                <p className='product-title'>{product.title}</p>
                <p className="product-price">${product.price}</p>
            </div>
            <div className='product-link'>
                <Link className='product-link-button' href={`/product/${product.slug}`}>
                    View
                </Link>
            </div>
        </div>
    )
}