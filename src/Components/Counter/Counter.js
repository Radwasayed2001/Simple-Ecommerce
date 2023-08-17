import React, { useContext, useState } from 'react'
import { counterContext } from '../config/CounterContext'

function Counter() {
    var {count,setCounter} = useContext(counterContext);
    function sub() {
        if (count  > 0){
            setCounter(--count);
        }
    }
  return (
    <div>
      <button onClick={()=>setCounter(++count)}>+</button>
      <button onClick={()=>sub()}>-</button>
    </div>
  )
}

export default Counter
