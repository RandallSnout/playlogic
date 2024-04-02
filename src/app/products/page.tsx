"use client"
import * as React from 'react';
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
    const [filter, setFilter] = React.useState('');
    const [products, setProducts] = React.useState(productLine);
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
                    <InputLabel id="demo-simple-select-label">Filter</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={filter}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={'all'}>All</MenuItem>
                        <MenuItem value={'Snap-N-Play'}>Snap-N-Play</MenuItem>
                        <MenuItem value={'Tactile-Saurus'}>Tactile-Saurus</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="fourColumn">
                {products.map((object, i) => <ProductCard key={i} item={object} />)}
            </div>
        </div>
    )
}
