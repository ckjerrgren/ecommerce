import React from 'react';
import {Grid} from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './style';

const products = [
    { id: 1, name: 'Stroller', description: 'White bugaboo stroller', price: '€10', image: 'https://unsplash.com/photos/ihzhMA2-l4Q' },
    { id: 2, name: 'Hammer', description: 'Standard F5 hammer' , price: '€16' },
    { id: 3, name: 'Sofa', description: 'Blue velvet, good condition Sweef.', price: '€30' },
    { id: 4, name: 'Tent', description: 'Great hikingtent, rooms 5', price: '€15' },

];

const Products = () => {
    const classes = useStyles ( ); 

    return (
    <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product  product={product} />
                </Grid>
            ))}

        </Grid>
    </main>
    )
}

export default Products