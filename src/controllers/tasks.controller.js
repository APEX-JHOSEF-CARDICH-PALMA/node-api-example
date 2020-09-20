import TaskModel from '../models/task.model.js';

var task = [
    { "title": "Thoughs..", "description": "Hi bitch ... you're my best view.. EWWWW ", "telf": "1576584545" }

];
export function findAllTasks() {
    console.log("CONTROLLER: trying to get all the tasks ");


    return TaskModel.find();
}

export function findTask() {
    console.log(" CONTROLLER: a task ");
    return task;
}

export function searchTask() {
    console.log("CONTROLLER: search" + JSON.stringify(task));
    return task;
}

export function addTask(req, res) {
    console.log("CONTROLLER: addtask ");
    console.log(req.body.title);

    // Validate request
    if (!req.body) {
        return res.status(400).send({
            message: "Please fill all required field"
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
    tareaNueva.save()
        .then(data => {
            res.send(data);
            console.log("New Task inserted correctly..");
            res.redirect("/"); // Cada que metemos nuevo dato, redirige los datos
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something went wrong while creating new task in the data base."
            });
        });

    return tareaNueva;
}



export function updateTask() {
    console.log("CONTROLLER: update task" + JSON.stringify(task));
    return task;
}

export function deleteTask(id, res) {
    console.log("CONTROLLER: delete task");
    // Al tomar asi un valor, estamos pidiendo ducha propiedad del req.param

    TaskModel.deleteOne({ _id: id }).then(data => {
        res.status(200).send(data, { message: 'tarea deleted : ' + id });
        console.log(data);
        res.redirect('/');
    }).catch(err => {
        res.status(404).send({
            message: err.message || "Something went wrong while deleting task in the data base."
        });
    });

    return id;
}


export function fillDb() {
    console.log("CONTROLLER: fill db " + JSON.stringify(task));
    return task;
}