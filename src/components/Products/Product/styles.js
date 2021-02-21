import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    backgroundColor: '#262628',
    color: 'white',
  },
  media: {
    paddingTop: '100%', // 16:9
  },
  modalMedia: {
    position: 'absolute',
    width: '40%',
    height: '35%',
    left: '25%',
    top: '3%',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 16px',
    alignItems: 'center'
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  [theme.breakpoints.up('md')]: {
    desc: {
      color: 'white',
      position: 'absolute',
      top: '40%',
      left: '25%',
      width: '50%',
      textAlign: 'left'
    },
    tables: {
      borderCollapse: 'collapse',
      '& tr': {
        borderTop: '1px solid #666',
        borderBottom: '1px solid #666',
      },
      '& tr th': {
        paddingLeft: '2%',
        paddingRight: '200px',
        backgroundColor: '#111',
        whiteSpace: 'nowrap',
        fontWeight: '500',
        width: '70%'
      },
      '& tr td': {
        paddingLeft: '2%',
        paddingRight: '200px',
        lineHeight: '0px',
        whiteSpace: 'nowrap',
        width: '100%'
      }
    },
    paper: {
      position: 'absolute',
      width: '30%',
      height: '75%',
      backgroundColor: 'rgba(38,38,40,0.95)',
      border: '2px solid #000',
      padding: '5% 13%',
      color: 'white'
    },
  },
  [theme.breakpoints.down('sm')]: {
    desc: {
      color: 'white',
      position: 'absolute',
      top: '40%',
      left: '15%',
      width: '50%',
      textAlign: 'left'
    },
    tables: {
      borderCollapse: 'collapse',
      '& tr': {
        borderTop: '1px solid #666',
        borderBottom: '1px solid #666',
      },
      '& tr th': {
        paddingLeft: '10px',
        paddingRight: '150px',
        backgroundColor: '#111',
        whiteSpace: 'nowrap',
        fontWeight: '500'
      },
      '& tr td': {
        paddingLeft: '10px',
        paddingRight: '150px',
        lineHeight: '0px',
        whiteSpace: 'nowrap'
      }
    },
    paper: {
      position: 'absolute',
      width: '60%',
      height: '75%',
      backgroundColor: 'rgba(38,38,40,0.95)',
      border: '2px solid #000',
      padding: '5% 13%',
      color: 'white'
    },
  },
  btn: {
    fontWeight: '700',
    color: 'white',
    backgroundColor: 'Transparent',
    backgroundRepeat: 'no-repeat',
    cursor: 'pointer',
    borderColor: 'gray',
    borderRadius: '5px',
    outline: 'none'
  },
  carousel: {
    right: '15%',
    bottom: '10%',
    width: '125%'
  },
  itemPaper: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'rgba(194, 190, 190, 0.1)',
  }
}));