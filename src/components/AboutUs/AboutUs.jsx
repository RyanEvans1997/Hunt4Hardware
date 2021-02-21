import { Grid, Typography, useMediaQuery} from '@material-ui/core';
import React from 'react';

import useStyles from './styles';
import hardwareStore from '../../assets/hardwareStoreMontageBlend.png';

const AboutUs = () => {
    const classes = useStyles();
    const matches = useMediaQuery("(max-width: 1275px)");
    let currentDisplay, maximumWidth, FontSize;

    if (matches) { // if 1298 and lower
        currentDisplay = 'none';
        maximumWidth = '100%';
    } else { // if 1299 and higher
        currentDisplay = 'inline-block';
        maximumWidth = '550px';
    }

    return (
        <main className={classes.content}>
        <div className={classes.toolbar}/>
        
        <Typography variant='h5' style={{textAlign: 'center', color: 'white', margin: '50px 0 50px 0'}}>Hunt 4 Hardware - UK'S NEWEST COMPUTER HARDWARE ECOMMERCE PLATFORM!</Typography>

        <div className={classes.root} >
            <Grid container spacing={3} style={{paddingTop: '2%'}}>

            <Grid xs={6}>
                <img src={hardwareStore} alt='' style={{paddingTop:'3%', width: '72%', height: 'auto', verticalAlign: 'middle', paddingLeft: '150px', display: currentDisplay}} />
            </Grid>

            <Grid md={12} lg={6} style={{maxWidth: maximumWidth, paddingLeft: '50px', textAlign:'justify'}}>

                <Typography variant='h6' style={{color: 'white'}}>ABOUT US</Typography>

                <Typography className='allText' variant='p' style={{width: maximumWidth, display: 'inline-block', width: '100%'}}>
                    It should be delightfully evident the moment you stumble on Hunt 4 Hardware that we are not your usual Ecommerce website. Our fascination with ideally ordered stock, simple and beautiful hardware architecture, award-winning customer care, and our assured price matching guarantee are some of the many aspects that set us apart from the competition.
                </Typography>

                <Typography variant='p' style={{width: maximumWidth}}>
                    We thoroughally believe that you, the customer are the secret our success. Just a few of the values we hold dear are being true, being honest, and being equal. Our growing team is made up of hardware enthusiasts scattered around both our London and Birmingham facilities who have been specifically chosen to suit our family and provide our clients with a special experience. We are confident in claiming that we are the best ecommerce website that handles hardware in the UK as we believe our core values allow us to thrive by retaining the majority of our consumers, alongside expanding our horizon and appealing to new customers on a daily basis. We all know that profit is the steering wheel behind all businesses, but by priortizing people first in our company, we've created a comfortable culture for success. This is done by priding ourselves on paying our employees a healthy wage whilst offering the lowest possible price for our customers in relation to our competitors.

                </Typography>

                <Typography variant='p' style={{width: maximumWidth}}>
                    Hunt 4 Hardware is a growing brand with the goal of being a house hold name in the computer hardware selling industry.  In addition, we are deeply emerged and involved in the programming community. In the following years, we plan to expand with more retail stores nationwide and our groundbreaking online Hunt 4 Hardware store in 2021 .
                </Typography>

                <Typography variant='p' style={{width: maximumWidth}}>
                    Our team is not one to talk the talk – we’d much rather walk the walk. But, after all this is our about page!  We encourage you to step through our doors and hold us to the values we preach about. We’d love your honest feedback. We appreciate all the support we have received over the years and continue to receive that has allowed us to grow and continue to do so.  We pledge to stay true to our values and continue to create jobs and practice the utmost business ethics.
                </Typography>

                <Typography variant='h6' style={{color: 'white'}}>
                    HOW HUNT 4 HARDWARE CAME TO FRUITION
                </Typography>

                <Typography variant='p' style={{width: maximumWidth}}>
                    In 2021, a freshly graduated software developer desired to create a satisfactory piece of work for his portfolio. After creating a few mocks and stubs, the idea went from a simple web design to a fully functioning ecommerce website that is production-level ready.
                    
                </Typography>

                <Typography variant='p'>
                    The next step for Hunt 4 Hardware was finding an ideal location to set up a potential retail store. We decided on the following factors: a place that encouraged the most amount of revenue in comparsion to costs, what is most convenient to our customers and an aesthetically pleasing position near a well known high-street, preferably in the Midlands to extend our view.

                </Typography>

                <Typography variant='p'>
                To best serve our valued clients, we are constantly fixing, adjusting, and developing product range, technology, and store architecture.
                </Typography>
                </Grid>
            </Grid>
        </div>
        </main>
    );
}
 
export default AboutUs;