import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography, useMediaQuery } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// import { commerce } from '../../lib/commerce';

import logo from '../../assets/H4H.png'
import useStyles from './styles';

const Navbar = ({totalItems, setSearch}) => {
    const classes = useStyles();
    const location = useLocation();
    const matchesMin = useMediaQuery("(min-width: 720px)");
    const matchesMax = useMediaQuery("(max-width: 719px)");
    const matchesMax2 = useMediaQuery("(max-width: 670px)");
    let FontSize;

    const ITEM_HEIGHT = 48;

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    }

    if (matchesMin) { // if screen is 680px and lower
        FontSize = '1.2em'
    } else { // if screen is 681px and higher
        FontSize = '1em'
    }

    const handleChange = e => {
        setSearch(e.target.value);
    }

    // fetch all categories
    // commerce.categories.list().then(categories => console.log(categories.data))

    // fetching category name
    // commerce.categories.list().then(categories => console.log(categories.data['8'].slug));

    // fetch all products
    // commerce.products.list().then(response => console.log(response.data));

    // get length of product to loop over
    // commerce.products.list().then(response => setAmountOfProducts(response.data.length));

    // fetch product's category
    // commerce.products.list().then(response => response.data['0'].categories['0'].slug);

    // matches product category to selected category
    // commerce.products.list().then(response => response.data['0'].categories['0'].slug)
    // .then((value) => {
    //     if (value === category) {
    //         console.log('matching');
    //     }
    // });

    // console.log('categories select state: ' + category);

    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography component={Link} to='/' variant='h6' className={classes.title} color='inherit'>
                    <img src={logo} alt='Commerce.js' height='25px' className={classes.image} />
                    </Typography>

                    {
                        matchesMax2 ? 
                        <div>
                        <IconButton onClick={handleClick} style={{color:'white', marginLeft: '100px'}}>
                            <MoreVertIcon />
                        </IconButton>
                        <Menu anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                            style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: '20ch'
                        },
                        }}
                        >
                            <MenuItem onClick={handleClose} component={Link} to='/'>
                                Home
                            </MenuItem>
                            <MenuItem onClick={handleClose} component={Link} to='AboutUs'>
                                About Us
                            </MenuItem>
                            <MenuItem onClick={handleClose} component={Link} to='ContactUs'>
                                Contact Us
                            </MenuItem>

                        </Menu>
                    </div> 
                    
                    : <>

                        <Typography style={{fontSize: FontSize}} component={Link} to='/' variant='h6' className={classes.title} color='inherit'>
                        HOME
                        </Typography>

                        <Typography style={{fontSize: FontSize}} component={Link} to='/AboutUs' variant='h6' className={classes.title} color='inherit'>
                        ABOUT US
                        </Typography>

                        <Typography style={{fontSize: FontSize}} component={Link} to='/ContactUs' variant='h6' className={classes.title} color='inherit'>
                        CONTACT US
                        </Typography>

                        </>
                    }

                    <div className={classes.grow} />
                    {
                        location.pathname === '/case' 
                        || location.pathname === '/cpu' || location.pathname === '/gpu'
                        || location.pathname === '/hdd' || location.pathname === '/hsf'
                        || location.pathname === '/motherboard' || location.pathname === '/psu'
                        || location.pathname === '/ram' || location.pathname === '/ssd'
                        ? <input type="text" placeholder="&#128269; Search" className={classes.inputBox} onChange={handleChange} /> : null
                    }



                    <div className={classes.grow} />
                    {   
                    location.pathname === '/' || location.pathname === '/case' 
                    || location.pathname === '/cpu' || location.pathname === '/gpu'
                    || location.pathname === '/hdd' || location.pathname === '/hsf'
                    || location.pathname === '/motherboard' || location.pathname === '/psu'
                    || location.pathname === '/ram' || location.pathname === '/ssd' || location.pathname === '/AboutUs' || location.pathname === '/ContactUs'
                    ? ( 
                    <div className={classes.button}>
                        <IconButton component={Link} to='/cart' aria-label='Show cart items' color='inherit'>
                            <Badge badgeContent={totalItems} color='secondary'>
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div> 
                    ) : null }
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
