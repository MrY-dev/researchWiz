import axios from 'axios';

const getCredAPI = async () => {
  const config = {
    method: 'get',
    url: 'http://localhost:8080/api/user/get-cred',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  let res;
  try {
    res = await axios(config);
    return { statusCode: res.status, data: res.data };
  } catch (err) {
    console.error('Could not get response from server.', err);
    return { statusCode: err.response.status, data: err.response.data };
  }
};

export default getCredAPI;
