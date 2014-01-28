###Week07-Day1

##Much To-Do About JavaScript

***Overview:***

The goal of this multi-day assignment is to build a to-do application that makes use of a Javascript-rich user interface and a Rails backend for persisting data.


###Part 1

Build a client side JavaScript to-do application that makes use of DOM manipulation and user interaction through events.  

- Note: The to-do items will not persist between uses of the application at this time.

#####Application structure
This app is made up of two objects: `todo_app` and `todo_item`.

- `todo_app` combines all the methods that are useful for working with the app.
	- It should creates and append new tasks to the DOM
	- It should keep track of finished and unfinished to-dos.
- `todo_item` constructs the actual DOM element to represent a task.
	-  The render method returns a DOM object containing the task and the two buttons, `complete` and `delete`.
	- On click, a to-do item's `complete` button should initiate function calls to 'complete' the to-do, removing the item from the active list and appending it to the completed list along with it's associated time of completion.
	- On click, a to-do item's `delete` button should delete the to-do from the DOM.
	

#####File structure
- Application:
	- `index.html` - main todo app HTML page
	- `scripts/jquery.js` - jquery JavaScript source 
	- `scripts/todo.js` - todo app JavaScript source code
	- `styles/styles.css` - todo app css style sheet

---

###Possible Strategy
- The following code strategy is potential way to approach this assignment.  It should not be read as **the way** to go about it.
	- `todo_app`
		- todoTasks
			- returns all the todo tasks from the dom
		- completedTasks
			- returns all the completed tasks from the dom
		- newTaskField
			- returns the input field for a new task 
		- createTask
			- takes information needed to create a new task
			- creates a todo_item with that information
			- calls appendTask
		- appendTask
			- append a task_item to the dom if a task's text is more than 1 character
	
	- `todo_item`
		- task_text
			- the text description of a task
		- created_at
			- date and time a task was created
		- due_date
			- date and time a task should be completed
		- setTask
			- takes information about a task and sets the respective attributes
		- render
			- returns a DOM object containing the task, a complete button and a delete button
		- completedButton
			- returns a DOM object for a complete button
			- this object should have all the event handling set up before being returned
		- deleteButton
			- returns a DOM object for a delete button
			- this object should have all the event handling set up before being returned
		- getTask (optional)
			- given an event targeting a task's complete or delete button, return the entire task DOM object
		- getMetaData (optional)
			- given an event targeting a task's complete button, return the DOM object containing the metadata