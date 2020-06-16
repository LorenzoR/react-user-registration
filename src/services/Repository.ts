import axios from 'axios';

const baseDomain = process.env.REACT_APP_API_ENDPOINT;
const baseURL = `${baseDomain}/`;

const Repository = axios.create({
  baseURL,
});

export default Repository;