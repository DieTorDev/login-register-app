const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/user.model');
const createAccessToken = require('../utils/jwt');

const authController = {};

authController.register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new UserModel({
      username,
      email,
      password: hashedPassword
    });

    await newUser.save();
    res.status(201).send({ message: 'User resgistered' });
  } catch (err) {
    res.status(500).send({ error: 'Error at registration process' });
  }
};

authController.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFound = await UserModel.findOne({ email });

    if (!userFound) {
      return res.status(400).send({ message: 'Email does not exist' });
    }

    const isMatch = bcrypt.compare(password, userFound.password);

    if (!isMatch) {
      return res.status(401).send({ message: 'Invalid credentials' });
    }

    const token = await createAccessToken({
      id: userFound._id
    });

    return res.cookie('token', token).send({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email
    });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

module.exports = authController;
