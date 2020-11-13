import React, {useState} from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
    const [state, setState] = useState({
        task: '',
        tasks: [],
    });

    function handleSubmit(e) {
        e.preventDefault();
        let tasks = state.tasks;
        tasks.push(state.task);
        setState((s) => ({...s, tasks}));
    }

    return (
        <div id={"todoapp"} style={{height: '100vh'}}>
            <div className="todoContainer">
                <h1>Todo App</h1>
                <form noValidate={true} onSubmit={handleSubmit}>
                    <p>Task name</p>
                    <input type="text" placeholder={'Example: Mandi'} onChange={({target}) => setState((s) => ({...s, task: target.value}))}/>
                    <button type="submit">Create</button>
                </form>
                <h1>Task List</h1>
                {state.tasks.length === 0 && "No task"}
                <ul>
                    {state.tasks.map((task, key) => <li key={key}>{task}</li>)}
                </ul>
            </div>
        </div>
    )
}
