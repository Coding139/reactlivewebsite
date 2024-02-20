import React from 'react'

const Todolist = (props) => {

    const deleteItems=()=>{


    }
  return (
    <>
    <div className='todo_style'>
        <i className="fa fa-times" aria-hidden='true'  onClick={()=>{

            props.deleteItems(props.id);
        }}/>
       
      <li>{props.itemval}</li>
</div>
</>
  );
}

export default Todolist
