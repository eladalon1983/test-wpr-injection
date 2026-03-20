// This will be DETERMINISTIC (stay the same on replay)
document.getElementById('main-val').innerText = Math.random();
// Initialize the worker from a separate file.
// WPR sees this request as 'application/javascript' and currently ignores it.
const myWorker = new Worker('worker.js');
myWorker.onmessage = function(e) {
    // This will be NON-DETERMINISTIC (change on every replay refresh)
    document.getElementById('worker-val').innerText = e.data;
};
