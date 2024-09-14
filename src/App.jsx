
import { useState } from 'react';
import './App.css';
import TodoInput from "./components/TodoInput";
import TodoList from './components/TodoList';
function App(){
  const [ListTodo, setListTodo] = useState([]);
  const addList = (inputText) =>{
    setListTodo([...ListTodo,inputText]);
  }

  const deleteListItem = (key) =>{
    const newTodoList = [...ListTodo];
    newTodoList.splice(key,1);
    setListTodo([...newTodoList]);
  }
  return (
  <>
    <div className="main-container">
      <div className="center-container">
      <TodoInput addList={addList}/>
      <h1 className='app-heading'>TODO</h1>
      <hr/>
      {ListTodo.map((listItem, index)=>{
        return(
          <TodoList key={index} index= {index} item={listItem}  deleteItem={deleteListItem}></TodoList>
        )
      })}
      </div>
    </div>
  </>
  );
}
export default App;