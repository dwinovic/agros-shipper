const initialData = {
  data: {},
};

export const userReducer = (state = initialData, action) => {
  switch (action.type) {
    case 'SET_USER_PROFILE':
      return {
        ...state,
        data: action.payload.data,
      };
    default:
      return state;
  }
};
