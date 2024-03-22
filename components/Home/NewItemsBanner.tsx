import './NewItemsBanner.css';

export default function NewItemBanner({ }) {

    return (
        <div className='bannerWrapper container md-spacing'>
            <div className="banner-image">
                <h3 className='banner-title'>Newly Added</h3>
                <div className="banner-copy">
                    <h2>Tactile-saurus</h2>
                    <p>Sensory mixed material dinosaur toys.</p>
                    <button className='button-primary'>Shop New</button>
                </div>
            </div>
        </div>
    )
}