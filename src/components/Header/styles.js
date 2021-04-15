import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    Header: {
        background: '#ffffff',
        "&__image": {
            width: '110px'
        }
    },
}));

export { useStyles };