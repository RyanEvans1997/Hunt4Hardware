import React from 'react';
import { Grid, Link } from '@material-ui/core';

import useStyles from './styles';
// import { commerce } from '../../lib/commerce';
import genericCase from '../../assets/GenericCase.png';
import cpu from '../../assets/GenericCPU.png';
import gpu from '../../assets/GenericGPU.png';
import hdd from '../../assets/GenericHDD.png';
import hsf from '../../assets/GenericHSF.png';
import mobo from '../../assets/GenericMobo.png';
import psu from '../../assets/GenericPSU.png';
import ram from '../../assets/GenericRAM.png';
import ssd from '../../assets/GenericSSD.png';


const HardwareCategories = ({hardwareComponents}) => {
    const classes = useStyles();

    const imageRender = (image) => {
        switch(image) {
            case 'case':
                return genericCase;
            case 'cpu':
                return cpu;
            case 'gpu':
                return gpu;
            case 'hdd':
                return hdd;
            case 'hsf':
                return hsf;
            case 'motherboard':
                return mobo;
            case 'psu':
                return psu;
            case 'ram':
                return ram;
            case 'ssd':
                return ssd;
            default:
                return gpu;
        }
    }

    return (
        <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
            {
            hardwareComponents.map((category) => (
                <Grid item key={category.id} xs={12} sm={6} md={4} lg={3} style={{color: 'white', paddingTop:'3%'}} className={classes.containerDiv}>
                    <Link href={category.name} style={{textDecoration: 'none'}}>
                        <img src={imageRender(category.name)} alt='' style={{height: '150px', width: '150px'}} />
                            <span style={{color: 'white', padding: '4% 0'}} className={classes.caption}>{category.name.toUpperCase()}</span>
                    </Link>
                </Grid>
            ))
            }
        </Grid>
    </main>
    );
}

export default HardwareCategories;