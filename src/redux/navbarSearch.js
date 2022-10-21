const UPDATE = 'redux/navbarSearch/UPDATE';

export default function navbarSearch(state = '[a-z]', action) {
  switch (action.type) {
    case UPDATE:
      return action.payload;
    default:
      return state;
  }
}

const update = (search) => ({
  type: UPDATE,
  payload: search,
});

export { update };
