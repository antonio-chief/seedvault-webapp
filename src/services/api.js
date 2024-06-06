// frontend/src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

export const getYourModelData = async () => {
  const response = await axios.get(`${API_URL}yourmodel/`);
  return response.data;
};
