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

export function addTask() {
    console.log("CONTROLLER: addtask " + JSON.stringify(task));
    return task;
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