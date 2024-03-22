import './CategoryCardStyle.css';

export default function CategoryCard({ iconLocation, title, link, bgColor, icon }) {
    const topRight = { top: -16, right: -16, backgroundColor: `${bgColor}` };
    const bottomRight = { bottom: -16, right: -16, backgroundColor: `${bgColor}` };
    const topLeft = { top: -16, left: -16, backgroundColor: `${bgColor}` };
    return (
        <div className='catCardWrapper'>
            <div className='categoryCardIcon' style={eval(iconLocation)}>{icon ? icon : 'SVG'}</div>
            <div className='categoryCard' style={{ backgroundColor: bgColor }}>
                <h3>{title ? title : 'Title'}</h3>
                <a href={link ? link : '#'} className='simple-link'>View Collection</a>
            </div>
        </div>
    )
}