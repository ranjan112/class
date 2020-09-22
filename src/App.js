// import React, { Component } from "react";
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { name: "", age: "", email: "", password: "", cpassword: "" };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(e) {
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value,
//     });
//   }

//   handleSubmit(event) {
//     alert("A name was submitted: " + this.state.name);
//     alert("A age was submitted: " + this.state.age);

//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             placeholder="Enter name"
//             name="name"
//             value={this.state.name}
//             onChange={this.handleChange}
//           />
//         </label>
//         <label>
//           Age:
//           <input
//             type="number"
//             name="age"
//             value={this.state.age}
//             onChange={this.handleChange}
//           />
//         </label>
//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={this.state.email}
//             onChange={this.handleChange}
//           />
//         </label>
//         <label>
//           password:
//           <input
//             type="password"
//             name="password"
//             value={this.state.password}
//             onChange={this.handleChange}
//           />
//         </label>
//         <label>
//           Confirm password:
//           <input
//             type="password"
//             name="cpassword"
//             value={this.state.cpassword}
//             onChange={this.handleChange}
//           />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }
// export default App;


// import React, { useState } from 'react';

// export default function App() {
// const [counter,setCounter]=useState(0)


// function buttonwasclicked(){
//   setCounter(counter+1)
// }
// function subtract(){
// setCounter(counter-1)
// }
//   return (
//     <div>
//       <button style={{width:55,height:55}} onClick={buttonwasclicked}>Add</button>
//       <button style={{width:55,height:55}} onClick={subtract}>Subtract</button>

//       <h1>{counter}</h1>
//     </div>
//   )
// }



// import React from 'react';

// class App extends React.Component {
//   componentDidMount() {
//     const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => console.log('This is your data', data));
//   }
//   render() {
//     return <h1>my Component has Mounted, Check the browser 'console' </h1>;

//   }
// }
// export default App;


// import React,{useEffect,useState} from 'react';
// import axios from 'axios'
// export const App = () => {
//     const [countries, setCountries] = useState([]);
//     const [load, setLoad] = useState(false);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         axios.get('https://jsonplaceholder.typicode.com/photos')
//             .then(res => {
//                 setCountries(res.data);
//                 setLoad(true);
//             })
//             .catch(err => {
//                 setError(err.message);
//                 setLoad(true)
//             })
//     }, []);
    
    
//     if (load) {
//         return (<ul>
//             {error ? <li>{error.message}</li> : countries.map((country, index) => <li key={index}><iFrame>{country.thumbnailUrl}</iFrame></li>)}
//         </ul>);
//     } else {
//         return (
//             <div>
//                 Loading...
//             </div>
//         );
//     }
// };
// export default App


// import React, { useReducer } from 'react';

// function App() {
//   // First render will create the state, and it will
//   // persist through future renders
//   const [sum, dispatch] = useReducer((state, action) => {
//     return state + action;
//   }, 0);

//   return (
//     <>
//       {sum}

//       <button onClick={() => dispatch(1)}>
//         Add 1
//       </button>
//     </>
//   );
// }
// export default App;

import React, {useState, useMemo} from 'react';

function App() {
  const [length, set_length] = useState(50);
  const [name, set_name] = useState('Shilpa');

  return (
    <>
      <input value={name} onChange={e => set_name(e.target.value)} />
      <NameDisplay name={name}/>
      <hr />
      <input value={length} onChange={e => set_length(Number(e.target.value))} />
      <FibDisplay length={length} />
    </>
  );
}

function FibDisplay({length}) {
  const numbers = useMemo(() => {
    console.log('Calculating numbers...');
    const result = [1, 1];
    for (let i = 2; i < length; i++) {
      result[i] = result[i - 1] + result[i - 2];
    }
    return result;
  }, [length]);

  return <p>{length} numbers of the fibonacci sequence: {numbers.join(', ')}</p>;
}

const NameDisplay = React.memo(function ({name}) {
  console.log('Rerendering name...');
  return <p>Your name is {name}</p>;
});

export default App;

