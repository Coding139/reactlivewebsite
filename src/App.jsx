import React, { useState } from "react";
import "./App.css";
import Todolist from "./Todolist";
// import Clock from 'react-digital-clock';


// import AddIcon from '@mui/icons-material/Add';
// import AddAlarmIcon from '@mui/icons-material/AddAlarm';

const App = () => {
  const [inputList, setInputList] = useState("");

  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });

    setInputList("");
  };

  const deleteItems=(id)=>{

    console.log('deleted');

    setItems((oldItems)=>{

      return oldItems.filter((arrElem, index)=>{

        return index!==id;
      }
      )
    })
  }

  return (
    <div className="main_div">
      <div className="center_div">
        <br />

        {/* <AddIcon/> */}
        <h1>ToDo List</h1>
        {/* <Clock/> */}
        {/* <AddAlarmIcon/> */}
        
        <br />
        <input
          type="text"
          placeholder="Add an Item"
          onChange={itemEvent}
          value={inputList}
        />
        <button onClick={listOfItems}> +</button>

        <ol>
          {Items.map((itemval, index) => {
            return <Todolist key={index} id={index} deleteItems={deleteItems} itemval={itemval} />;
          })}
        </ol>
      </div>
    </div>
  );
};

export default App;
