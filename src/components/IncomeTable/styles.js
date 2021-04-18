import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  IncomeTable: {
    "&__title-text": {
      padding: theme.spacing(2)
    },
    "&__head": {
      backgroundColor: theme.palette.common.black,
    },
    "&__head-text": {
      color: theme.palette.common.white,
    },
    "&__cell-spacing": {
      paddingBottom: 0,
      paddingTop: 0
    },
  },
}));

export { useStyles };