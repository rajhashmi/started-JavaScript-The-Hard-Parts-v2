// - **THREAD OF EXECUTION**

// 1. It’s goes to the code line by line does each of the line of code, they call this the thread of execution

// 1. the 2nd feature it’s save data in memory 
// - Execution context
    
//     Created to run code of a function - has 2 parts (we’ve already seen them) 
    
//     1. Thread of Execution 
//     2. Memory



// The event loop concept is very simple. There’s an endless loop, where the JavaScript engine waits for tasks, executes them and then sleeps, waiting for more tasks.

// The general algorithm of the engine:

// While there are tasks:
// execute them, starting with the oldest task.
// Sleep until a task appears, then go to 1.
// That’s a formalization for what we see when browsing a page. The JavaScript engine does nothing most of the time, it only runs if a script/handler/event activates.

// Examples of tasks:

// When an external script <script src="..."> loads, the task is to execute it.
// When a user moves their mouse, the task is to dispatch mousemove event and execute handlers.
// When the time is due for a scheduled setTimeout, the task is to run its callback.
// …and so on.
// Tasks are set – the engine handles them – then waits for more tasks (while sleeping and consuming close to zero CPU).

// It may happen that a task comes while the engine is busy, then it’s enqueued.

// The tasks form a queue, so-called “macrotask queue” (v8 term):