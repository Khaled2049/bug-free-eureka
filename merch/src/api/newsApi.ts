import axios from 'axios';

export default axios.create({
  baseURL: 'https://newsapi.org/v2',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_NEWSAPIKEY}`,
  },
});
