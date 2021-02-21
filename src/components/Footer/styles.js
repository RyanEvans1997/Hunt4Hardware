import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    overflow: 'hidden',
    boxShadow: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    [theme.breakpoints.up('sm')]: {
      minWidth: 'fit-content',
    },
    backgroundColor: 'rgba(41, 40, 39, 1)',
    color: 'white',
    height: '100%',
    '& li': {
      marginTop: '15px',
      marginRight: '0px', 
      marginBottom: '15px', 
      marginLeft: '0px',
      maxWidth: '262.5px'
    },
    '& a:hover': {
      color: 'grey'
    },
    '& a': {
      color: 'white',
      textDecoration: 'none',
      fontFamily: 'Karla, Arial, Helvetica, sans-serif'
    },
  },
  headings: {
    textDecoration: 'underline',
    lineHeight: '50px',
    marginTop: '20px',
    letterSpacing: '1.5px',
    fontSize: '20px',
    fontWeight: '700',
    paddingBottom: '1px',
  }
}));