import React from 'react'
import Task from './ToDo'

const ToDoList = props => {
    return (
        <div className="task-list">
            {props.tasks.map(task => (
                <Task key={task.id} task={task} toggleTask={props.toggleTask} />
            ))}
            <button className='clear-btn' onClick={props.clearCompleted}>
                Clear Completed
            </button>
        </div>
    )
}

export default ToDoList