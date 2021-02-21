import React, { useState, useEffect } from 'react';
// import Products from './components/Products/Products';
// import Navbar from './components/Navbar/Navbar';
import { Products, Navbar, Cart, Checkout, HardwareCategories, AboutUs, ContactUs, Footer, TermsAndConditions, Disclaimer, PrivacyPolicy, PaymentMethods,
ShippingAndReturns } from './components';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { commerce } from './lib/commerce';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [category, setCategory] = useState('gpu');
    const [hardwareComponents, setHardwareComponents] = useState([]);
    const[search, setSearch] = useState([]);

    const theme = createMuiTheme({
        typography: {
          fontFamily: [
            'Karla',
            'MS Sans Serif',
            'Geneva',
            'sans-serif'
          ].join(','),
        }
      });

    // const getdata = commerce.products.list().then(response => console.log('products category: ' + response.data['0'].categories['0'].slug));

    const fetchProducts = async () => {
        const { data } = await commerce.products.list({
            limit: 250
        });
        setProducts(data);
    }

    const fetchHardwareComponents = () => {
        const data = [
            {
                id: 1,
                name: 'case',
            },
            {
                id: 2,
                name: 'cpu',
            },
            {   
                id: 3,
                name: 'gpu',
            },
            {   
                id: 4,
                name: 'hdd',
            },
            {
                id: 5,
                name: 'hsf',
            },
            {
                id: 6,
                name: 'motherboard',
            },
            {
                id: 7,
                name: 'psu',
            },
            {
                id: 8,
                name: 'ram',
            },
            {
                id: 9,
                name: 'ssd',
            }
        ];
        setHardwareComponents(data);
    }

    const fetchCart = async () => {
        const cart = await commerce.cart.retrieve();
        setCart(cart);
    }

    const handleAddToCart = async (productId, quantity) => {
        const {cart} = await commerce.cart.add(productId, quantity);
        setCart(cart);
    }

    const handleUpdateCartQty = async(productId, quantity) => {
        const {cart} = await commerce.cart.update(productId, { quantity });
        setCart(cart);
    }

    const handleRemoveFromCart = async(productId) => {
        const { cart } = await commerce.cart.remove(productId);
        setCart(cart);
    }

    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty();
        setCart(cart);
    }

    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();
        setCart(newCart);
    }

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
            setOrder(incomingOrder);
            refreshCart();
        } catch (error) {
            setErrorMessage(error.data.error.message);
        }
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
        fetchHardwareComponents();
    }, []);

    return (
        <ThemeProvider theme={theme}>
        <Router>
                <Navbar totalItems={cart.total_items} category={category} setCategory={setCategory} setSearch={setSearch} />
                <Switch>
                    <Route exact path='/'>
                        <HardwareCategories hardwareComponents={hardwareComponents} />
                    </Route>
                    <Route exact path='/cart'>
                        <Cart cart={cart} 
                        handleUpdateCartQty={handleUpdateCartQty}
                        handleRemoveFromCart={handleRemoveFromCart}
                        handleEmptyCart={handleEmptyCart}
                        />
                    </Route>
                    <Route exact path='/checkout'>
                        <Checkout cart={cart}
                        order={order}
                        onCaptureCheckout={handleCaptureCheckout}
                        error={errorMessage}    
                        />
                    </Route>
                    <Route exact path='/AboutUs'>
                        <AboutUs />
                    </Route>
                    <Route exact path='/ContactUs'>
                        <ContactUs />
                    </Route>
                    <Route exact path='/Disclaimer'>
                        <Disclaimer />
                    </Route>
                    <Route exact path='/PaymentMethods'>
                        <PaymentMethods />
                    </Route>
                    <Route exact path='/PrivacyPolicy'>
                        <PrivacyPolicy />
                    </Route>
                    <Route exact path='/ShippingAndReturns'>
                        <ShippingAndReturns />
                    </Route>
                    <Route exact path='/TermsAndConditions'>
                        <TermsAndConditions />
                    </Route>
                    <Route exact path='/:id'>
                        <Products products={products} onAddToCart={handleAddToCart} category={category} setCategory={setCategory} search={search} />
                    </Route>
                </Switch>
                <Footer />
        </Router>
        </ThemeProvider>
    );
}

export default App;
