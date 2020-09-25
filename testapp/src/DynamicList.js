import React from 'react';

export default class DynamicList extends React.Component {
	
         render() {
        const persons = [
            {
                id:1,
                name: 'John',
                age: 30,
                skill: 'HTML'
            },
            {
                id:2,
                name: 'Alex',
                age: 40,
                skill: 'CSS'
            },
            {
                id:3,
                name: 'Alex',
                age: 50,
                skill: 'React'
            },
        ];
    const listList = persons.map(p => <h1 key={p.id}>{p.name}, {p.age}, {p.skill}</h1>);
        return (
            <div>
                {listList}
            </div>
        )
    }
}