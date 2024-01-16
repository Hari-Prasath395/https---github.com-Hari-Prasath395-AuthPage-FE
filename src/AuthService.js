// // AuthService.js
// import axios from 'axios';

// const API_BASE_URL = 'https://react-auth-1p8k.onrender.com';

// const AuthService = {
//   login: async (username, password) => {
//     try {
//       const response = await axios.post(`${API_BASE_URL}/login`, { username, password });
//       return response.data;
//     } catch (error) {
//       throw error.response.data;
//     }
//   },

//   signup: async (username, password) => {
//     try {
//       const response = await axios.post(`${API_BASE_URL}/signup`, { username, password });
//       return response.data;
//     } catch (error) {
//       throw error.response.data;
//     }
//   },
// };

// export default AuthService;


// AuthService.js
import axios from 'axios';

const API_BASE_URL = 'https://react-auth-1p8k.onrender.com'; // Update with your Render backend URL

const AuthService = {
  login: async (username, password) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, { username, password });
      return response.data;
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Login error:', error.response.data);
        throw new Error('Invalid credentials');
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Login error:', error.request);
        throw new Error('No response from the server');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Login error:', error.message);
        throw new Error('An error occurred while processing the request');
      }
    }
  },

  signup: async (username, password) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/signup`, { username, password });
      return response.data;
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Signup error:', error.response.data);
        throw new Error('Error during signup');
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Signup error:', error.request);
        throw new Error('No response from the server');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Signup error:', error.message);
        throw new Error('An error occurred while processing the request');
      }
    }
  },
};

export default AuthService;

