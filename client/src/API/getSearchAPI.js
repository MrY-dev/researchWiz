import axios from 'axios';

const getSearchAPI = async (searchData) => {
  const config = {
    method: 'get',
    url: 'http://localhost:8080/api/paper/search',
    headers: {
      'Content-Type': 'application/json',
    },
    params: searchData,
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

export default getSearchAPI;
