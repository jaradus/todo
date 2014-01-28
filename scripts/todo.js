// todo_app object literal
var todo_app = {

	homeView: {
		$container: function(){
			return $('#main_container');
		},
		$taskAddButton: function(){
			return $('#task_add_button');
		},
		$taskInputContainer: function(){
			return $('#task_input_container');
		},
		$taskInputDescription: function(){
			return $('#task_input_description');
		},
		$taskInputDueDate: function(){
			return $('#task_input_due_date');
		},
		$taskList: function(){
			return $('#todo-table-body');
		},

		initialize: function(){

			todo_app.homeView.render();

		},

		render: function(){
			// Clears entire page
			todo_app.homeView.$container().empty()

			// Sets the header
			var heading_html_array = ["<h1 class=row id='heading'>",
																	'To Do Application',
																"</h1>"]

			var $heading = $(heading_html_array.join(""));
			todo_app.homeView.$container().append($heading);

			// Puts a button to add to-do items
      var html_array = [ "<div class='row' id='task_input_container'>",
      											"<h3>New Task</h3>",
									          "Task: <input id='task_input_description' type='text' placeholder='Task Description'/>",
									          "Due date: <input id='task_input_due_date' type='date'/>",
									          "<button class='button success radius tiny' id='task_add_button'>",
									            "Add Task",
									          "</button>",
									      "</div>" ];

      var $task_input_container = $(html_array.join(""));

      todo_app.homeView.$container().append($task_input_container);  
      
      // Puts an event listener on the button
      todo_app.homeView.$taskAddButton().on("click", function(e){
				var description = todo_app.homeView.$taskInputDescription().val();
				var due_date_array = todo_app.homeView.$taskInputDueDate().val().split("-");
				var due_year = due_date_array[0];
				var due_month = due_date_array[1];
				var due_day = due_date_array[2];

				// Task: function(description, due_day, due_month, due_year)
				new todo_item.models.Task(description, due_day, due_month, due_year);

				// Resets form
				todo_app.homeView.$taskInputDescription().val("");
				todo_app.homeView.$taskInputDueDate().val("");

				todo_app.homeView.render();

			});

			// Puts a table in place for to-do items
			var table_html_array = ["<div class='row'>",
															"<h3>Current Tasks</h3>",
															"<table id='todo-table'>",
																"<thead>",
																	"<tr>",
																		"<th>Task to do</th>",
																		"<th>Due Date</th>",
																		"<th>Created On</th>",
																		"<th>Status</th>",
																		"<th>Close Task</th>",
																		"<th>Delete</th>",
																	"</tr>",
																"</thead>",
																"<tbody id='todo-table-body'>",
																"</tbody>",
															"</table>",
															"</div>"]
			var $table = $(table_html_array.join(""));
			todo_app.homeView.$container().append($table);

			// Renders the task collection
			var i = 1;
			todo_item.collections.tasks.forEach(function(task){
				var task_html_array = ["<tr id=task_"+ i +">",
																"<td>",
																	task.task,
																"</td>",
																"<td>",
																	task.due_date,
																"</td>",
																"<td>",
																	task.created_at,
																"</td>",
																"<td>",
																	task.completed_status,
																"</td>",
																"<td>",
																	"<button class='button secondary radius tiny'>Close</button>",
																"</td>",
																"<td>",
																	"<button class='button alert radius tiny'>Delete</button>",
																"</td>",
															"</tr>"];
															i++;
				var $tasks_list = $(task_html_array.join(""));
				todo_app.homeView.$taskList().append($tasks_list);
			});
		}
	},

	//Takes relevant arguments and creates a 
	//new task object from the todo_item 
	//object literal.  
	createTask: function createTask() {

	}, 
	//Appends a newly created task to the DOM.
	appendTask: function() {
			
	}

};



// todo_item object literal
var todo_item = {
	collections: {
		tasks: []
	},
	models: {
		Task: function(description, due_day, due_month, due_year){
			var self = this;
			self.task = description;
			self.created_at = new Date();
			self.due_date = new Date(due_year,due_month,due_day);
			self.completed_status = 'Open';

    	var task_html_array = ["<tr class='task'>",
													    "<td>",
																self.task,
															"</td>",
															"<td>",
																self.due_date,
															"</td>",
															"<td>",
																self.created_at,
															"</td>",
															"<td>",
																self.completed_status,
															"</td>",
														"</tr>"]

			self.$el = $(task_html_array.join(""))

			self.setTask = function(new_description, new_due_day, new_due_month, new_due_year){
	      self.task = new_description || self.task;
	      self.due_date = new Date(new_due_year,new_due_month,new_due_day) || self.due_date;
	    }

	    self.completeTask = function(){
	    	self.completed_status = 'Completed';


			}

	    // add the task to the appropriate collection
      todo_item.collections.tasks.push(self);
		}
	},



	// Returns a DOM object representation of a ToDO item. 
	// Should be called inside the todo_apps appendTask 
	// function.
	render: function render(){

  }

};



// Document Ready!!!
$(function(){

	todo_app.homeView.initialize();

});