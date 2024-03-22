import './HeroBanner.css';

export default function HeroBanner() {
    return (
        <div className='heroBanner'>
            <div className='text-center hero-content'>
                <h1 className='headerDisplayText'>SNAP-N-PLAY</h1>
                <h3 className='headerSubText'>Minimalistic toys with unlimited possibilities to play and learn as you grow.</h3>
                <div className='flex button-group'>
                    <button className='button-secondary'>Demo</button>
                    <button className='button-primary'>Shop All</button>
                </div>
            </div>
            <div className='heroImageWrapper'>
                <img src="/images/bus-snap-n-play.png" className='w-full heroImageProduct' alt="hero image of bus" />
                <div className='heroImageSquare'></div>
            </div>
        </div>
    )
}
