import React from "react"


interface Counter{
    item:number
}
const CounterView:React.FC<Counter> = (props)=>{
    return(
      <div>
          {props.item}
      </div>
    )
}

export default CounterView 