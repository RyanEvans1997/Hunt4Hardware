import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';


import Product from './Product/Product';
import useStyles from './styles';
// import { commerce } from '../../lib/commerce';

const Products = ({products, onAddToCart, category, setCategory, search}) => {
    const classes = useStyles();

    useEffect(() => {
        if (window.location.href.includes('localhost')) {
            // console.log(window.location.href.slice(22,));
            setCategory(window.location.href.slice(22,));
        } else {
            console.log('non-dev');
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // filters product based on what category is currently selected
    // console.log(category);
    const filteredArray = products.filter(product => 
        product.categories[0].slug === category
    )
    // console.log(products);

    const filteredSearch = filteredArray.filter(product => 
        product.name.toLowerCase().includes(search.toString().toLowerCase())
    )

    return (
        <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
            {
            filteredSearch.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product  product={product} onAddToCart={onAddToCart} category={category} />
                </Grid>
                
            ))
            }
        </Grid>
    </main>
    );
}

export default Products;