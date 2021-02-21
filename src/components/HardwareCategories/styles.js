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
  },
  containerDiv: {
    '&:hover': {
      backgroundColor: '#3f3f40'
    },
    display: 'inline-block',
    verticalAlign: 'top',
    textAlign: 'center',
    height: '35vh',
    width: '10vh',
    color: 'white',
    fontFamily: 'Karla, Arial, Helvetica, sans-serif'
  },
  caption: {
    display: 'block'
  }
}));