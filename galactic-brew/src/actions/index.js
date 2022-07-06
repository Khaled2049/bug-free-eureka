import newsApi from '../apis/newsApi';
import projectsApi from '../apis/projectsApi';
import history from '../history';

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
  console.log('uid', userId);
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

// ACTION CREATORS for PROJECTS

export const createProject = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const res = await projectsApi.post('/projects', { ...formValues, userId });
  dispatch({ type: 'CREATE_PROJECT', payload: res.data });
  history.push('/projects');
};

export const fetchProjects = () => async (dispatch) => {
  const res = await projectsApi.get('/projects');
  dispatch({ type: 'FETCH_PROJECTS', payload: res.data });
};

export const fetchProject = (id) => async (dispatch) => {
  const res = await projectsApi.get(`/projects/${id}`);
  dispatch({ type: 'FETCH_PROJECT', payload: res.data });
};

export const editProject = (id, formValues) => async (dispatch) => {
  const res = await projectsApi.put(`/projects/${id}`, formValues);
  dispatch({ type: 'EDIT_PROJECT', payload: res.data });
};

export const deleteProject = (id) => async (dispatch) => {
  await projectsApi.delete(`/projects/${id}`);
  dispatch({ type: 'DELETE_PROJECT', payload: id });
};
