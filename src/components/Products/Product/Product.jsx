import React, { useState } from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import Modal from '@material-ui/core/Modal';
import useStyles from './styles';
import { productDetails } from './database';
import Carousel from 'react-material-ui-carousel';
import {Paper} from '@material-ui/core';

function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}


const Product = ({ product, onAddToCart, category}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [modalStyle] = useState(getModalStyle);
    let productInfo = [];
    let productHeaders = [];

    switch (category) {
        case 'case':
            productHeaders = ['Name','Brand','Product Dimensions','Item Model Number','Manufacturer','Series','Color','Side Panel',
                                'Maximum Front Fans','Maximum Rear Fans','Maximum Top Fans','Front Fan Diameters',
                                'Rear Fans Installed','Liquid Cooling Allowed','Motherboard Compatability','Supported HDD Sizes',
                                'Number of HDDS','Material','Item Weight','Number of USB Ports']

            productInfo = ['name','brand','productDimensions', 'itemModelNumber', 'manufacturer', 'series', 'color', 'sidePanel', 'maximumFrontFans',
                            'maximumRearFans','maximumTopFans','frontFanDiameters','rearFansInstalled','LiquidCoolingAllowed','numberOfUSBports','supportedHDDsizes',
                            'numberOfHDDs','Material', 'itemWeight', 'numberOfUSBports']
            break;

        case 'cpu':

            productHeaders = ['Name','Brand','Product Dimensions','Item Model Number','Manufacturer','Series','CPU Model','CPU Speed','Processor Count','Processor Socket','Primary Cache Size','Secondary Cache Size','Wattage','Core','Threads','GHZ Boost','Unlocked','Contains Thermal Paste','Onboard Graphics','PCIe Version']

            productInfo = ['name','brand','productDimensions','itemModelNumber',
                            'manufacturer','series','CPUmodel','CPUspeed','processorCount',
                            'processorSocket','primaryCacheSize','secondaryCacheSize',
                            'wattage','cores','threads','GHZboost','unlocked',
                            'containsThermalPaste','onboardGraphics','PCIeVersion']
            break;

        case 'gpu':

            productHeaders = ['Name','Brand','Product Dimensions','Item Model Number','Manufacturer','Series','Video Output','Graphics Coprocessor','Graphics Chipset Brand','Graphics RAM Type','Graphics RAM Size','Graphics Card Description','Graphics Card Interface','Memory Clock Speed','Core Clock Speed','Amount of Fans','Display Port','HDMI','Overclockable','Item Weight']

            productInfo = ['name','brand','productDimensions','itemModelNumber','manufacturer','series','videoOutput','graphicsCoprocessor','graphicsChipset','graphicsRAMtype','graphicsRAMsize','graphicsCardDescription','graphicsCardInterface','memoryClockSpeed','coreClockSpeed','amountOfFans','displayPort','HDMI','overclockable','itemWeight']
            break;

        case 'hdd':

            productHeaders = ['Name','Brand','Product Dimensions','Item Model Number','Manufacturer','Series','Color','Form Factor','Hard Drive Size','Hard Disk Description','Wattage','Power Source','Revolution Per Minute','Hardware Interface','Read Speed','Write Speed','Cache Size','Warranty','Compatible Devices','SATA Cable Included']
            productInfo = ['name','brand','productDimensions','itemModelNumber','manufacturer','series','color','formFactor','hardDriveSize','hardDiskDescription','wattage','powerSource','revolutionsPerMinute','hardwareInterface','readSpeed','writeSpeed','cacheSize','warranty','compatibleDevices','SATAcableIncluded']
            break;     

        case 'hsf':
            productHeaders = ['Name','Brand','Product Dimensions','Item Model Number','Manufacturer','Series','Color','Intel CPU Socket','AMD CPU Socket','Heatsink','Wattage','LED/RGB','Fan Speed','Fan Noise Level','Cooling Type','Compatible Devices','Material','Thermal Paste Included','Warranty','Item Weight']

            productInfo = ['name','brand','productDimensions','itemModelNumber','manufacturer','series','color','intelCPUsocket','amdCPUsocket','heatsink','wattage','LED','fanSpeed','fanNoiseLevel','coolingType','compatibleDevices','material','thermalPasteIncluded','warranty','itemWeight']
            break;

        case 'motherboard':

            productHeaders = ['Name','Brand','Product Dimensions','Batteries','Item Model Number', 'Manufacturer',
                                'Series','Color','Form Factor','Processor Socket','Memory Technology',
                                'Computer Memory Type','Maximum Memory Supported','Graphics Chipset Brand',
                                'Graphics Card Description','Graphics Card Interface','Connectivity Type',
                                'Wireless Type','Number of USB ports','number of HDMI Ports']


            productInfo = ['name', 'brand', 'productDimensions', 'batteries', 'itemModelNumber', 'manufacturer', 'series', 'color', 'formFactor',
                            'processorSocket', 'memoryTechnology', 'computerMemoryType', 'maximumMemorySupported', 'graphicsChipsetBrand', 'graphicsCardDescription',
                            'graphicsCardInterface', 'connectivityType', 'wirelessType', 'numberOfUSBports', 'numberOfHDMIports']
            break;

        case 'psu':

            productHeaders = ['Name','Brand','Product Dimensions','Output Wattage','Input Wattage','Item Model Number','Manufacturer','Series','Color','Form Factor','Power Supply Design','Efficiency','Voltage','Operating Temperature','Batteries Included','Fan Bearing','Fan Control','Cable Free','Warranty','Item Weight']
            productInfo = ['name','brand','productDimensions','outputWattage','inputWattage','itemModelNumber','manufacturer','series','color','formFactor','powerSupplyDesign','efficiency','voltage','operatingTemperature','batteriesIncluded','fanBearing','fanControl','cableFree','warranty','itemWeight']
            break;

        case 'ram':

            productHeaders = ['Name','Brand','Product Dimensions','Item Model Number','Manufacturer','Series','Color','Processor Count','RAM Size','Memory Technology','Computer Memory Type','Memory Clock Speed','Size','Voltage','Memory Speed','Model Year','Operating System','Batteries Included','Warranty','Item Weight']
            productInfo = ['name','brand','productDimensions','itemModelNumber','manufacturer','series','color','processorCount','RAMsize','memoryTechnology','computerMemoryType','memoryClockSpeed','size','voltage','memorySpeed','modelYear','operatingSystem','batteriesIncluded','warranty','itemWeight']
            break;   

        case 'ssd':

            productHeaders = ['Name','Brand','Product Dimensions','Item Model Number','Manufacturer','Series','Color','Form Factor','Hard Drive Size','Hard Disk Description','Wattage','Power Source','Revolutions Per Minute','Hardware Interface','Read Speed','Write Speed','Cache Size','Warranty','Compatible Devices','SATA Cable Included']
            productInfo = ['name','brand','productDimensions','itemModelNumber','manufacturer','series','color','formFactor','hardDriveSize','hardDiskDescription','wattage','powerSource','revolutionsPerMinute','hardwareInterface','readSpeed','writeSpeed','cacheSize','warranty','compatibleDevices','SATAcableIncluded']
            break;   

        default: 
            break;

    }

    
    const handleOpen = () => {
        setOpen(true);
      };
    
    const handleClose = () => {
        setOpen(false);
    };

    const getProductName = productDetails.map(function(allProducts) {
        return allProducts.name;
    })

    function renderProduct(productName, property) {
        if(getProductName.includes(productName)) {
            let getIndex = getProductName.indexOf(productName)
            if(productDetails[getIndex].hasOwnProperty(property)) {
                return productDetails[getIndex][property]
            }
            return 'N/A'
        } 
    }

    let items = [
        {
            name: product.assets[0].id,
            url: product.assets[0].url
        },
        {
            name: product.assets[1].id,
            url: product.assets[1].url
        },
        {
            name: product.assets[2].id,
            url: product.assets[2].url
        },
        {
            name: product.assets[3].id,
            url: product.assets[3].url
        },
        {
            name: product.assets[4].id,
            url: product.assets[4].url
        },
    ]

    console.log(product.assets)

    function Item(props)
    {
    return (
        <Paper className={classes.itemPaper}>
            <img height= '50%' width='50%' src={props.item.url} alt ='' /> 
        </Paper>
    )
    }

      const ModalBody = (
        <>
            <div style={modalStyle} className={classes.paper}>
            <Carousel className={classes.carousel}>
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
                </Carousel>
            </div>
            <div className={classes.desc}>
                <h2>
                {renderProduct(product.name, productInfo[0])}
                </h2>
                <h4>Product Information</h4>   

                    <table className={classes.tables}>
                    <tbody >
                        <tr>
                            <th>
                                {productHeaders[1]}
                            </th>
                            <td>
                                {renderProduct(product.name, productInfo[1])}
                            </td>
                        </tr>
                        <tr >
                            <th >
                            {productHeaders[2]}
                            </th>
                            <td>
                            {renderProduct(product.name, productInfo[2])}
                            </td>
                        </tr>
                        <tr >
                            <th>
                            {productHeaders[3]}
                            </th>
                            <td>
                            {renderProduct(product.name, productInfo[3])}
                            </td>
                        </tr>
                        <tr >
                            <th>
                            {productHeaders[4]}
                            </th>
                            <td>
                            {renderProduct(product.name, productInfo[4])}
                            </td>
                        </tr>
                        <tr >
                            <th>
                            {productHeaders[5]}
                            </th>
                            <td>
                            {renderProduct(product.name, productInfo[5])}
                            </td>
                        </tr>
                        <tr >
                            <th>
                            {productHeaders[6]}
                            </th>
                            <td>
                            {renderProduct(product.name, productInfo[6])}
                            </td>
                        </tr>
                        <tr >
                            <th>
                            {productHeaders[7]}
                            </th>
                            <td>
                            {renderProduct(product.name, productInfo[7])}
                            </td>
                        </tr>
                        <tr >
                            <th>
                            {productHeaders[8]}
                            </th>
                            <td>
                            {renderProduct(product.name, productInfo[8])}
                            </td>
                        </tr>
                        <tr >
                            <th>
                            {productHeaders[9]}
                            </th>
                            <td>
                            {renderProduct(product.name, productInfo[9])}
                            </td>
                        </tr>
                        <tr >
                            <th>
                            {productHeaders[10]}
                            </th>
                            <td>
                            {renderProduct(product.name, productInfo[10])}
                            </td>
                        </tr>
                        <tr >
                            <th>
                            {productHeaders[11]}
                            </th>
                            <td>
                            {renderProduct(product.name, productInfo[11])}
                            </td>
                        </tr>
                        <tr >
                            <th>
                            {productHeaders[12]}
                            </th>
                            <td>
                            {renderProduct(product.name, productInfo[12])}
                            </td>
                        </tr>
                        <tr >
                            <th>
                            {productHeaders[13]}
                            </th>
                            <td>
                            {renderProduct(product.name, productInfo[13])}
                            </td>
                        </tr>
                        <tr >
                            <th>
                            {productHeaders[14]}
                            </th>
                            <td>
                            {renderProduct(product.name, productInfo[14])}
                            </td>
                        </tr>
                        <tr >
                            <th>
                            {productHeaders[15]}
                            </th>
                            <td>
                            {renderProduct(product.name, productInfo[15])}
                            </td>
                        </tr>
                        <tr >
                            <th>
                            {productHeaders[16]}
                            </th>
                            <td>
                            {renderProduct(product.name, productInfo[16])}
                            </td>
                        </tr>
                        <tr >
                            <th>
                            {productHeaders[17]}
                            </th>
                            <td>
                            {renderProduct(product.name, productInfo[17])}
                            </td>
                        </tr>
                        <tr>
                            <th>
                            {productHeaders[18]}
                            </th>
                            <td>
                            {renderProduct(product.name, productInfo[18])}
                            </td>
                        </tr>
                        <tr>
                            <th>
                            {productHeaders[19]}
                            </th>
                            <td>
                            {renderProduct(product.name, productInfo[19])}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
      );

    return (
        <>
            <div>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={product.media.source} title={product.name}/>
                <CardContent style={{height: '50px'}}>
                    <div className={classes.cardContent}>
                        <Typography variant='h5' gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography variant='h5' gutterBottom>
                            {product.price.formatted_with_symbol}
                        </Typography>
                    </div>
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                <button className={classes.btn} type='button' onClick={handleOpen}>
                        Click here for more details
                    </button>
                    <Modal
                    open={open}
                    onClose={handleClose}
                    >
                        <div>
                            {ModalBody}
                        </div>
                    </Modal>
                    <IconButton  style={{color: 'white'}} aria-label='Add to cart' onClick={() => onAddToCart(product.id, 1)}>
                        <AddShoppingCart />
                    </IconButton>
                </CardActions>
        
            </Card>
            </div>
        </>
    )
}

export default Product
