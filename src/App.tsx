import React from 'react';
import './App.css';
import {Button} from "./components/Button";

function App() {
    const ButtonFoo =(name:string, age:number)=>{
        console.log(name, age)
    }

    const ButtonFooSt =()=>{
        console.log("stupid button")
    }

    return (
        <div className="App">
            {/*<button>MyYouTubeChannel-1</button>*/}
            {/*<button>MyYouTubeChannel-2</button>*/}
            <Button name={'MyYouTubeChannel-1'} callBack={()=>ButtonFoo('Ivan', 30)}/>
            <Button name={'MyYouTubeChannel-2'} callBack={()=>ButtonFoo('Vasya', 43)}/>
            <Button name={'stupid button'} callBack={ButtonFooSt}/>
        </div>
    );
}

export default App;
