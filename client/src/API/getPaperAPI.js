import axios from 'axios';

const getPaperAPI = async (paperData) => {
  const config = {
    method: 'get',
    url: 'http://localhost:8080/api/paper/send',
    headers: {
      'Content-Type': 'application/json',
    },
    params: paperData,
  };

  let res;
  try {
    res = await axios(config);
    return { statusCode: res.status, data: res };
  } catch (err) {
    console.error('Could not get response from server.', err);
    return { statusCode: err.response.status, data: err.response.data };
  }
};

export default getPaperAPI;
