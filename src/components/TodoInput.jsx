import React, { useState } from 'react'

function TodoInput(props) {
    const [inputText, setinputText] = useState('');
  return (
    <>
        <div className='input-container'>
            <input type="text" placeholder='Add a new todo' className='input-box-todo'
            value={inputText}
                onChange={event =>{
                    setinputText(event.target.value);
                }}
            />
            <button className='add-btn' onClick={()=>{
                props.addList(inputText)
                setinputText('');
            }}>+</button>
        </div>
    </>
  )
}

export default TodoInput