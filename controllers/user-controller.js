const { User } = require('../models');

const userController = {
    //create a new user
    createUser ({ body }, res) {
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.status(400).json(err));
    }
};

module.exports = userController;