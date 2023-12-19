
import './App.css';

import {useState, useRef} from 'react';

import Button from './Components/Button';

import {evaluate} from 'mathjs';

function App() {
  const [inputVal, setInputVal] = useState("");

  const [output, setOutput] = useState("  ");

  const ifocus = useRef();


  const handleChange = (e)=>{
    setInputVal(e.target.value);
  }

  // const evaluate = (inputVal)=>{

  //   // const arr = inputVal.split(/[\+\-\/\*\]/)
  //   const arr = inputVal.split(/[\+\-\/\*]/);

  //   if(arr.length===1)
  //     return `${arr[0]}`;

  //   var ans;

  //   for(let i=0;i<inputVal.size();i++)
  //   {
  //     console.log(arr);
  //       if(inputVal[i]==='+')
  //       {
  //         let first = arr.shift();
  //         let sec = arr.shift();
  //         // ans =ans+first+sec;
  //         ans.unshift(Number(first)+Number(sec))
  //       }
  //       if(inputVal[i]==='-'&&arr.length>1)
  //       {
  //         let first = arr.shift();
  //         let sec = arr.shift();
  //         // ans =ans+first-sec;
  //         ans.unshift(first-sec);
  //       }
  //       if(inputVal[i]==='/')
  //       {
  //         let first = arr.shift();
  //         let sec = arr.shift();
  //         // ans =ans+firstsec;
  //         ans.unshift(first/sec)
  //       }
  //       if(inputVal[i]==='*')
  //       {
  //         let first = arr.shift();
  //         let sec = arr.shift();
  //         // ans =ans+first+sec;
  //         ans.unshift(first*sec);
  //       }
  //   }

  //   console.log(arr[0],"ans");
  //   return `${arr[0]}`;

  // }

  // const evaluate = (inputVal) => {
  //   const arr = inputVal.split(/[\+\-\/\*]/);
  
  //   if (arr.length === 1) {
  //     return `${arr[0]}`;
  //   }
  
  //   for (let i = 0; i < inputVal.length; i++) {
  //     console.log(arr);
  
  //     if (inputVal[i] === '+') {
  //       let first = parseFloat(arr.shift());
  //       let sec = parseFloat(arr.shift());
  //       arr.unshift(`${first + sec}`);
  //     }
  //     if (inputVal[i] === '-' ) {
  //       let first = parseFloat(arr.shift());
  //       let sec = parseFloat(arr.shift());
  //       arr.unshift(`${first - sec}`);
  //     }
  //     if (inputVal[i] === '/') {
  //       let first = parseFloat(arr.shift());
  //       let sec = parseFloat(arr.shift());
  //       arr.unshift(`${first / sec}`);
  //     }
  //     if (inputVal[i] === '*') {
  //       let first = parseFloat(arr.shift());
  //       let sec = parseFloat(arr.shift());
  //       arr.unshift(`${first * sec}`);
  //     }
  //   }
  
  //   console.log(arr, "ans");
  //   return `${arr[0]}`;


  // };
  


  const handleClick = (val)=>{
  
    if (val === 'C') {
      // Clear the input and output
      setInputVal('');
      setOutput('');
    } else if (val === '=') {
      // Evaluate the expression
      try {
        // const result = eval(inputVal);
        const result = evaluate(inputVal);
        console.log(result,"res");

        if(result===undefined)
        setOutput('Error')
        else
        setOutput(result);
      } catch (error) {
        setOutput('Error');
      }
    } else {
      ifocus.current.focus();
      // Append the button value to the input
      setInputVal((prevInput) => prevInput + val);
    }
  }

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <input 
      value={inputVal}
      onChange={(e)=>handleChange(e)}
        ref={ifocus}
        type={"text"}>
      </input>
      <div>{output}</div>

      <div className='btn-div'>
      <Button children = {"7"} handleClick={()=>handleClick('7')}/>
      <Button children = {"8"} handleClick={()=>handleClick('8')}/>
      <Button children = {"9"} handleClick={()=>handleClick('9')}/>
      <Button children = {"+"} handleClick={()=>handleClick('+')}/>

      <Button children = {"4"} handleClick={()=>handleClick('4')}/>
      <Button children = {"5"} handleClick={()=>handleClick('5')}/>
      <Button children = {"6"} handleClick={()=>handleClick('6')}/>
      <Button children = {"-"} handleClick={()=>handleClick('-')}/>

      <Button children = {"1"} handleClick={()=>handleClick('1')}/>
      <Button children = {"2"} handleClick={()=>handleClick('2')}/>
      <Button children = {"3"} handleClick={()=>handleClick('3')}/>
      <Button children = {"*"} handleClick={()=>handleClick('*')}/>

      <Button children = {"C"} handleClick={()=>handleClick('C')}/>
      <Button children = {"0"} handleClick={()=>handleClick('0')}/>
      <Button children = {"="} handleClick={()=>handleClick('=')}/>
      <Button children = {"/"} handleClick={()=>handleClick('/')}/>


      </div>
      
    </div>
  );
}

export default App;
