const authenticate = () => {
  if (localStorage.getItem("token")) {
    return true;
  }
  return false;
};
export default authenticate;
