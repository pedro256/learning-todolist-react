import React from 'react'
import './index.css'

export default function ToDoList(props){
    const tasks = props.data
    console.log(tasks)
    return(
        <div>
            <h5>TOTAL: {tasks.length}</h5>
            <div className="tasks">
                {
                    tasks.map(item => (
                        <li key={item.title}>
                            <div className="taskheader">
                                <input type="checkbox" defaultChecked={item.checked} className="inputcheck" ></input>
                                <label id = {item.id}>{item.title}</label>
                            </div>
                            <p>{item.description}</p>
                        </li>
                    ))
                }
            </div>
        </div>
    )
}