const INITAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
}

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case 'EMAIL_CHANGED':
      return { ...state, email: action.payload };
    case 'PASSWORD_CHANGED':
      return { ...state, password: action.payload };
    case 'LOGIN_USER':
      return { ...state, loading: true, error: true }
    case 'LOGIN_USER_SUCCESS':
      return { ...state, ...INITAL_STATE, user: action.payload }
    case 'LOGIN_USER_FAIL':
      return { ...state, error: 'Authentication failed', password: '', loading: false }
    default:
      return state;
  }
};
