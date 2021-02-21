import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: '#1C1C1D',
    padding: theme.spacing(3),
  },
  
  root: {
    flexGrow: 1,
    boxSizing: 'border-box',
    color: 'white',
    fontFamily: 'Karla, MS Sans Serif, Geneva, sans-serif',
    '& .MuiInputBase-root': {
      color: 'white',
      marginBottom: '50px',
      marginRight: '30px'
    },
    '& .MuiFormLabel-root': {
      color: 'white',
    },
    '& .MuiGrid-root': {
      flexGrow: 1
    },
    '& .MuiSvgIcon-root': {
      paddingRight: '20px'
    }
  },
  socialMediaBtns: {
    marginTop: '50px'
  }
}));