import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";

export type FilterType = 'all' | 'rub' | '$'

function App() {

    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])

    const [filter, setFilter] = useState('all')

    let currentMoney = money

    if (filter === 'rub') {
        currentMoney = money.filter((filteredMoney)=>filteredMoney.banknots === 'RUBLS')
    }

    if (filter === '$') {
        currentMoney = money.filter((filteredMoney)=>filteredMoney.banknots === 'Dollars')
    }

    const onClickFilterHandler = (nameButton: FilterType)=> {
        setFilter(nameButton)
    }

    return (
        <div>
            <NewComponent currentMoney={currentMoney} callBack={onClickFilterHandler}/>
            {/*<ul>*/}
            {/*    {currentMoney.map((m, index)=>{*/}
            {/*        return(*/}
            {/*            <li key={index}>*/}
            {/*                <span>{m.banknots}</span>*/}
            {/*                <span>{m.value}</span>*/}
            {/*                <span>{m.number}</span>*/}
            {/*            </li>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</ul>*/}

            {/*<div>*/}
            {/*    <button onClick={()=>onClickFilterHandler('all')}>all</button>*/}
            {/*    <button onClick={()=>onClickFilterHandler('rub')}>rub</button>*/}
            {/*    <button onClick={()=>onClickFilterHandler('$')}>$</button>*/}
            {/*</div>*/}

        </div>



    );
}

export default App;
