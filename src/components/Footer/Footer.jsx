import React from 'react';
import {Typography, Grid, useMediaQuery} from '@material-ui/core';
import useStyles from './styles';


const Footer = () => {
    const classes = useStyles();
    const matches = useMediaQuery("(max-width: 958px)");
    let allFont, footerMargin, copyrightMargin;




    if (matches) { // if screen is 958px and lower
        allFont = '0.9em';
        footerMargin = '0 0 0 auto';
        copyrightMargin = '15px';
    } else { // if screen is 959px and higher
        allFont = '1em';
        footerMargin = '0 0 0 auto';
        copyrightMargin = '30px';
    }

    return ( 
        <>
            <Grid className={classes.appBar} style={{fontSize: allFont}}>
                <Grid id='top-row' container spacing={3} style={{margin: footerMargin, maxWidth: '90%'}}>
                    <Grid item xs={12} sm={6} md={3} style={{padding: '0'}}>
                    <Typography variant='h5' className={classes.headings}> 
                    COMPONENTS
                    </Typography>
                    <ul style={{listStyleType:'none', margin: '0', padding: '0'}}>  
                        <li>
                            <a href='/case'> Case </a> 
                        </li>

                        <li>
                            <a href='/cpu'> CPU </a> 
                        </li>

                        <li> 
                            <a href='/gpu'> GPU </a> 
                        </li>

                        <li> 
                            <a href='/hdd'> HDD </a> 
                        </li>

                        <li> 
                            <a href='/hsf'> HSF </a> 
                        </li>

                        <li> 
                            <a href='/motherboard'> Motherboard </a> 
                        </li>

                        <li> 
                            <a href='/psu'> PSU </a> 
                        </li>

                        <li> 
                            <a href='/ram'> RAM </a> 
                        </li>

                        <li> 
                            <a href='/ssd'> SSD </a>  
                        </li>
                    </ul>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3} style={{padding: '0'}}>
                    <Typography variant='h5' className={classes.headings}> 
                    SOCIAL 
                    </Typography>
                    <ul style={{listStyleType:'none', margin: '0', padding: '0'}}>  
                        <li>
                        <a href='/'> Facebook </a>
                        </li>

                        <li>
                        <a href='/'> Instagram </a>
                        </li>

                        <li>
                        <a href='/'> LinkedIn </a>
                        </li>

                        <li>
                        <a href='/'> Pinterest </a>
                        </li>

                        <li> 
                        <a href='/'> Twitter </a>
                        </li>

                        <li> 
                        <a href='/'> Youtube </a>
                        </li>

                    </ul>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3} style={{padding: '0'}}>
                    <Typography variant='h5' className={classes.headings}> 
                    INFORMATION
                    </Typography>
                    <ul style={{listStyleType:'none', margin: '0', padding: '0'}}>  
                        <li> 
                            <a href='/AboutUs'> About Us </a>
                        </li>
                        <li> 
                            <a href='/ContactUs'> Contact Us </a>
                        </li>
                    </ul>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3} style={{padding: '0'}}>
                    <Typography variant='h5' className={classes.headings}> 
                    SERVICES
                    </Typography>
                    <ul style={{listStyleType:'none', margin: '0', padding: '0'}}>  
                        <li> 
                            <a href='TermsAndConditions'> Terms & Conditions  </a>
                        </li>
                        <li> 
                            <a href='Disclaimer'> Disclaimer </a>
                        </li>
                        <li> 
                            <a href='PrivacyPolicy'> Privacy Policy </a>
                        </li>
                        <li> 
                            <a href='PaymentMethods'> Payment Methods </a>
                        </li>
                        <li> 
                            <a href='ShippingAndReturns'> Shipping & Returns </a>
                        </li>
                    </ul>
                    </Grid>
                </Grid>

                <Grid container spacing={3}>

                <Grid item xs={12}>

                <hr style={{width: '100%'}} />

                <Typography style={{textAlign: 'center', paddingTop: '3%', marginBottom: copyrightMargin, margin: '0 auto 0 auto', width: '100%'}}>
                &copy; Copyright 2021 Hunt 4 Hardware - All Rights Reserved.
                </Typography>
                </Grid>

                </Grid>
            </Grid>
        </>
     );
}
 
export default Footer;