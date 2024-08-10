import Link from 'next/link'
import './NewItemsBanner.css';

export default function NewItemBanner({ }) {

    return (
        <div className='newBannerParent'>
            <div className='bannerWrapper'>
                <div className="banner-image">
                    <h3 className='banner-title'>Newly Added</h3>
                    <div className="banner-copy">
                        <h2>Tactile-saurus</h2>
                        <p>Sensory mixed material dinosaur toys.</p>
                        <Link className='button-primary' href="/products?category=Tactile-Saurus">Shop New</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}