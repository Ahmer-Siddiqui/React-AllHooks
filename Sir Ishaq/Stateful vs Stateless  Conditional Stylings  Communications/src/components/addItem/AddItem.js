import React from 'react'

function AddItem({onAdd}) {
    let itemName = "";

    const onSubmitHandler = (e)=>{
        e.preventDefault();
        onAdd(itemName)
    }
    const onInputHandler = (e)=>{
        e.preventDefault();
        itemName = e.target.value
    }
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div>
            <label htmlFor="my-input">Item Name</label>
         <input id="my-input" onChange={onInputHandler}/>
        </div>
        <div>
            <button type='submit'>Add</button>
        </div>
        
      </form>
    </div>
  )
}

export default AddItem
