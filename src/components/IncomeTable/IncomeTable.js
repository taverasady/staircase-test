import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';
import { useStyles } from './styles.js';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

export default function IncomeTable({ employeeIncome }) {
    const classes = useStyles();

    return (
        <React.Fragment>
            {employeeIncome ? <TableContainer component={Paper}>
                <Table className={classes.IncomeTable} aria-label="customized table">
                    <TableHead>
                        <tr>
                            <StyledTableCell align="left">Year</StyledTableCell>
                            <StyledTableCell align="left">Total</StyledTableCell>
                            <StyledTableCell align="left">Type</StyledTableCell>
                        </tr>
                    </TableHead>
                    <TableBody>
                        {employeeIncome.map((item) => (
                            <StyledTableRow key={item.start_date}>
                                <StyledTableCell align="left">{item.other_period_description}</StyledTableCell>
                                {item.incomes.map((row, i) => (
                                    <React.Fragment key={i}>
                                        <StyledTableCell align="left">{row.other_period_total}</StyledTableCell>
                                        <StyledTableCell align="left">{row.type}</StyledTableCell>
                                    </React.Fragment>
                                ))}
                            </StyledTableRow>
                        ))}
                        {/* {employeeIncome.map((row) => (
                            <StyledTableRow key={row.start_date}>
                                <StyledTableCell align="left">{row.other_period_description}</StyledTableCell>
                                <StyledTableCell align="left">{row.incomes ? row.incomes.other_period_total : ""}</StyledTableCell>
                                <StyledTableCell align="left">{row.incomes ? row.incomes.type : ""}</StyledTableCell>
                            </StyledTableRow>
                        ))} */}
                    </TableBody>
                </Table>
            </TableContainer> : ""}
        </React.Fragment>
    );
}