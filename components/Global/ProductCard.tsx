'use client'
import './ProductCard.css';
import Link from 'next/link'

export default function ProductCard({ item }) {

    return (
        <div className='productCardWrapper'>
            <div className='product-image'>
                <img src={item.images[0]} className='w-full' alt="image of bus" />
            </div>
            <div className='product-card-content'>
                <p className='product-category-title'>{item.category}</p>
                <p className='product-title'>{item.title}</p>
                <p className="product-price">${item.price}</p>
            </div>
            <div className='product-link'>
                <Link className='product-link-button' href={`/product/${item.slug}`}>
                    View
                </Link>
            </div>
        </div>
    )
}