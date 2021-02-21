import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './styles';

const ShippingAndReturns = () => {
    const classes = useStyles();
    return ( 
        <>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <div className={classes.root}>

                <Typography variant='h6' style={{textAlign: 'center'}}>
                Shipping and Returns
                </Typography>

                <Typography variant='p' style={{color: 'red'}}>
                Due to the COVID-19 pandemic, shipping delays may occur. You will be notified if your order is affected.

                </Typography>

                <Typography variant='p'>
                Please review your order before confirming your purchase. If you attempt to amend your order 24 hours after the initial purchase, please note that this will significiantly impact the arrival date of your order.
                </Typography>

                <Typography variant='h6'>
                Our delivery timeframes
                
                </Typography>

                <Typography variant='p'>
                All orders are expected to be shipped at the close of business day (5:00 PM GMT) on weekdays. Orders that are recieved during the weekend are shipped at 8:00 PM GMT. All orders made before 12:00 pm will ship out on the same day unless there are inventory conflicts or buyer information disputes. Any orders past the forementioned cut off times will be shipped out the following day.

                </Typography>

                <Typography variant='h6'>
                Potential Shipping Delays

                </Typography>

                <Typography variant='p'>
                Hunt 4 Hardware is not liable for shipping delays caused by external third-party delivery companies. Please see their corresponding website for information regarding possible delays.


                </Typography>

                <Typography variant='h6'>
                Addressing Shipping Charges

                </Typography>
                <Typography variant='p'>
                By default shipments are free unless it states explicitly the total cost of the fees. Our deliveries will be done in a manner that is the most cost efficient to us, the seller at the current time of the order. This manner of calculating this efficency is subject to change based on size, weight, inflation, currency conversion rates and location.

                </Typography>

                <Typography variant='h6'>
                Order disputes

                </Typography>

                <Typography variant='p'>
                If an item is out of stock or a discrepancy occurs with the inventory, the buyer (yourself) will be notified within 24 hours. You will be given the option to either modify your existing order or wait until the current item comes back in stock. During this dispute, if an agreement is not made with the buyer then us as the seller will refund your order.

                </Typography>

                <Typography variant='h6'>
                Returns and Exchanges

                </Typography>
                <Typography variant='p'>
                Hunt 4 Hardware will not accept returned items unless under specific circumstances. However, we will accept agreed upon exchanges within 2 weeks of your purchase, with the notion that yourself as the buyer will pay for the shipping both for the returned item and new, exchanged item.

                </Typography>

                <Typography variant='p'>
                Exchanges will be tested according to what hardware category they fall under (CPU, GPU, RAM, etc). If your item fails this test, it will be returned within an agreed upon time frame.
 
                </Typography>
                <Typography variant='p'>
                In order to begin an exchange, please contact us via the provided information that can be found at the bottom of this page.

                </Typography>

                <Typography variant='h6'>
                Faulty and/or damaged Products

                </Typography>

                <Typography variant='p'>
                Hunt 4 Hardware thoroughly tests its hardware components that it sells. However if the buyer recieves a faulty or damaged item, a full refund will be offered by us. We insist that at the time that the buyer notices any faults, that they take pictures of the item including the actual product and the packaging box. This only applies to items that show no indication of carelessness by the buyer that extends to any damage that could be self-inflicted. Please note that this refund does not apply to any item with a current manufacturer warranty.

                </Typography>

                <Typography variant='h6'>
                Reporting outstanding deliveries

                </Typography>
                <Typography variant='p'>
                All deliveries that are performed by us are usually insured. If the buyer suspects that their order has been lost or stolen, it should be directly reported to us via the contact us page. Following on from this, we will work with the buyer to resolve this issue. During the investigation we will update the buyer and provide a final resolution when the investigation has come to a close.

                </Typography>

                <Typography variant='h6'>
                Return Contact Information

                </Typography>

                <Typography variant='h6'>
                Email: support@hunt4hardware.com
                
                </Typography>
                </div>
                </main>
        </>
     );
}
 
export default ShippingAndReturns;