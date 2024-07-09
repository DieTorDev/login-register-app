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

usersController.editUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await UserModel.findById(id);

    if (!user) return res.status(404).send({ message: 'User not found' });

    await UserModel.updateOne(
      { _id: id },
      {
        $set: {
          ...req.body
        }
      }
    );

    const allUsers = await UserModel.find();
    res.status(202).send(allUsers);
  } catch (err) {}
};

usersController.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);

    if (!user) return res.status(404).send({ message: 'User not found' });

    await UserModel.deleteOne({ _id: id });

    const allUsers = await UserModel.find();
    res.status(202).send(allUsers);
  } catch {}
};

module.exports = usersController;
