import React, { useState } from 'react'
import '../src/Calculator.css'

export default function Calculator() {
const [str, setstr] = useState('')
    let putData = (nos)=>{
        //  console.log(str)
        setstr( str+(nos) )
    }
    let displayResult = ()=>{
        console.log(str)
        setstr(eval(str))
    }
    let clrdata = () => {
        setstr('')
    }
  return (
    <>

    <div className="calculator">

   
    <input type="text" value={str}/>
 
   
    <div className="calculator-buttons">
    <button className="calc-button is-clear" onClick={clrdata}>C</button>
  <button className="calc-button" onClick={() => putData('/')}>/</button>

  <button className="calc-button" onClick={() => putData(7)}>7</button>
  <button className="calc-button" onClick={() => putData(8)}>8</button>
  <button className="calc-button" onClick={() => putData(9)}>9</button>
  <button className="calc-button" onClick={() => putData('*')}>*</button>

  <button className="calc-button" onClick={() => putData(4)}>4</button>
  <button className="calc-button" onClick={() => putData(5)}>5</button>
  <button className="calc-button" onClick={() => putData(6)}>6</button>
  <button className="calc-button" onClick={() => putData('-')}>-</button>

  <button className="calc-button" onClick={() => putData(1)}>1</button>
  <button className="calc-button" onClick={() => putData(2)}>2</button>
  <button className="calc-button" onClick={() => putData(3)}>3</button>
  <button className="calc-button" onClick={() => putData('+')}>+</button>

  <button className="calc-button is-zero" onClick={() => putData(0)}>0</button>
  <button className="calc-button is-equals" onClick={displayResult}>=</button>
        </div>
      
    </div>

  























    
        {/* <input type='text' value={str}/>
        <button onClick={() => putData(1)}>1</button>
        <button onClick={() => putData(2)}>2</button>
        <button onClick={() => putData(3)}>3</button>
        <button onClick={() => putData(4)}>4</button>
        <button onClick={() => putData(5)}>5</button>
        <button onClick={() => putData(6)}>6</button>
        <button onClick={() => putData(7)}>7</button>
        <button onClick={() => putData(8)}>8</button>
        <button onClick={() => putData('+')}>+</button>
        <button onClick={() => putData('-')}>-</button>
        <button onClick={() => putData('(')}>(</button>
        <button onClick={() => putData(')')}>)</button>
        <button onClick={displayResult} >=</button>
        <button onClick={clrdata} >C</button> */}
    </>
  )
}
