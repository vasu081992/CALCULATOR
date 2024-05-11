import React from "react";
import styles from "./Calculator.module.css"
import { useState } from "react";

const Button = ({name,onClick,value})=>{

  
return(
    <>
    <button className={styles.button} onClick={()=>onClick(value)}>{name}</button>
    </>
)
}

const Calculator = () =>{

    const [inputvalue,setinputvalue] = useState("");
    const[resultflag,setresultflag]=useState(false)

    console.log("inputvalue",inputvalue)

    const handleClick = (value) =>{
        setinputvalue(inputvalue + value)
    }

    const handleExpression =() =>{
        setresultflag(true)
        // setinputvalue(eval(inputvalue))
    }

    const handleClear = () =>{
        setinputvalue("")
        setresultflag(false)
    }

    return (
<>
<h1>React Calculator</h1>

<input className={styles.input} value={inputvalue}></input>


{resultflag && inputvalue ? 

(
    <div>{eval(inputvalue)}</div>
)
: resultflag && inputvalue===""? 
(
<div>Error</div>
)
:
(
    <p></p>
)
}
        <div className={styles.spacing}>

        <Button name={7} onClick={handleClick} value={"7"}/>
        <Button name={8} onClick={handleClick} value={"8"}/>
        <Button name={9} onClick={handleClick} value={"9"}/>
        <Button name={"+"} onClick={handleClick} value={"+"} />

        </div>

        <div className={styles.spacing}>

<Button name={4} onClick={handleClick} value={"4"} />
<Button name={5} onClick={handleClick} value={"5"} />
<Button name={6} onClick={handleClick} value={"6"}/>
<Button name={"-"} onClick={handleClick} value={"-"}/>

</div>


<div className={styles.spacing}>

<Button name={1} onClick={handleClick} value={"1"}/>
<Button name={2} onClick={handleClick} value={"2"}/>
<Button name={3} onClick={handleClick} value={"6"}/>
<Button name={"*"} onClick={handleClick} value={"*"}/>

</div>

<div className={styles.spacing}>

<Button name="C" onClick={handleClear} value={""}/>
<Button name="0" onClick={handleClick} value={"0"}/>
<Button name="=" onClick={handleExpression} value={""}/>
<Button name="/" onClick={handleClick} value={"/"}/>

</div>

        </>
    )
}


export default Calculator