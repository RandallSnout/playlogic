import { ReactNode } from 'react';
import './CategoryCardStyle.css';

export default function CategoryCard({ iconLocation, title, link, bgColor, icon, align }: { iconLocation: string, title: string, link: string, bgColor: string, icon: ReactNode, align: string }) {
    const topRight = { top: -16, right: -16, backgroundColor: `${bgColor}`, textAlign: 'left' };
    const bottomRight = { bottom: -16, right: -16, backgroundColor: `${bgColor}`, textAlign: 'left' };
    const topLeft = { top: -16, left: -16, backgroundColor: `${bgColor}`, textAlign: 'right' };
    return (
        <div className='catCardWrapper'>
            <div className='categoryCardIcon' style={eval(iconLocation)}>{icon ? icon : 'SVG'}</div>
            <div className={`categoryCard ${align}`} style={{ backgroundColor: bgColor }}>
                <h3>{title ? title : 'Title'}</h3>
                <a href={link ? link : '#'} className='simple-link'>View Collection</a>
            </div>
        </div>
    )
}