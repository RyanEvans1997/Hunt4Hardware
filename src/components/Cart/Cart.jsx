import React from 'react';
import { Container, Typography, Button, Grid} from '@material-ui/core';

import useStyles from './styles';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
    const classes = useStyles();

    const EmptyCart = () => (
        <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className={classes.root}>
        <Typography variant='subtitle1' style={{paddingBottom: '250px', textAlign: 'center'}}>
            There are currently no items in your basket.
            <Typography variant='p' style={{display: 'block', paddingTop: '50px'}}>
            Please <a href='/' className={classes.linkHover}>click here </a> to add items to your basket.
            </Typography>
        </Typography>
        </div>
        </main>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant='h4' gutterBottom style={{color: 'white'}}>
                    Subtotal: {cart.subtotal.formatted_with_symbol}
                </Typography>
                <div>
                    <Button className={classes.emptyButton} size='large' type='button' variant='contained' color='secondary' onClick={handleEmptyCart}>
                        Empty Cart
                    </Button>
                    <Button  component={Link} to='/checkout' className={classes.checkoutButton} size='large' type='button' variant='contained' color='primary'>
                        Checkout
                    </Button>
                </div>
            </div>
        </>
    );

    if(!cart.line_items) {
        return 'Loading...'
    }

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant='h6' gutterBottom style={{color: 'white', textAlign:'center'}}>Shopping Basket</Typography>
            { !cart.line_items.length ? <EmptyCart /> : <FilledCart /> }
        </Container>
    )
}

export default Cart;
