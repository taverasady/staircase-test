export const createTransaction = async () => {
    return fetch(`${process.env.REACT_APP_API_URL}/income/transactions`, {
      method: 'POST',
      headers: {
        'x-api-key': process.env.REACT_APP_API_KEY,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    })
  };

export const createIncomeCollection = async (transactionId, formInfo) => {
    return fetch(`${process.env.REACT_APP_API_URL}/income/transactions/${transactionId}/collections`, {
        method: 'POST',
        headers: {
            'x-api-key': process.env.REACT_APP_API_KEY,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formInfo)
    })
}

export const verifyIncome = async (transactionId, collectionId) => {
    const options = {
        "transaction_id": transactionId,
        "collection_id": collectionId,
        "partner_name": "default",
        "options": {
            "manual_verification": false,
            "exclude_borrower": false
        }
    }
    return fetch(`${process.env.REACT_APP_API_URL}/income`, {
        method: 'POST',
        headers: {
            'x-api-key': process.env.REACT_APP_API_KEY,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(options)
    })
}

export const retrieveIncomeCollection = async (transactionId, collectionId) => {
    const url = `${process.env.REACT_APP_API_URL}/income/transactions/${transactionId}/collections/${collectionId}`
  
    return fetch(url, {
      method: 'GET',
      headers: {
        'x-api-key': process.env.REACT_APP_API_KEY,
        'Content-Type': 'application/json'
      },
    })
  };