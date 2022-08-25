import React, {useEffect} from "react";
import './counter.css'
export default function Counter({onUpdate,value}) {
    const [counter, setCounter] = React.useState(value);
    React.useEffect(function (){
        onUpdate(counter);
    }, [counter]);
    return(
        <div style={{width:"100%", display:"flex",flexDirection:"row",alignItems:"center"}}>
            <div className={"count"}>
                <button onClick={()=>{setCounter(counter+1)}}>+</button>
            </div>
            <div className={"count-text"}>
                {counter}
            </div>
            <div className={"count"}>
                <button onClick={()=>{setCounter(counter-1)}}>-</button>
            </div>
        </div>
    )
}