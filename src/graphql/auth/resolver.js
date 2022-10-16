const jwt = require('jsonwebtoken');

const { TOKEN_KEY } = require('../../helper/constants');
const { users_mock_data } = require('../../helper/read_write_mock_data');

// get file data to javascript object
let users = users_mock_data();

// Root resolver
const authResolver = {
  // query callback
  checkAuth({ token }) {
    try {
      const user = jwt.verify(token.replace('Bearer ', ''), TOKEN_KEY);
      console.log(user);
      return { user: user.user, message: 'login successful' };
    } catch (err) {
      return { user: null, message: "Invalid Token" }
    }
  },

  // mutation callback
  registerUser: ({ first_name, last_name, email, password }) => {
    const user = {
      first_name, last_name, email, password
    }
    user.id = users.length + 1;
    delete user.password
    users.push(user);
    // Create token
    const token = jwt.sign(
      { user: user },
      TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    // save user token
    user.token = token;
    return { user: user, message: 'register successfully' };
  },

  // mutation callback
  loginUser: ({ email, password }) => {
    const user = users.find(usr => usr.email === email);
    if (user && user.email === password) {
      // Create token
      const token = jwt.sign(
        { user: user },
        TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      // save user token
      user.token = token;
      return { user: user, message: 'login successful' };
    }
    return { user: null, message: 'Unauthentication credentials' };
  },


};

module.exports = { authResolver };
