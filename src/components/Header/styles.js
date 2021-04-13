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
}));

export { useStyles };