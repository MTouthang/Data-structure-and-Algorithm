/**
 * Q78. What is event loop? What is the difference between call stack and task queue.
 * - Event loop: The event loop is a single-threaded loop that monitors the call stack
 * and check the if there is work to be done in the task queue.
 * if the call stack is empty and there are callback functions in the task queue, a function is dequeued
 * and pushed onto the call stack to be executed.
 * - call stack- The call stack in javascript is a data structure that keeps track of the function
 * calls that are currently in progress.
 * - Task queue - the task queue is a data structure that holds a list of tasks that need to be
 * executed by the JavaScript engine. The task include  callbacks form asynchronouse operation like
 * such as timers, network request, and user input events.
 */

console.log("hi");

setTimeout(function cb() {
  console.log("there");
}, 0);
console.log("jsConfEu");
