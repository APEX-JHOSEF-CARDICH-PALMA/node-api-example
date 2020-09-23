/* eslint-disbled */
import TaskModel from '../models/task.model.js';
import faker from 'faker';

export function findAllTasks() {
  console.log('CONTROLLER: trying to get all the tasks ');
  return TaskModel.find();
}

export function findTask(req, res) {
  console.log(' CONTROLLER: get a task ');
  const { id } = req.params;

  TaskModel.findById(id)
    .then((data) => {
      console.log(data);
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(404).send({ message: err.message || 'task not found' });
    });
}

export function search(req, res) {
  console.log(' CONTROLLER: SEARCH  ');
  const { phrase } = req.body;
  console.log(phrase);
  console.log('CONTROLLER: search');

  TaskModel.find({ $text: { $search: phrase } })
    .then((data) => {
      console.log(data);
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Something went worng during the search..',
      });
    });
}

export function addTask(req, res) {
  console.log('CONTROLLER: addtask ');
  console.log(req.body.title);

  // Validate request
  if (!req.body) {
    return res.status(400).send({
      message: 'Please fill all required field',
    });
  }

  const tareaNueva = new TaskModel({
    title: req.body.title,
    description: req.body.description,
    phone: req.body.phone,
  });

  /*
Tambien se puede pasar el objeto completo : 
    const tareaNueva2 = new TaskModel(req.body);
console.log("TAREA 2 " + tareaNueva2);

*/
  tareaNueva
    .save()
    .then((data) => {
      console.log(data);
      console.log('New Task inserted correctly..');
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          'Something went wrong while creating new task in the data base.',
      });
    });
}

export function updateTask(req, res) {
  console.log(' CONTROLLER: triyin to update a task ');
  const { id } = req.params;
  const { description } = req.body;
  const { phone } = req.body;
  const { title } = req.body;

  // TaskModel.update({ _id: id }, req.body);
  console.log(description);
  TaskModel.findById(id)
    .then((data) => {
      console.log(data);
      data.description = description;
      data.phone = phone;
      data.title = title;
      data
        .save()
        .then((data) => {
          console.log('Task updated correctly.');
          console.log(data);
          res.status(200).send(data);
        })
        .catch((err) => res.status(500).send({ message: err.message }));
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
}

export function deleteTask(id, res) {
  console.log('CONTROLLER: delete task');
  // Al tomar asi un valor, estamos pidiendo ducha propiedad del req.param
  TaskModel.deleteOne({ _id: id })
    .then((data) => {
      res.status(200).send(data);
      console.log(data);
    })
    .catch((err) => {
      res.status(404).send({
        message:
          err.message ||
          'Something went wrong while deleting task in the data base.',
      });
    });

  return id;
}

export function fillDb(req, res) {
  console.log('CONTROLLER: fill db ');
  for (let i = 0; i < 20; i++) {
    const newTask = new TaskModel({
      title: faker.random.word(),
      description: faker.commerce.productDescription(),
      phone: faker.phone.phoneNumber(),
    });

    newTask
      .save()
      .then((data) => {
        console.log(data);
        console.log('New Task inserted correctly..');
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message ||
            'Something went wrong while creating new task in the data base.',
        });
      });
  }

  const show = async () => {
    try {
      const fakeData = await findAllTasks();
      res.status(200).send(fakeData);
    } catch (err) {
      res.status(500).send({
        message:
          err.message ||
          'Something went wrong while creating new task in the data base.',
      });
    }
  };
  show();
}

export function deleteRecords(res, req) {
  console.log('CONTROLLER: delete task');
  // Al tomar asi un valor, estamos pidiendo ducha propiedad del req.param
  TaskModel.deleteMany({})
    .then((data) => {
      res.status(200).send(data);
      console.log(data);
    })
    .catch((err) => {
      res.status(404).send({
        message:
          err.message ||
          'Something went wrong while deleting task in the data base.',
      });
    });
}
