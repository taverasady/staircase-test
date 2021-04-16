import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    EmployerTable: {
        minWidth: 700,
        "&__title-text": {
            padding: theme.spacing(2)
        },
    },
}));

export { useStyles };