import stringify from 'json-stringify-safe';

export function sendEmail(data) {
  const apiEndpoint = '/api/email';

  const jsonData = JSON.stringify(data);

  fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // Set content type to JSON
      Accept: 'application/json', 
    },
    body: jsonData,
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}