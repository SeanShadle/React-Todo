import React from "react";
import "./App.css";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

const tasks = [
  {
    task: "Start up",
    id: 1234,
    completed: false,
  },
  {
    task: "Cash in",
    id: 1235,
    completed: false,
  },
  {
    task: "Sell out",
    id: 1236,
    completed: false,
  },
  {
    task: "Bro down",
    id: 1237,
    completed: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks,
    };
  }

  addTask = (e, task) => {
    e.preventDefault();
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      tasks: [...this.state.tasks, newTask],
    });
  };

  toggleTask = (taskId) => {
    console.log(taskId);
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (taskId === task.id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      }),
    });
  };

  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter((task) => !task.completed),
    });
  };

  render() {
    console.log("rendering...");
    return (
      <div className="App">
        <div className="header">
          <h1>To Do List</h1>
          <ToDoForm addTask={this.addTask} />
        </div>
        <ToDoList
          tasks={this.state.tasks}
          toggleTask={this.toggleTask}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
