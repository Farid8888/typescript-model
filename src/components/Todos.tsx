import TodosItem from './TodosItem'
import classes from './TodosAll.module.css'
import {useContext} from 'react'
import {TodosContext} from '../todosContext'


const TodosAll =()=>{
    const todos = useContext(TodosContext).todos
    const removeHandler = useContext(TodosContext).removeHandler
    let content =todos.map(item=>{
        return <TodosItem key={item.id} todo={item.todos} remove={()=>removeHandler(item.id)}/>
    })
    return(
      <div className={classes.todos}>
        {content}
      </div>
    )
}

export default TodosAll