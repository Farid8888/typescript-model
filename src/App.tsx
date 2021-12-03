import React,{useState} from 'react'
import TodosForm from './components/TodosForm'
import Todos from './components/Todos'
import TodosProvider from './todosContext'



const App =()=>{
  return(
      <TodosProvider>
        <TodosForm />
        <Todos />
      </TodosProvider>
  )
}

export default App