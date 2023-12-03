import axios from 'axios';

const logUserAPI = async (userData) => {
    let res;
  const config = {
    method: 'post',
    url: 'http://localhost:8080/api/user/login',
    headers: {
      'Content-Type': 'application/json',
    },
    data: userData,
  };
  try {
    res = await axios(config);
    return { statusCode: res.status, data: res.data };
  } catch (err) {
    console.error('Could not get response from server.', err);
    return { statusCode: err.response.status, data: err.response.data };
  }
};

export default logUserAPI;
