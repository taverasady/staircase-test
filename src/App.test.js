import { render, screen } from '@testing-library/react';

import App from './App';

test('check-form-inputs', () => {
  render(<App />);

  const firstNameTextField = screen.getByTestId('first-name');
  expect(firstNameTextField).toBeInTheDocument();

  const lastNameTextField = screen.getByTestId('last-name');
  expect(lastNameTextField).toBeInTheDocument();

  const emailTextField = screen.getByTestId('email');
  expect(emailTextField).toBeInTheDocument();

  const contactTextField = screen.getByTestId('contact');
  expect(contactTextField).toBeInTheDocument();

  const addressTextField = screen.getByTestId('address');
  expect(addressTextField).toBeInTheDocument();

  const taxPayerIdentifierTextField = screen.getByTestId('tax-payer-identifier');
  expect(taxPayerIdentifierTextField).toBeInTheDocument();

  const cityTextField = screen.getByTestId('city');
  expect(cityTextField).toBeInTheDocument();

  const zipTextField = screen.getByTestId('zip');
  expect(zipTextField).toBeInTheDocument();

  const countryTextField = screen.getByTestId('country');
  expect(countryTextField).toBeInTheDocument();

  const dateOfBirthTextField = screen.getByTestId('date-of-birth');
  expect(dateOfBirthTextField).toBeInTheDocument();
  
});
