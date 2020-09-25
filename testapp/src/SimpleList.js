import React from 'react';

export default class SimpleList extends React.Component {
	
	 render() {
        const names = ['John', 'Jani', 'Alex'];
        const nList =  names.map(n => <h2>{n}</h2>)
        return (
            <div>
                {
                 nList
                }
            </div>
        )
    }
}
