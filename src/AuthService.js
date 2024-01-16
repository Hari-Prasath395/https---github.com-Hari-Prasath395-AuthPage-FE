// AuthService.js
import axios from 'axios';

const API_BASE_URL = 'https://your-backend-api-url';

const AuthService = {
  login: async (username, password) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, { username, password });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  signup: async (username, password) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/signup`, { username, password });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
};

export default AuthService;
