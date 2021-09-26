const { v4: uuidv4 } = require('uuid');

const carsDb = [
  {
    id: uuidv4(),
    brand: 'BMW',
    model: 'X6',
    manufacturedAt: '2020',
  },
  {
    id: uuidv4(),
    brand: 'Mercedes',
    model: 'C200',
    manufacturedAt: '2019',
  },
];

module.exports.getCars = (req, res) => {
  res.status(200).send(carsDb);
};

module.exports.createCar = (req, res) => {
  const { body } = req;
  const newCar = { id: uuidv4(), ...body };
  carsDb.push(newCar);
  res.status(201).send(newCar);
};

module.exports.deleteCar = (req, res) => {
  const {
    params: { carId },
  } = req;
  const indexOfCar = carsDb.findIndex(car => carId === car.id);
  if (indexOfCar === -1) {
    res.status(404).send('Not found');
  } else {
    const [deletedCar] = carsDb.splice(indexOfCar, 1);
    res.status(200).send(deletedCar);
  }

  // if (indexOfCar > 0 && indexOfCar < carsDb.length) {
  //   const [deletedCar] = carsDb.splice(indexOfCar, 1);
  //   res.status(200).send(deletedCar);
  //   // res.status(204).send();
  // } else {
  //   res.status(404).send('Not found');
  // }
};
