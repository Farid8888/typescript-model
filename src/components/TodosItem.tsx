import classes from './TodosItem.module.css'

interface Todo{
    todo:string,
    remove:()=>void
}

const TodosItem:React.FC<Todo> =(props)=>{
    return(
     <div className={classes.todos} onClick={props.remove}>
       {props.todo}
     </div>
    )
}

export default TodosItem