import axios from 'axios';
import { BASE_URL } from './constants';

const create = () => {
  return axios.create({
    baseURL: BASE_URL
  });
};

const clientApi = create();

export default clientApi;
