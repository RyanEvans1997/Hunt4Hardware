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
}));