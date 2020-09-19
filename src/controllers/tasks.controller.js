import { createRequire } from "module";
const require = createRequire(import.meta.url);

import * as Task from '../models/task.model.js';
const tarea = Task.default; //OJO MIRAR LOS DEFAULTS E IMPORTS.. ESTO ES CHAPUSA 
var task = [
    { "title": "Thoughs..", "description": "Hi bitch ... you're my best view.. EWWWW ", "telf": "1576584545" }

];
export function findAllTasks() {
    console.log("CONTROLLER: all tasks ");
    return task;
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
    console.log(req.body);

    // Validate request
    if (!req.body) {
        return res.status(400).send({
            message: "Please fill all required field"
        });
    }

    const tareaNueva = new tarea({
        title: req.body.title,
        description: req.body.description,
        phone: req.body.phone
    });

    tareaNueva.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something went wrong while creating new task."
            });
        });

    console.log(new tarea(req));
    return tareaNueva;
}

export function updateTask() {
    console.log("CONTROLLER: update task" + JSON.stringify(task));
    return task;
}

export function deleteTask() {
    console.log("CONTROLLER: delete task" + JSON.stringify(task));
    return task;
}


export function fillDb() {
    console.log("CONTROLLER: fill db " + JSON.stringify(task));
    return task;
}