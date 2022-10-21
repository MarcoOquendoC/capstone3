const UPDATE = 'redux/details/UPDATE';

export default function details(state = '0', action) {
  switch (action.type) {
    case UPDATE:
      return action.payload;
    default:
      return state;
  }
}

const updateDetails = (id) => ({
  type: UPDATE,
  payload: id,
});

export { updateDetails };
