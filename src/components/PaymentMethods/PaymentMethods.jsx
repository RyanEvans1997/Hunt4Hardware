import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './styles';

const PaymentsMethods = () => {
    const classes = useStyles();
    return ( 
        <>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <div className={classes.root}>
                <Typography variant='h6' style={{textAlign: 'center'}}>
                    Payment Methods
                </Typography>
                <Typography variant='body1' component='p'>Hunt 4 Hardware accepts either Debit or Credit Cards.</Typography>

                <Typography variant='body1' component='p'>We currently accept: Visa, Mastercard, American Express.</Typography>

                <Typography variant='body1' component='p'>Due to security concerns, Hunt 4 Hardware does not store payment information on its database and thus repeat purchases will require payment information to be inputted again.</Typography>

                <Typography variant='body1' component='p'>If you have any enquiries regarding the previously mentioned payment methods or wish to pay with another custom payment method, please visit our <a href='/ContactUs' className={classes.contactLink}>Contact Us</a> page. </Typography>
                </div>
                </main>
        </>
     );
}
 
export default PaymentsMethods;