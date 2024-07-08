const UserModel = require('../models/user.model');

const usersController = {};

usersController.getUsers = async (req, res) => {
  try {
    const allUsers = await UserModel.find();
    res.send(allUsers);
  } catch (err) {
    res.status(404).send({ message: 'Users not found' });
  }
};

module.exports = usersController;
