const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;
const getUseremail = state => state.auth.user.email;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getUseremail
};
export default authSelectors;