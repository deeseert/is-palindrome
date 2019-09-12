import axs from 'axios';

export const baseURL = 5000;

const axios = axs.create({
  baseURL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  },
});
export default {
  async get(url, params, headers) {
    try {
      const response = await axios.get(url, { params, headers: { ...headers } });
      return response;
    } catch (err) {
      throw err;
    }
  },
  async post(url, params, headers) {
    const response = await axios.post(url, params, { headers: { ...headers } });
    return response;
  },
  axios,
};
