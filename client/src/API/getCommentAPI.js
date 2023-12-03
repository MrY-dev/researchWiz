import axios from 'axios';

const getCommentAPI = async (commData) => {
  const config = {
    method: 'get',
    url: 'http://localhost:8080/api/paper/get-comment',
    headers: {
      'Content-Type': 'application/json',
    },
    params: commData,
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

export default getCommentAPI;
