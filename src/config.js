const protocol = window.location.protocol; // "http:" or "https:"
const host = window.location.hostname;     // e.g. "localhost" or "mydomain.com"
const port = "5000";

//const API_BASE_URL = `https://api.adityaastro.in`;
const API_BASE_URL = `http://localhost:3001`;

console.log(API_BASE_URL); // e.g. "http://localhost:5000"
//const API_BASE_URL = `${window.location.protocol}//${window.location.hostname}:5000`;

export default {
  API_BASE_URL,
};

