const defaultState = {
    name: 'Aregbesola John',
    authData: {}
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'Edit_Name':
      return { ...state, name: action.payload };
    default:
      return { ...state };
  }
};
