import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles'

const Product = ( { product }) => {
    const classes = useStyles()
    return (
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={product.image} title={Product.name} />
                <CardContent>
                    <div className={classes.cardContent}>
                        {/* H5 is the size and gutterbottom means it willl have space att the bottom  */}
                        <Typography variant="h5" gutterBottom>
                            {product.name}
                        </Typography>
                    
                        <Typography variant="h5">
                            {product.price}
                        </Typography>
                    </div>
                    <Typography variant="body" color="textSecondary">
                        {product.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label="rent it">
                        <AddShoppingCart />
                    </IconButton>
                </CardActions>
            </Card>
    )
}

export default Product
