import './about-style.css';

export default function AboutUs() {
    return (
        <main className="container">
            <h1 className="pad-lg">We Love Toys!</h1>
            <div className="about-banner">
                <img className='about-photo' src="/images/placeholder.svg" alt="Family Owned - Founder Justin and Sarah working on toys." />
                <div className="pad-lg about-story">
                    <h2>Original hand made toys using minimal design and mixed material ingredients.</h2>
                    <p>As Toy Designers we strived to create items that enhance learning and imagination. At PlayLogic toys is a mixed material Waldorf style toy line. Using minimal design and hand made techniques all toys are made by hand along with 3D printing technology. All the toys are original designs created by toy industry experts looking to create one of a kind experiences. PlayLogic is a family run business with craft at the heart of it.</p>
                </div>
            </div>
            <div className="row-flex">
                <div className="pad-sm one-half-col">
                    <h4>Our Mission</h4>
                    <p className="h2">To create minimal line of educational toys that can enhance play and grow knowledge.</p>
                </div>
                <div className="pad-sm one-half-col">
                    <h4>Our Mission</h4>
                    <p className="h2">To create minimal line of educational toys that can enhance play and grow knowledge.</p>
                </div>
            </div>
            <div className="row">
                <h2 className="text-center w-full">Our Story</h2>
            </div>
            <div className="row align-center mob-stack-reverse">
                <div className="pad-sm one-half-col">
                    <img className="w-full" src="/images/history-2020.png" alt="Concept images story 2020" />
                </div>
                <div className="pad-sm one-half-col flex-column gap-xs">
                    <h4 className="marg-none">How it Started</h4>
                    <h3 className="h2 marg-none">2020</h3>
                    <p className="marg-none">Designing a simple bus shape sorter for our daughter when she was born the initial idea was born. Through the excitement of creating the bs toy and seeing our daughter enjoy it we set out to turn it into a a company.</p>
                </div>
            </div>
            <div className="row align-center mob-stack">
                <div className="pad-sm one-half-col flex-column gap-xs">
                    <h4 className="marg-none">How It Grew</h4>
                    <h3 className="h2 marg-none">2021</h3>
                    <p className="marg-none">Through iteration of design concepts creating a mixed material version of the shape sorter vehicle we branched outside the bus. We started concept work for new vehicles to create a line fo shape sorters that widens the product line. </p>
                </div>
                <div className="pad-sm one-half-col">
                    <img className="w-full" src="/images/history-2021.png" alt="Concept images story 2020" />
                </div>
            </div>
            <div className="row align-center mob-stack-reverse">
                <div className="pad-sm one-half-col">
                    <img className="w-full" src="/images/history-2022.png" alt="Concept images story 2020" />
                </div>
                <div className="pad-sm one-half-col flex-column gap-xs">
                    <h4 className="marg-none">How It Launched</h4>
                    <h3 className="h2 marg-none">2022</h3>
                    <p className="marg-none">After completing the designs for four fun vehicles we launched the product line on Etsy beginning our journey. Coming from the toy industry we finally got the chance to run our own company.</p>
                </div>
            </div>
            <div className="row align-center mob-stack">
                <div className="pad-sm one-half-col flex-column gap-xs">
                    <h4 className="marg-none">Growing</h4>
                    <h3 className="h2 marg-none">2024</h3>
                    <p className="marg-none">Through new ideas more toys were grown. Expanding more options to the PlayLogic Toys line we added the Tactile-Saurus and the Car-Swappers to the family. </p>
                </div>
                <div className="pad-sm one-half-col">
                    <img className="w-full" src="/images/history-2024.png" alt="Concept images story 2020" />
                </div>
            </div>
        </main>
    )
}
