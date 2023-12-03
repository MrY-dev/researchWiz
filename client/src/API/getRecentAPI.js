import axios from 'axios';

const getRecentAPI = async (recentData) => {
  const config = {
    method: 'get',
    url: 'http://localhost:8080/api/paper/recent-paper',
    headers: {
      'Content-Type': 'application/json',
    },
    params: recentData,
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

export default getRecentAPI;
