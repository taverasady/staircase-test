import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
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

export default function EmployerTable({ employeeHistory }) {
    const classes = useStyles();

    return (
        <React.Fragment>

            {employeeHistory ?
                <React.Fragment>
                    <Typography variant="h5" align="center" className={`${classes.EmployerTable}__title-text`}>Employment Verification</Typography>
                    <TableContainer component={Paper}>
                        <Table className={classes.EmployerTable} aria-label="customized table">
                            <TableHead>
                                <tr>
                                    <StyledTableCell align="left">Legal entity name</StyledTableCell>
                                    <StyledTableCell align="left">Start date</StyledTableCell>
                                    <StyledTableCell align="left">Status type</StyledTableCell>
                                    <StyledTableCell align="left">Verification date</StyledTableCell>
                                    <StyledTableCell align="left">Worker classification type</StyledTableCell>
                                </tr>
                            </TableHead>
                            <TableBody>
                                {employeeHistory.map((row) => (
                                    <StyledTableRow key={row.start_date}>
                                        <StyledTableCell align="left">{row.legal_entity_name}</StyledTableCell>
                                        <StyledTableCell align="left">{row.start_date}</StyledTableCell>
                                        <StyledTableCell align="left">{row.status_type}</StyledTableCell>
                                        <StyledTableCell align="left">{row.verification ? row.verification.verification_date : ""}</StyledTableCell>
                                        <StyledTableCell align="left">{row.worker_classification_type}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </React.Fragment> : ""}
        </React.Fragment>
    );
}