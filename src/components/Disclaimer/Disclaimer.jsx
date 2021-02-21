import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './styles';

const Disclaimer = () => {
    const classes = useStyles();
    return ( 
        <>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <div className={classes.root}> 
                <Typography variant='h6' style={{textAlign: 'center'}}>
                Disclaimer
                </Typography>

                <Typography variant='h6'>
                Limitation of Service and Sales

                </Typography>
                
                <Typography variant='body1' component='p'>
                Regarding the nature of our business and the expensive value of hardware components, we reserve the right to deny any purchase of item to any person or group that have malicious intentions.  By purchasing any item, you hereby agree to this potential denial of service.

                </Typography>

                <Typography variant='h6'>
                Identity Validation

                </Typography>

                <Typography variant='body1' component='p'>
                Hunt 4 Hardware has the right to utilize third party systems if required by legal laws. If the information provided flags up as malicious, we reserve the right to enquire for further information regarding either the order and/or the buyer. We also reserve the right to nullify any order if we are not satified with this information. This process potentially influences the delivery date. Upon usage of this site, you agree to this validation if required.

                </Typography>

                <Typography variant='h6'>
                Malicious Purchases

                </Typography>

                <Typography variant='body1' component='p'>
                If a purchase contains an unauthorized debit or credit card, we reserve the right to report this to local authorities. This may result in you being prosecuted to the full extent of the law.

                </Typography>

                <Typography variant='h6'>
                Reverse Engineering

                </Typography>

                <Typography variant='body1' component='p'>
                The hardware products we provide are meant for the buyers usage only. Reverse engineering any product will put yourself at the risk of prosecuted by that particular manufacturer if caught.

                </Typography>

                <Typography variant='h6'>
                Risk of computer viruses

                </Typography>

                <Typography variant='body1' component='p'>
                Computer viruses may be transmitted by email. Hunt 4 Hardware accepts no liability for any damage caused by any virus transmitted by this Website. Web pages cannot be guaranteed to be secure or error-free from haclers. It is possible that information may be intercepted, corrupted, lost, destroyed, arrive late or incomplete, or contain viruses. Hunt 4 Hardware does not accept liability for any errors or omissions in the contents of the overall Hunt 4 Hardware domain.

                </Typography>


                </div>
                </main>
        </>
     );
}
 
export default Disclaimer;