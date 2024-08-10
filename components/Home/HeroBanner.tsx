import Link from 'next/link'
import './HeroBanner.css';

export default function HeroBanner() {
    return (
        <div className='heroBanner'>
            <div className='hero-content-wrapper'>
                <div className='text-center'>
                    <div className='hero-content'>
                        <h1 className='headerDisplayText'>SNAP-N-PLAY</h1>
                        <h3 className='headerSubText'>Minimalistic toys with unlimited possibilities to play and learn as you grow.</h3>
                        <hr />
                    </div>
                    <div className='mobile-hero'>
                        <img
                            src="/images/hero-rv-scene-mobile.jpg"
                            alt="Picture of the author"
                            className='w-full'
                        />
                    </div>
                    <div className='hero-content'>
                        <div className='flex button-group'>
                            <Link href='/products' className='button-primary'>Shop All</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='heroImageWrapper'>
                <img src="/images/bus-snap-n-play.png" className='w-full heroImageProduct' alt="hero image of bus" />
                <div className='heroImageSquare'></div>
            </div> */}
        </div >
    )
}
