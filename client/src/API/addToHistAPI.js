import axios from 'axios';

const addToHistAPI = async (histData) => {
    let res;
  const config = {
    method: 'post',
    url: 'http://localhost:8080/api/user/add-history',
    headers: {
      'Content-Type': 'application/json',
    },
    data: histData,
  };
  try {
    res = await axios(config);
    return { statusCode: res.status, data: res.data };
  } catch (err) {
    console.error('Could not get response from server.', err);
    return { statusCode: err.response.status, data: err.response.data };
  }
};

export default addToHistAPI;
