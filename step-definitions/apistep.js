const { Given, When , Then } = require('@cucumber/cucumber');
const { getApiResponse } = require('../setup/apiService');

let apiData;

Given('I send a request to the API endpoint {string}', async (endpoint) => {
  try {
    console.log('Sending API request to:', endpoint);
    apiData = await getApiResponse(endpoint);  // Make the Axios call
    console.log('API response:', apiData);  // Log the response
  } catch (error) {
    console.error('Error in API step:', error.message);
    throw error;  // Let Cucumber handle the failure
  }
});
