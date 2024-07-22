import api from './Api';

const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await api.post('/user/register', userData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const verifyOtp = async (email, otp) => {
  try {
    const response = await api.post('/user/verify-otp', { email, otp });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const resendOtp = async (email) => {
  try {
    const response = await api.post('/user/resend-otp', { email });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await api.post('/user/login', userData);
    const { token, expiresIn } = response.data;
    localStorage.setItem('token', token);
    localStorage.setItem('tokenExpiration', Date.now() + expiresIn * 1000);
    setAuthToken(token);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const logoutUser = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('tokenExpiration');
  setAuthToken(null);
};

export const checkTokenExpiration = () => {
  const tokenExpiration = localStorage.getItem('tokenExpiration');
  if (tokenExpiration && Date.now() > tokenExpiration) {
    logoutUser();
    window.location.href = '/login';
  }
};
