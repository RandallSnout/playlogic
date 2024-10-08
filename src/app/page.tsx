import { Inter, Montserrat } from 'next/font/google';
import HeroBanner from '../../components/Home/HeroBanner';
import Slider from '../../components/Slider/Slider';
import CategoryCard from '../../components/Home/CategoryCard';
import VehicleIcon from '../../components/Icons/VehiclesIcon';
import AnimalsIcon from '../../components/Icons/AnimalsIcon';
import Collection from '../../components/Global/Collection';
import NewItemBanner from '../../components/Home/NewItemsBanner';
import { featuredProducts } from '../../Objects/products';

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
})

const montserrat = Montserrat({
  weight: '600',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <main className={`${inter.className} ${montserrat.className}`}>
      <HeroBanner />
      <div className='threeColumn container'>
        <CategoryCard iconLocation="topRight" title="Vehicles" link="/products" bgColor='#E1F0F4' icon={<VehicleIcon />} align='left' />
        <CategoryCard iconLocation="bottomRight" title="Puzzles" link="/products" bgColor='#E5F4E1' icon={<VehicleIcon />} align='left' />
        <CategoryCard iconLocation="topLeft" title="Animals" link="/products?category=Tactile-Saurus" bgColor='#F0E1F4' icon={<AnimalsIcon />} align='right' />
      </div>
      <Slider />
      <Collection featured={featuredProducts} />
      <NewItemBanner />
    </main>
  )
}
