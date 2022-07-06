const INTIAL_STATE = {
  isSignedIn: null,
  userId: null,
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      console.log('signin', action.payload);
      return { ...state, isSignedIn: true, userId: action.payload };
    case 'SIGN_OUT':
      console.log(state);
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
