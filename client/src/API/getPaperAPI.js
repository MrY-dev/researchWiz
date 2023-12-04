import axios from 'axios';

const getPaperAPI = async (paperData) => {
  const config = {
    method: 'get',
    url: 'http://localhost:8080/api/paper/send',
    headers: {
      'Content-Type': 'application/pdf',
    },
    params: paperData,
  };

  let res;
  try {
    res = await axios(config);
    return res.data;
  } catch (err) {
    console.error('Could not get response from server.', err);
    return null;
  }
};

export default getPaperAPI;
