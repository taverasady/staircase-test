import React from 'react';
import InputMask from 'react-input-mask';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import DateFnsUtils from '@date-io/date-fns';
import { FormControl } from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { useStyles } from './styles.js';

function VerificationForm() {
  const classes = useStyles();

  // const [firstName, setFirstName] = React.useState({value: "", isValid: false});
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [contact, setConctact] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [additionalAddress, setAditionalAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [zip, setZip] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [taxPayerIdentifier, setTaxPayerIdentifier] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  // const handleFirstNameChange = (e) => {
  //   setFirstName({ value: e.target.value, isValid: e.target.value.length === 0 ? true : false });
  // };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleContactChange = (e) => {
    setConctact(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleAditionalAddressChange = (e) => {
    setAditionalAddress(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  const handleZipChange = (e) => {
    setZip(e.target.value);
  };

  const handleTaxPayerIdentifierChange = (e) => {
    setTaxPayerIdentifier(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const submitVerification = () => {
    if (firstName.length === 0 || lastName.length === 0 || email.length === 0 || contact.length === 0 || address.length === 0 || city.length === 0
      || state.length === 0 || zip.length === 0 || country.length === 0 || taxPayerIdentifier.length === 0) {
      console.log("please fill all inputs")
    } else {

    }
  };

  return (
    <div className={classes.center}>
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="h6" gutterBottom>
          Verification Form
      </Typography>
        <FormControl>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="First name"
                fullWidth
                autoComplete="first-name"
                error={firstName.isValid}
                value={firstName.value}
                onChange={handleFirstNameChange}
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
                onChange={handleLastNameChange}
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
                onChange={handleEmailChange}
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
                value={contact}
                onChange={handleContactChange}
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
                onChange={handleAddressChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputMask
                mask="999-99-9999"
                value={taxPayerIdentifier}
                disabled={false}
                maskChar=" "
                onChange={handleTaxPayerIdentifierChange}
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
                id="additionalLine"
                name="additionalLine"
                label="Aditional Address"
                fullWidth
                autoComplete="addres2"
                value={additionalAddress}
                onChange={handleAditionalAddressChange}
              />
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
                onChange={handleCityChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField id="state" name="state" label="State/Province/Region" fullWidth value={state} onChange={handleStateChange} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="zip"
                name="zip"
                label="Zip / Postal code"
                fullWidth
                autoComplete="shipping postal-code"
                value={zip}
                onChange={handleZipChange}
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
                onChange={handleCountryChange}
              />
            </Grid>
            <Grid item xs={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date of birth *"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.buttons}>
                <Button variant="contained" onClick={submitVerification} className={classes.button}>Submit</Button>
              </div>
            </Grid>
          </Grid>
        </FormControl>
      </Paper>
    </div>
  );
}

export default VerificationForm;