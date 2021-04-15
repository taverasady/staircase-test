import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';
import { Typography } from '@material-ui/core';
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
            {employeeIncome ?
                <Paper elevation={3} className={`${classes.IncomeTable}__paper`}>
                    {employeeIncome.map((item, index) => (
                        <React.Fragment key={index}>
                            <Typography variant="h5" align="center" className={`${classes.IncomeTable}__title-text`}>{item.other_period_description}</Typography>
                            <TableContainer component={Paper}>
                                <Table className={classes.IncomeTable} aria-label="customized table">
                                    <TableHead>
                                        <tr>
                                            <StyledTableCell align="left">Total</StyledTableCell>
                                            <StyledTableCell align="left">Type</StyledTableCell>
                                        </tr>
                                    </TableHead>
                                    <TableBody>
                                        {item.incomes.map((row, i) => (
                                            <StyledTableRow key={row.start_date}>
                                                <StyledTableCell align="left">{row.other_period_total}</StyledTableCell>
                                                <StyledTableCell align="left">{row.type ? row.type : "N/A"}</StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </React.Fragment>
                    ))}
                </Paper>
                : ""}

        </React.Fragment>
    );
}