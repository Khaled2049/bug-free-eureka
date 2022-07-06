import _ from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_PROJECTS':
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case 'FETCH_PROJECT':
      return { ...state, [action.payload.id]: action.payload };
    case 'CREATE_PROJECT':
      return { ...state, [action.payload.id]: action.payload };
    case 'EDIT_PROJECT':
      return { ...state, [action.payload.id]: action.payload };
    case 'DELETE_PROJECT':
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
