export const mapFormInfo = async ({ contact, email, firstName, lastName, dateOfBirth, taxPayerIdentifier, address, additionalAddress, city, state, zip, country }) => {
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
                        "legal_entity_name": "Truework Inc"
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