/**
 * @Author JohnLi
 * @Date 2018/4/12 18:12
 */
const defaultState = {
  showHeader: true
};
const showHeader = (state = defaultState, action) => {
  switch (action.type) {
    case 'TOGGLE_HEADER':
      return Object.assign(state, {showHeader: action.status});
    default:
      return state;
  }
};

export default showHeader;
