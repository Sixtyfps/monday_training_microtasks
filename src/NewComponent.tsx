import React from 'react';

type NewComponentType = {
    cars: Array<CarType>
}

type CarType = {
    manufacturer: string,
    model: string,
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <>
            <table>
                <tr>
                    <th>Number</th>
                    <th>Manufacturer</th>
                    <th>Model</th>
                </tr>
                {props.cars.map((car, index) => {
                    return (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{car.manufacturer}</td>
                            <td>{car.model}</td>
                        </tr>
                    )
                })}
            </table>
        </>
    )


    // return (
    //     <ul>
    //         {props.students.map((student, index) => {
    //             return (
    //                 <li key={student.id}>
    //                     <span>{student.name}</span>
    //                     <span>{student.age}</span>
    //                 </li>
    //             )
    //         })}
    //
    //     </ul>
    // );
};
