import React from 'react';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { useStyles } from './styles.js';

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    return (
        <React.Fragment>
            <TableRow>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.other_period_description}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell className={`${classes.IncomeTable}__cell-spacing`} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                Income History
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Total</TableCell>
                                        <TableCell>Type</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.incomes.map((historyRow, index) => (
                                        <TableRow key={index}>
                                            <TableCell component="th" scope="row">
                                                {historyRow.other_period_total ?  parseInt(historyRow.other_period_total).toLocaleString('en-US', { style: 'currency', currency: 'USD' }) : "0"}
                                            </TableCell>
                                            <TableCell>{historyRow.type ? historyRow.type : "N/A"}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

export default function IncomeTable({ employeeIncome }) {
    const classes = useStyles();
    return (
        <React.Fragment>
            {employeeIncome ? <React.Fragment>
                <Typography variant="h5" align="center" className={`${classes.IncomeTable}__title-text`}>Income Verification</Typography>
                <TableContainer component={Paper}>
                    <Table aria-label="collapsible table">
                        <TableHead className={`${classes.IncomeTable}__head`}>
                            <TableRow>
                                <TableCell />
                                <TableCell className={`${classes.IncomeTable}__head-text`}>Year</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {employeeIncome.map((row, index) => (
                                <Row key={index} row={row} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </React.Fragment>
                : ""}
        </React.Fragment>

    );
}