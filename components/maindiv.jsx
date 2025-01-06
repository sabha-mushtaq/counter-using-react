import { useState } from 'react';
import './maindiv.css';

function Container() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <> 
      <div className="container">
        <div className='count-container'>
          <div className='count'>
            {count}
          </div>
        </div>
        <div className='buttons-container'>
          <button className='increment' onClick={increment}>Increment</button>
          <button className='decrement' onClick={decrement}>Decrement</button>
        </div>
      </div>
    </>
  );
}

export default Container;


