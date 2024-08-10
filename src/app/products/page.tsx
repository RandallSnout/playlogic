"use client"
import * as React from 'react';
import { useSearchParams } from 'next/navigation'
import ProductCard from "../../../components/Global/ProductCard";
import { productLine } from "../../../Objects/products";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function filterProducts(cat: any) {
    let products = productLine
    if (cat !== 'all') {
        products = productLine.filter((x) => x.category === cat);
    }
    return products
}

export default function Products() {
    const searchParams = useSearchParams()
    const search = searchParams.get('category')
    const [filter, setFilter] = React.useState(search ? search : 'all');
    const [products, setProducts] = React.useState(search ? filterProducts(search) : filterProducts('all'));

    const handleChange = (event: SelectChangeEvent) => {
        setFilter(event.target.value as string);
        let newProds = filterProducts(event.target.value as string);
        setProducts(newProds)
    };

    return (
        <div className='container'>
            <h1 className="pad-lg-x pad-sm-y">Our Products</h1>
            <div className='pad-lg-x pad-sm-y filterBar'>
                <FormControl fullWidth>
                    <InputLabel id="category-select-label">Filter</InputLabel>
                    <Select
                        labelId="category-select-label"
                        id="category-select"
                        value={filter}
                        label="Category"
                        onChange={handleChange}
                    >
                        <MenuItem value={'all'}>All</MenuItem>
                        <MenuItem value={'Snap-N-Play'}>Snap-N-Play</MenuItem>
                        <MenuItem value={'Tactile-Saurus'}>Tactile-Saurus</MenuItem>
                        <MenuItem value={'Car-Switchers'}>Car Switchers</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="fourColumn">
                {products.map((object, i) => <ProductCard key={i} item={object} />)}
            </div>
        </div>
    )
}
