"use client"
import React from 'react';
import { Slide } from 'react-slideshow-image';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import 'react-slideshow-image/dist/styles.css';
import './Slider.css';

export default function HeroBanner() {
    const properties = {
        prevArrow: <button className='left-arrow'><ChevronLeftIcon /></button>,
        nextArrow: <button className='right-arrow'><ChevronRightIcon /></button>
    }
    return (
        <div className='productSlider container'>
            <div className='backgroundSide'>
                <svg width="347" height="372" viewBox="0 0 347 372" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M21.1615 122.309C28.0129 138.251 41.6801 149.168 57.2961 153.118C56.5406 160.48 57.5959 168.131 60.7252 175.412C70.5257 198.217 96.9571 208.758 119.762 198.958C131.478 193.923 139.958 184.497 144.104 173.429C154.989 178.037 167.663 178.372 179.379 173.336C202.184 163.536 212.726 137.104 202.925 114.3C199.754 106.921 194.842 100.826 188.874 96.289C196.575 82.3056 197.975 65.0426 191.184 49.2402C179.496 22.0456 147.976 9.47443 120.782 21.1616C106.693 27.2165 96.5293 38.5944 91.6301 51.9362C78.5787 46.3089 63.3289 45.8527 49.2401 51.9076C22.0455 63.5947 9.47434 95.1146 21.1615 122.309Z" fill="#D8E9ED" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M204.003 219.418C200.67 231.856 203.619 244.498 210.904 253.976C207.081 257.918 204.18 262.862 202.658 268.543C197.891 286.335 208.449 304.623 226.242 309.391C235.383 311.84 244.656 310.244 252.158 305.699C256.383 313.386 263.615 319.405 272.756 321.855C290.549 326.622 308.837 316.063 313.605 298.271C315.147 292.514 315.085 286.705 313.693 281.319C324.606 276.708 333.354 267.292 336.657 254.962C342.343 233.745 329.751 211.936 308.533 206.251C297.541 203.305 286.39 205.265 277.405 210.789C272.385 201.513 263.708 194.239 252.715 191.294C231.498 185.609 209.689 198.2 204.003 219.418Z" fill="#D8E9ED" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M40.0315 315.105C42.8964 324.025 49.6825 330.594 57.8734 333.518C57.0898 337.436 57.2646 341.602 58.573 345.676C62.671 358.436 76.3369 365.458 89.0968 361.36C95.6527 359.255 100.694 354.623 103.49 348.887C109.104 351.922 115.899 352.752 122.455 350.647C135.215 346.549 142.237 332.883 138.139 320.123C136.813 315.994 134.485 312.466 131.511 309.722C136.367 302.601 138.005 293.394 135.165 284.552C130.279 269.335 113.982 260.962 98.7653 265.848C90.8821 268.38 84.8354 273.975 81.5178 280.894C74.7913 277.2 66.618 276.173 58.7347 278.705C43.5184 283.591 35.1447 299.888 40.0315 315.105Z" fill="#D8E9ED" />
                </svg>
            </div>
            <div className='slidewrapper'>
                <Slide {...properties}>
                    <div className="each-slide-effect">
                        <div>
                            <div className='sliderImage'><img src="/images/bus-snap-n-play.png" className='w-full' alt="hero image of bus" /></div>
                            <div className='sliderContent'>
                                <h6>TOP SELLING SETS</h6>
                                <h2>Snap-N-Play</h2>
                                <a href='/products?category=Snap-N-Play' className='button-secondary'>Shop All</a>
                            </div>
                        </div>
                    </div>
                    <div className="each-slide-effect">
                        <div>
                            <div className='sliderImage'><img src="/images/car-switchers/CS-Construction-Set.png" className='w-full' alt="hero image of bus" /></div>
                            <div className='sliderContent'>
                                <h6>COMING SOON</h6>
                                <h2>Car-Switchers</h2>
                                <a href='/products?category=Car-Switchers' className='button-secondary'>Check them out</a>
                            </div>
                        </div>
                    </div>
                    <div className="each-slide-effect">
                        <div>
                            <div className='sliderImage'><img src="/images/tactile-saurus/spinosaurus-3.png" className='w-full' alt="hero image of bus" /></div>
                            <div className='sliderContent'>
                                <h6>COMING SOON</h6>
                                <h2>Tactile-Saurus</h2>
                                <a href='/products?category=Tactile-Saurus' className='button-secondary'>Check them out</a>
                            </div>
                        </div>
                    </div>
                </Slide>
            </div>
        </div>
    )
}
