const { users_mock_data } = require('../../helper/read_mock_data');

// get file data to javascript object
let users = users_mock_data();

// Root resolver
const usersResolver = {
  // query callback
  users: () => {
    return users;
  },

  user({ id }) {
    return users.find((user) => user.id == id);
  },

  // mutation callback
  createUser: ({ first_name, last_name, email, address, gender }) => {
    let newUser = {};
    newUser.id = users.length + 1;
    newUser.first_name = first_name;
    newUser.last_name = last_name;
    newUser.email = email;
    newUser.gender = gender;
    newUser.address = address;
    users.push(newUser);
    return newUser;
  },

  updateUser: ({ id, first_name, last_name, email, gender, address }) => {
    users.map(function (user) {
      if (user.id == id) {
        user.first_name = first_name || user.first_name;
        user.last_name = last_name || user.last_name;
        user.email = email || user.email;
        user.gender = gender || user.gender;
        user.address = address || user.address;
      }
    });
    return users.find((user) => user.id == id);
  },

  deleteUser: ({ id }) => {
    let deletedUser = users.find((user) => user.id == id);
    users = users.filter(function (user) {
      return user.id != id;
    });
    return deletedUser;
  },
};

module.exports = { usersResolver };
