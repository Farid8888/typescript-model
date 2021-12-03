import {createContext,useState} from 'react'
import Todos from './components/model'



type Todo ={
    todos:Todos[],
    addHandler:(val:string)=>void,
    removeHandler:(id:string)=>void
}
export const TodosContext =createContext<Todo>({
    todos:[],
    addHandler:(val:string)=>{},
    removeHandler:(id:string)=>{}
})


const TodosProvider:React.FC = (props)=>{
const [todos,setTodos] = useState<Todos[]>([])

const addHandler=(value:string)=>{
    const newTodo=new Todos(value)
setTodos(prevSt=>{
    return prevSt.concat(newTodo)
})
}
const removeHandler =(Id:string)=>{
setTodos(prevst=>{
    return prevst.filter(item=>{
        return item.id !== Id
    })
})
}
const contextValue:Todo ={
    todos:todos,
    addHandler:addHandler,
    removeHandler:removeHandler
}
    return(
        <TodosContext.Provider value={contextValue}>
            {props.children}
        </TodosContext.Provider>
    )
}

export default TodosProvider