var task = [
    { "title": "Thoughs..", "description": "Hi bitch ... you're my best view.. EWWWW ", "telf": "1576584545" }
];

export function findAllTasks() {
    console.log(" Returning all the tasks: ");
    return task;
}

export function addTask(task) {
    console.log("Task received:" + JSON.stringify(task));

}