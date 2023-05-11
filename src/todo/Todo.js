import React, { useState } from 'react'

const Todo = () => {
    let carArray = ["suzuki","hyndai","mahindra","thar"];
    const [carnames,setcarname] = useState(carArray);
    const [name,setname] = useState("")

    const saveInState = (e) => {
      setname(e.target.value);
   
    }
    const addInList = () => {
        let temp = [...carnames,name];
        setcarname(temp);
        setname("")

    }
    const deleteFn = (index) => {
   let temp2 = [...carnames];
   temp2.splice(index,1);
   setcarname(temp2);
    }
  return (
    <div>
        <ol>
            {
                carnames.map((item,index) => (
                    <li key={index}>{item}
                      <button onClick={() => deleteFn(index)}>Delete</button>
                    </li>
                  
                ))
            }
        </ol>
        <input type='text' value={name}  onChange={saveInState}/>
        <button onClick={addInList}>ADD</button>
      
    </div>
  )
}

export default Todo
