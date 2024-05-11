'use client'
import React from 'react';
import '../Product.css';
import '../../../../components/Global/ProductCard.css'

export default function ProductTemplate(props: any) {
    const [custom, setCustom] = React.useState(false);
    const [activeimage, setActiveimage] = React.useState(0);
    const prod = props.prod;
    const swapImage = (ind: any) => {
        setActiveimage(ind);
    }

    const togglePrice = () => {
        setCustom(prevCheck => !prevCheck);
    }
    return (
        <div className='container-flex'>
            <div className='one-half-col pad-md'>
                <img src={prod.images[activeimage]} className='w-full' alt="image of bus" />
                <div className='images-thumbs'>
                    {prod.images.map((object: any, i: number) => (
                        <div key={i} className={`thumbnail ${activeimage == i ? 'active' : ''}`} style={{ backgroundImage: `url(${object})` }} onClick={() => swapImage(i)}></div>
                    ))}
                </div>
            </div>
            <div className='one-half-col pad-md'>
                <p className='product-category-title'>{prod.category}</p>
                <h1 className="prod-title">{prod.title}</h1>
                <p>{prod.description}</p>
                {prod.prices ? (<div>
                    <div className='toggleContainer'>
                        <span className={`option ${custom ? '' : 'active'}`} onClick={togglePrice}>Regular</span>
                        <span className={`option ${custom ? 'active' : ''}`} onClick={togglePrice}>Customized</span>
                    </div>
                    <p className="product-price">${custom ? prod.prices.custom : prod.prices.regular}</p>
                </div>) : <p className="product-price">${prod.price}</p>}
                <div className='pad-md-y'>
                    <a className='button-primary' href={prod.link}>Buy on Etsy</a>
                </div>
            </div>
        </div>
    )
}