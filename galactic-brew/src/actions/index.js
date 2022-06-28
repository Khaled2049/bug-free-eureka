import newsApi from '../apis/newsApi';

export const selectSong = (song) => {
  // Return an action
  return {
    type: 'SONG_SELECTED',
    payload: song,
  };
};

export const fetchNews = () => async (dispatch) => {
  const res = await newsApi.get('/top-headlines', {
    params: { country: 'US' },
  });

  dispatch({ type: 'FETCH_NEWS', payload: res.data });
};

export const signIn = (userId) => {
  return {
    type: 'SIGN_IN',
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: 'SIGN_OUT',
  };
};
