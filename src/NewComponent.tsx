import React from 'react';
import * as string_decoder from "string_decoder";
import {FilterType} from "./App";

type moneyType = {
    banknots: string,
    value: number,
    number: string
}

type newComponentPropsType = {
    currentMoney: Array<moneyType>,
    callBack:(name: FilterType)=>void
}

export const NewComponent = (props:newComponentPropsType) => {

    return (
        <div>

            <ul>
                {props.currentMoney.map((m, index) => {
                    return (
                        <li key={index}>
                            <span>{m.banknots}</span>
                            <span>{m.value}</span>
                            <span>{m.number}</span>
                        </li>
                    )
                })}
            </ul>

            <div>
                <button onClick={() => props.callBack('all')}>all</button>
                <button onClick={() => props.callBack('rub')}>rub</button>
                <button onClick={() => props.callBack('$')}>$</button>
            </div>

        </div>
    );
};
