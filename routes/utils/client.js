const axios = require('axios')
const { BASE_URL } = require('./constants');

const create = () => {
  return axios.create({
    baseURL: BASE_URL
  });
};

const clientApi = create();

module.exports = clientApi;
