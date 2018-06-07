const showHeaderAction = (status) => {
  return {
    type: 'TOGGLE_HEADER',
    status
  };
};

export { showHeaderAction };
