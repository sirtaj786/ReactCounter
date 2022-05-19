import React from 'react'
import '../component/module.css'
const Counter = () => {
    const [count,setCount]=React.useState(0);
    let count1=count%2===0 ? 'demo1':'demo'
    return(
        <div>
            <h1 className={count1}> Counter:{count}</h1>
            <button onClick={()=> setCount(count + 1)}>Increment</button>
            <button onClick={()=> setCount(count - 1)}>Decrement</button>
            <button onClick={()=> setCount(count *2)}>Double</button>
        </div>
    );
};
export default Counter;