const express = require('express');
const userController = require('./controllers/user.controller');
const carsController = require('./controllers/cars.controller');
const validate = require('./middleware/validate.mw');
const app = express();

// JSON => req.body
app.use(express.json()); // use - повесить обработчик на любой маршрут

// GET http://127.0.0.1:5000/
app.get('/', (req, res) => {
  res.status(200).send('Hello from server))))');
});

// POST http://127.0.0.1:5000/
app.post('/', () => {});

// users
// GET http://127.0.0.1:5000/users
app.get('/users', userController.getUsers);

// POST http://127.0.0.1:5000/users + {}
app.post('/users', validate.validateUser, userController.createUser);
// 1 распарсить боди
// 2 отвалидировать данные
// 3 добавить юзеа

// GET http://127.0.0.1:5000/users/1
app.get('/users/:userId', userController.getUserById);
// req.params.userId

// PATCH http://127.0.0.1:5000/users/1 + {}
app.patch('/users/1', userController.updateUser);

// DELETE http://127.0.0.1:5000/users/1
app.delete('/users/1', userController.deleteUser);

// Реализовать добавление машины,
app.post('/cars', carsController.createCar);

// получение всех машин
app.get('/cars', carsController.getCars);

// и удаление машины по id
app.delete('/cars/:carId', carsController.deleteCar);

// error + next(error)
app.use((err, req, res, next) => {
  res.status(500).send(err);
});

module.exports = app;
