import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  VerificationForm: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    "&__paper": {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
    "&__table-container": {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
    "&__buttons": {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    "&__button": {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
      backgroundColor: '#000000',
      color: '#ffff',
      "&:hover": {
        backgroundColor: '#131212',
        color: '#ffff',
      }
    },
    "&__loading": {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  },
}));

export { useStyles };