import axios from 'axios';

const addCommentAPI = async (commData) => {
    let res;
  const config = {
    method: 'post',
    url: 'http://localhost:8080/api/paper/add-comment',
    headers: {
      'Content-Type': 'application/json',
    },
    data: commData,
  };
  try {
    res = await axios(config);
    return { statusCode: res.status, data: res.data };
  } catch (err) {
    console.error('Could not get response from server.', err);
    return { statusCode: err.response.status, data: err.response.data };
  }
};

export default addCommentAPI;
