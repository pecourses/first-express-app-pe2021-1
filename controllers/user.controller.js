const { v4: uuidv4 } = require('uuid');

const usersDb = [
  {
    id: uuidv4(),
    firstName: 'User1',
    lastName: 'Userovich1',
    email: 'test1@test.test',
  },
  {
    id: uuidv4(),
    firstName: 'User2',
    lastName: 'Userovich2',
    email: 'test2@test.test',
  },
];

module.exports.getUsers = (req, res) => {
  res.status(200).send(usersDb);
};

module.exports.createUser = (req, res) => {
  const { body } = req;
  console.log(`body`, body);

  const createdUser = { ...body, id: uuidv4() };
  usersDb.push(createdUser);

  res.status(201).send(createdUser);
};

module.exports.getUserById = (req, res) => {
  const {
    params: { userId },
  } = req;

  const [foundUser] = usersDb.filter(u => u.id == userId);

  if (foundUser) {
    res.status(200).send(foundUser);
  }

  res.status(404).send('User not found');
};

module.exports.updateUser = (req, res) => {};

module.exports.deleteUser = (req, res) => {};
