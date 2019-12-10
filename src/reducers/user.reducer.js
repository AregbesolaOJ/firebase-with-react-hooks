const defaultState = {
  email: '',
  name: 'Summmitech NG',
  avatarUrl: '',
  authData: {
    roleId: '',
    branchId: '',
    organizationId: '',
    departmentIds: []
  }
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'add':
      return { ...state, avatarUrl: state.avatarUrl + action.value };
    case 'onload':
      return { ...state, branchList: 'olawale' };
    default:
      return { ...state };
  }
};
