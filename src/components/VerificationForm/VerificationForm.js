import React, { useState, useRef } from 'react';
import InputMask from 'react-input-mask';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import DateFnsUtils from '@date-io/date-fns';
import EmployerTable from '../EmployerTable/EmployerTable';
import IncomeTable from "../IncomeTable/IncomeTable"
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { useStyles } from './styles.js';
import { createTransaction, createIncomeCollection, verifyIncome, retrieveIncomeCollection } from "../../requests/IncomeRequests.js";
import { mapFormInfo } from "../../requests/Utils/Utils.js";

const pause = async (milliseconds = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, milliseconds);
  });
}

function VerificationForm() {
  const classes = useStyles();
  const formRef = useRef();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setConctact] = useState("");
  const [address, setAddress] = useState("");
  const [additionalAddress, setAditionalAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [taxPayerIdentifier, setTaxPayerIdentifier] = useState("317-21-0001");
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [employeeHistory, setEmployeeHistory] = useState(null);
  const [employeeIncome, setEmployeeIncome] = useState(null);

  const submitVerification = async () => {
    if (formRef.current.reportValidity()) {
      await initEmploymentVerification();
    }
  };

  const initEmploymentVerification = async () => {
    try {
      const transactionResponse = await createTransaction().then(r => r.json());
      const formInfo = await mapFormInfo({ contact, email, firstName, lastName, dateOfBirth, taxPayerIdentifier, address, additionalAddress, city, state, zip, country });
      const collectionResponse = await createIncomeCollection(transactionResponse.transaction_id, formInfo).then(response => response.json());
      const verifyCollection = await verifyIncome(transactionResponse.transaction_id, collectionResponse.collection_id).then(response => response.json());
      await pause(6000)
      const retrievedCollectionResponse = await retrieveIncomeCollection(transactionResponse.transaction_id, verifyCollection.collection_id).then(response => response.json());
      setEmployeeHistory(retrievedCollectionResponse.data.deal_sets[0].parties[0].roles[0].borrower.employers);
      setEmployeeIncome(retrievedCollectionResponse.data.deal_sets[0].parties[0].roles[0].borrower.current_income);
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <React.Fragment>
      <div className={classes.VerificationForm}>
        <Paper elevation={3} className={`${classes.VerificationForm}__paper`}>
          <Typography variant="h6" gutterBottom>
            Verification Form
              </Typography>
          <form ref={formRef}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First name"
                  fullWidth
                  autoComplete="first-name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  fullWidth
                  autoComplete="last-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  id="email"
                  name="email"
                  label="Email"
                  fullWidth
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  id="contact"
                  name="contact"
                  label="Contact"
                  fullWidth
                  autoComplete="contact"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={contact}
                  onChange={(e) => setConctact(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="address"
                  name="address"
                  label="Address *"
                  fullWidth
                  autoComplete="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="additionalLine"
                  name="additionalLine"
                  label="Aditional Address"
                  fullWidth
                  autoComplete="addres2"
                  value={additionalAddress}
                  onChange={(e) => setAditionalAddress(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputMask
                  mask="999-99-9999"
                  value={taxPayerIdentifier}
                  disabled={false}
                  maskChar=" "
                  onChange={(e) => setTaxPayerIdentifier(e.target.value)}
                >
                  {() => <TextField
                    id="taxPayerIdentifier"
                    name="taxPayerIdentifier"
                    label="Tax payer identifier * "
                    fullWidth
                    autoComplete="taxPayerIdentifier"
                  />}
                </InputMask>

              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="city"
                  name="city"
                  label="City"
                  fullWidth
                  autoComplete="shipping address-level2"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField id="state" name="state" label="State/Province/Region" fullWidth value={state} onChange={(e) => setState(e.target.value)} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="zip"
                  name="zip"
                  label="Zip / Postal code"
                  fullWidth
                  autoComplete="postal-code"
                  inputProps={{ maxLength: 10 }}
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="country"
                  name="country"
                  label="Country"
                  fullWidth
                  autoComplete="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date of birth *"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e)}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item xs={12}>
                <div className={`${classes.VerificationForm}__buttons`}>
                  <Button variant="contained" onClick={submitVerification} className={`${classes.VerificationForm}__button`}>Submit</Button>
                </div>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </div>
      <div className={`${classes.VerificationForm}__table-container`}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
          <Typography variant="h5" align="center" className={`${classes.VerificationForm}__title-text`}>Employment Verification</Typography>
            <EmployerTable employeeHistory={employeeHistory}></EmployerTable>
          </Grid>
          <Grid item xs={6} sm={6}>
          <Typography variant="h5" align="center" className={`${classes.VerificationForm}__title-text`}>Income Verification</Typography>
            <IncomeTable employeeIncome={employeeIncome}/>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default VerificationForm;