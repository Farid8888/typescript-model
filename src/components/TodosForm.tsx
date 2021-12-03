import classes from './Todos.module.css'
import {useRef,useContext} from 'react'
import {TodosContext} from '../todosContext'
import Todos from './model'

const TodosForm =()=>{
const addHandler = useContext(TodosContext).addHandler
const inputRef = useRef<HTMLInputElement>(null) 
const onSubmitHandler=(event:React.FormEvent)=>{
event.preventDefault()

const enteredValue = inputRef.current!.value 

addHandler(enteredValue)
}
return(
  <form className={classes.todos} onSubmit={onSubmitHandler}>
      <div className={classes.flex}>
      <label htmlFor='todos'>Todos Text</label>
      <input id='todos' ref={inputRef}/>
      </div>
      <div className={classes.btn}>
      <button type='submit'>Add Todo</button>
      </div>
  </form>
)
}

export default TodosForm