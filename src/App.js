import logo from './logo.svg';
import React, {useState, useEffect}  from "react";
import './App.css';
import TodoList from './Todo/TodoList';
 import FirstUseEffect from './Todo/FirstUseEffect';


function App() {
  const[inputList, setInputList] = useState("")
  const [ Item,setItems] =  useState([]);
  
  const itemEvent = (event) =>{
    setInputList(event.target.value);
  };
  const listOfItem = () =>{
    // setItems((oldItems) => {
    
    //   return[...oldItems, inputList]
    // });
    Item.push(inputList);
    setItems(Item)
    setInputList("")
    localStorage.setItem('list',JSON.stringify(Item))
    

  }
  const deleteItem =(id) =>{
    console.log("delete");
    setItems((oldItems) => {
      return oldItems.filter((arrElement, index) =>{
        return index !== id; 
       });
    })
}



  useEffect(() =>{
    const DataFromLocalHost=localStorage.getItem('list')
    const UseData =  DataFromLocalHost ? JSON.parse(DataFromLocalHost) : [setItems];
    setItems( UseData);
  },[])
  return (
    <div>
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
    <div className='effect'>
      
    { <FirstUseEffect/>}
  </div>
  </div>
    
  );
}

export default App;
