const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "EMPLOYEE_UPDATE":
      // action.payload === (prop: 'name' value: 'jane')
      return { ...state, [action.payload.prop]: action.payload.value}
          // above is not an array. it uses ES6 to interpolate the value of
          // to be the key which is calculated at run time
    case "EMPLOYEE_CREATE":
      return INITIAL_STATE

    default:
      return state;

  }
}
