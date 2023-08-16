import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {NewComponent} from "./NewComponent";

function App() {


    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ];

    return (
        <div className="App">
            {/*<Todolist title={"What to learn"} tasks={tasks1}/>*/}
            {/*<Todolist title={"Songs"} tasks={tasks2}/>*/}
            <NewComponent cars={topCars}/>
        </div>
    );
}

export default App;
