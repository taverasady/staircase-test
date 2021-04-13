import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    appBarColor: {
        background : '#ffffff'
    },
    logoSize: {
        width: '110px'
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export { useStyles };