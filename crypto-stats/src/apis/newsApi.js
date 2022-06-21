import axios from 'axios';

export default axios.create({
  baseURL: 'https://newsapi.org/v2',
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_NEWSAPIKEY}`,
  },
});
