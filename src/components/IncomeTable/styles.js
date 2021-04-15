import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  IncomeTable: {
    minWidth: 700,
    "&__title-text": {
      padding: theme.spacing(2)
    },
    "&__paper": {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(0),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    }
  },
}));

export { useStyles };