import React, { useState, useRef } from 'react';
import InputMask from 'react-input-mask';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { useStyles } from './styles.js';

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
  const [taxPayerIdentifier, setTaxPayerIdentifier] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(new Date());

  const createTransaction = () => {
    return fetch(`${process.env.REACT_APP_API_URL}/borrower/employment/transactions`, {
      method: 'post',
      headers: new Headers({
        'x-api-key': process.env.REACT_APP_API_KEY,
        'Content-Type': 'application/x-www-form-urlencoded'
      }),
    });
  };

  const createCollection = (transactionId, formInfo) => {
    return fetch(`${process.env.REACT_APP_API_URL}/borrower/employment/transactions/${transactionId}/collections`, {
      method: 'post',
      headers: new Headers({
        'x-api-key': process.env.REACT_APP_API_KEY,
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(formInfo)
    });
  }

  const initEmploymentVerification = async () => {
    const transactionData = await createTransaction();
    const transactionResponse = await transactionData.json();
    const formInfo = await mapFormInfo();
    const collectionData = await createCollection(transactionResponse.transaction_id, formInfo);
    const collectionResponse = await collectionData.json();
  }

  const submitVerification = () => {
    if (formRef.current.reportValidity()) {
      initEmploymentVerification();
    }
  };

  const mapFormInfo = async () => {
    const formInfo = {
      "deal_sets": [
        {
          "parties": [
            {
              "individual": {
                "contact_points": [
                  {
                    "contact_point_telephone": contact,
                    "email": email
                  }
                ],
                "first_name": firstName,
                "last_name": lastName,
                "date_of_birth": `${dateOfBirth.getDate()}/${parseInt(dateOfBirth.getMonth() + 1)}/${dateOfBirth.getFullYear()}`
              },
              "taxpayer_identifiers": [
                {
                  "value": taxPayerIdentifier
                }
              ],
              "roles": [
                {
                  "borrower": {
                    "residences": [
                      {
                        "address": {
                          "line_text": address,
                          "additional_line_text": additionalAddress,
                          "city": city,
                          "state": state,
                          "postal_code": zip,
                          "country": country
                        }
                      }
                    ],
                    "employers": [
                      {
                        "legal_entity_name": "default"
                      }
                    ]
                  }
                }
              ]
            }
          ]
        }
      ]
    }
    return formInfo;
  }

  return (
    <div className={classes.center}>
      <Paper elevation={3} className={classes.paper}>
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
                value={firstName.value}
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
                autoComplete="shipping postal-code"
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
                  disableToolbar
                  variant="inline"
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
              <div className={classes.buttons}>
                <Button variant="contained" onClick={submitVerification} className={classes.button}>Submit</Button>
              </div>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
}

export default VerificationForm;