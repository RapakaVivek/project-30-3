import React, { useState } from 'react';

const Component = () => {
  const [number, setNumber] = useState(0);
  const [gender, setGender] = useState(''); 
  const minimum = 0;
  const [name, setName] = useState('');

  const items = ['a', 'b', 'c', 'd'];

  
  const change = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h1>Hello World!</h1>
      
      <input 
        type="number" 
        value={number} 
        min={minimum} 
        onChange={(e) => setNumber(Math.max(minimum, Number(e.target.value)))} 
      /><br /><br />
      
      <button onClick={() => setNumber(prev => Math.max(prev - 1, minimum))}>
        Decrease
      </button>
      <button onClick={() => setNumber(number + 1)}>Increase</button>
      <button onClick={() => setNumber(0)}>Zero</button>
      
      <div className="a">
        <h1>Real-time Input Form</h1>
        <p>{name}</p>
        <input type='text' value={name} onChange={change} />
      </div>

      <div className='b'>
        <h1>Fruit List</h1>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li> 
          ))}
        </ul>
      </div>

      <div className="c">
        <h1>Toggle Switch</h1>
        <h1>{gender}</h1>
        <button onClick={() => setGender('Men')}>Men</button>
        <button onClick={() => setGender('Women')}>Women</button>
      </div>
    </div>
  );
};

export default Component;
