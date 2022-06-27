import logo from './logo.svg';
import React, {useState} from "react";
import './App.css';
import TodoList from './Todo/TodoList';

function App() {
  const[inputList, setInputList] = useState("")
  const [ Item,setItems] =  useState([]);
  
  const itemEvent = (event) =>{
    setInputList(event.target.value);
  };
  const listOfItem = () =>{
    setItems((oldItems) => {
      return[...oldItems, inputList]
    });
    setInputList("")
    

  }
  const deleteItem =(id) =>{
    console.log("delete");
    setItems((oldItems) => {
      return oldItems.filter((arrElement, index) =>{
        return index !== id; 
       });
    })
}
  
  return (
    
    <div className='main_div'>
      <div className='center_div'>
        <br></br>
        <h1 className='rt'>ToDO List</h1>
      </div>
      <div>
        <input className='uu' type='text' placeholder="Add a item" 
        value={inputList}
        onChange={itemEvent} ></input>
        <button onClick={listOfItem} className="wow"  >Add from here</button>
      </div>
      <div>
        <ol className='rr'>
          {/* <li>{inputList}</li> */}
          
           { Item.map((itemvalue, index)  => {
              return <TodoList key={index} id={index} text={itemvalue} onSelect={deleteItem} />
            })
          }
        </ol>
      </div>
       
    
    
    </div>
    
  );
}

export default App;
