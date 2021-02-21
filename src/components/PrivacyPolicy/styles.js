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
    marginLeft: '20%',
    maxWidth: '1000px',
    fontFamily: 'Karla, MS Sans Serif, Geneva, sans-serif',
    '& .MuiTypography-root': {
      marginBottom: '2%',
      display: 'block',
      color: 'rgb(194,194,194)'
      },
    '& .MuiTypography-h6': {
        marginBottom: '2%',
        display: 'block',
        color: 'white',
        fontFamily: 'Karla, MS Sans Serif, Geneva, sans-serif'
      },
      '& li': {
        color: 'rgb(194,194,194)',
        fontFamily: 'Karla, MS Sans Serif, Geneva, sans-serif'
      }
  }
}));