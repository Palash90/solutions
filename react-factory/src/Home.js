import React from 'react';

export default function Home(props) {
    console.log(props)
    return (
        <div>
            <p>User: {props.user.name}</p>
            <p>Age: {props.user.age}</p>
        </div>
    );
}