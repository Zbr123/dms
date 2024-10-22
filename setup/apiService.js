const axios = require('axios');

const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',  // Replace with your actual base URL
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' }
});

async function getApiResponse(endpoint) {
  try {
    const response = await apiClient.get(endpoint);
    return response.data;  // Return only the response data
  } catch (error) {
    console.error('Error in Axios request:', error.message);
    throw new Error(`API request failed: ${error.message}`);  // Re-throw the error
  }
}

module.exports = { getApiResponse };
