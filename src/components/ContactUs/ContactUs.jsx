import React from 'react';

import useStyles from './styles';
import { Grid, Typography, Button, IconButton} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import MailIcon from '@material-ui/icons/Mail';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import NearMeIcon from '@material-ui/icons/NearMe';
import AirportShuttleOutlinedIcon from '@material-ui/icons/AirportShuttleOutlined';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PinterestIcon from '@material-ui/icons/Pinterest';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

const ContactUs = () => {
  const classes = useStyles();

  return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className={classes.root}>
            <Typography variant='h6' style={{textAlign: 'center', width: '100%'}}>Contact Us</Typography>
            <Grid container spacing={3} style={{paddingTop: '5%'}}>

            <Grid xs={12} sm={6} item style={{marginTop:'0',marginRight: 'auto', marginBottom: '0', marginLeft: 'auto', maxWidth: '500px'}}>
                <Typography variant='h6'>GET IN TOUCH WITH US</Typography>
                  <form className={classes.root} noValidate autoComplete="  off">
                    <TextField id="standard" label="Your Name" style={{fontStyle: 'italic'}} defaultValue="" />
                    <TextField id="standard" label="Your Email (Required)" defaultValue="" />
                    <br />
                    <TextField id="standard" label="Your Phone Number" defaultValue="" />
                    <br />
                    <TextField id="outlined-multiline" label="Your Message" multiline rows={8} style={{width: '430px'}} defaultValue="" variant="outlined"/>
                    <br />
                    <Button color='primary' variant="contained" style={{marginTop:'0',marginRight: '0', marginBottom: '10%', marginLeft: '0'}}>Submit</Button>
                  </form>
            </Grid>

            <Grid xs={12} sm={6} item style={{maxWidth: '550px', marginTop:'0',marginRight: 'auto', marginBottom: '0', marginLeft: 'auto'}}>


                <Typography variant='h6'>GET IN TOUCH</Typography>

                <Typography variant='body1' component='p'>
                  Our attention is on you - the client. Through a client first mindset, we innovate and handle Impulse. Please reach out to us if you have any doubts, suggestions, or complaints. You can contact us directly via the links below via email, phone, and social media or use the form given on this website.
                </Typography>

                <Typography variant='h6' style={{marginTop:'2%',marginRight: '0%', marginBottom: '2%', marginLeft: '0%'}}>CONTACT US</Typography>
                <IconButton style={{color: 'white'}}>
                  <MailIcon  />
                  <Typography variant='body1' component='p' style={{textAlign:'left', fontSize: '0.7em'}}>024 1234 5678 <br /> support@hunt4hardware.com</Typography>
                </IconButton>

                <IconButton style={{color: 'white'}}>
                  <QueryBuilderIcon  />
                  <Typography variant='body1' component='p' style={{textAlign:'left', fontSize: '0.7em'}}>Mon - Fri <br /> 10AM - 6PM</Typography>
                </IconButton>

                <IconButton style={{color: 'white'}}>
                  <NearMeIcon  />
                  <Typography variant='body1' component='p' style={{textAlign:'left', fontSize: '0.7em'}}>123 Test Street <br /> London, England </Typography>
                </IconButton>

                <IconButton style={{color: 'white'}}>
                  <AirportShuttleOutlinedIcon  />
                  <Typography variant='body1' component='p' style={{textAlign:'left', fontSize: '0.7em'}}>Free standard shipping <br /> on all orders.</Typography>
                </IconButton>

                
                <div className={classes.socialMediaBtns} style={{textAlign: 'center'}}>
                <IconButton style={{color: 'white'}}>
                  <FacebookIcon style={{transform: 'scale(1.8)'}} />
                </IconButton>

                <IconButton style={{color: 'white'}}>
                  <InstagramIcon style={{transform: 'scale(1.8)'}} />
                </IconButton>

                <IconButton style={{color: 'white'}}>
                  <LinkedInIcon style={{transform: 'scale(1.8)'}} />
                </IconButton>

                <IconButton style={{color: 'white'}}>
                  <PinterestIcon style={{transform: 'scale(1.8)'}} />
                </IconButton>

                <IconButton style={{color: 'white'}}>
                  <TwitterIcon style={{transform: 'scale(1.8)'}} />
                </IconButton>

                <IconButton style={{color: 'white'}}>
                  <YouTubeIcon style={{transform: 'scale(1.8)'}} />
                </IconButton>
                </div>
                </Grid>
            </Grid>

            </div>
      </main>
  );
}
 
export default ContactUs;