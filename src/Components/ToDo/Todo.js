import { useState } from 'react';
import './Todo.css';
function Todo(){
    var [array,setArray] = useState([]);
    var [arrObj, setArrObj] = useState();
    let x = document.getElementById('task');
    function addObj(event){
        arrObj = event.target.value;
        setArrObj(arrObj);
    }
    function remove(i){
        array.splice(i,1);
        setArray([...array]);
    }
    function Edit(i){
        if (arrObj.length > 0){
        array.splice(i,1);
        array.splice(i,0,arrObj);
        setArray([...array]);}
    }
    function addTask() {
        array.push(arrObj);
        setArray([...array]);
        setArrObj(arrObj='');
        x.value='';
    }
    return(
        <div id='todo'>
            <div className='firstSection'>
                <h1>My To Do List</h1>
                <div className='inputPart' onChange={addObj}>
                    <input type='text' name='task' id='task'/>
                    <button onClick={addTask}>Add</button>
                </div>
                <div id='tasks'>
                    {
                        array.map((item,index)=>{
                            return(<>
                                <div id='item'>
                                <input type='checkbox' name='task' id='checkbox'/>
                                <label htmlFor='task'>{item}</label>
                                <button onClick={()=>remove(index)}>X</button>
                                <button onClick={()=>Edit(index)} className='edit'>Edit</button>
                                </div>
                                <hr style={{width:"100%"}}/>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Todo;