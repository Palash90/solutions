import React from 'react';

export default function TableComponent(props) {
    return (
        <div>
            <p>I have configured my home page to show some tabular data</p>
        <table border="1">
            <caption>Tabular Presentation</caption>
            <tbody>
                {props.table.map(row => {
                    return (<tr>
                        {row.map(col => {
                            return <td>{col}</td>
                        })}
                    </tr>);
                })}
            </tbody>
        </table>
        </div>
    )
}