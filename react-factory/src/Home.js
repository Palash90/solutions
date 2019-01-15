import React from 'react';

export default function Home(props) {
    return (
        <div className="div-box">
            <h1>User Component</h1>
            <p>User: {props.user.name}</p>
            <p>Age: {props.user.age}</p>
            <p>I have following components in my page</p>
            <ul>
                {props.user.components.map(comp => <li>{comp}</li>)}
            </ul>
        </div>
    );
}