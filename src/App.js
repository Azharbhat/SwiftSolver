import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  const [flag,setFlag]=useState(0)
  const [fresult,setFresult]=useState('')

  const fun =()=>{
    setFresult('')
    setValue('')
    setFlag(0)
  }

  const countfunc=(value,symbol)=>{
    let count=0;
        for(let i=0;i<value.length;i++){
          if(value[i]==symbol){
            for(let j=i-1;j>=0;j--){
            count++;
            }
          }
        }
        return count

  }
  function calculateFactorial(number) {
    // Using eval to calculate factorial
    let result=1;
    let n=parseInt(number);
    for(let i=1;i<=n;i++){
       result=result*i;
    }
    return result;
  }
 const handleClick= async (btnName)=>{
  switch(btnName){
    case 'C':
      setValue('')
      setFresult('')
      break;
    case 'CE':
        setValue(value.slice(0,value.length-1))
        break;
    case '1/x':
         
          setValue(1/parseInt(value))
          break;
    case 'rnd':
          let x=Math.ceil(Math.random()*1000)
          setValue(x)
          break;
    case "=":
      setFlag(1)
       if(value.includes('Sin')){
        let inte=value.slice(3,value.length);
        let expression = `Math.sin(${inte} * Math.PI / 180)`;
        setValue(eval(expression))
       }
      else if(value.includes('Cos')){
        let inte=value.slice(3,value.length);
        let expression = `Math.cos(${inte} * Math.PI / 180)`;
        setValue( await eval(expression))
       }
      else if(value.includes('Tan')){
        let inte=value.slice(3,value.length);
        let expression = `Math.tan(${inte} * Math.PI / 180)`;
        setValue(eval(expression))
       }
       else if(value.includes('Log')){
        let inte=value.slice(3,value.length);
        let expression = `Math.log(${inte})/Math.log(10)`;
        setValue(eval(expression))
       }
       else if(value.includes('e')){
        let inte=value.slice(1,value.length);
        let expression = `Math.E*${inte}`;
        setValue(eval(expression))
       }
       else if(value.includes('π')){
        let symbol='π';
        let count=countfunc(value,symbol)
        if(count>0){
          let inte=value.slice(0,count);
          let intee=value.slice(count+1,value.length);  //2'√22
          let expression=`${inte}*Math.PI*${intee}`
          setValue(eval(expression))
        }
        
        else{
          let inte=value.slice(1,value.length);
          let expression=`Math.PI*${inte}`
          setValue(eval(expression))
        }
       }

       ///square root code
       else if(value.includes('√')){
        let symbol='√';
        let count=countfunc(value,symbol)
        if(count>0){
          let inte=value.slice(0,count);
          let intee=value.slice(count+1,value.length);  //2'√22
          let expression=`${inte}*Math.sqrt(${intee})`
          setValue(eval(expression))
        }
        else{
          let inte=value.slice(1,value.length);
          let expression=`Math.sqrt(${inte})`
          setValue(eval(expression))
        }
       }
       else if(value.includes('Ln')){
        let inte=value.slice(2,value.length);
        let expression = `Math.log(${inte})/Math.log(10)`;
        setValue(eval(expression))
       }
       else if(value.includes('!')){
        let inte=value.slice(0,value.length-1);
        let result=calculateFactorial(inte)
        setValue(result)
       }
       else if(value.includes('p')){
        let count=countfunc(value,"p");
        let inte=value.slice(0,count);
        let intee=value.slice(count+1,value.length);
        let result=(parseInt(inte)/parseInt(intee))*100
        setValue(result)
       }
       //this is for remaining keys
       else{
        let result=eval(value)
        if(value.length>20){
          alert("Enter valid input")
        }
        else{
          setValue(eval(value))
          setFresult((value)+"=")
        }
       
       }
      break;
    default:
      if(flag==1){
        fun()
      }
      else{
        setValue(value+btnName)
      }
       
      break
  }
 }
 

  return (
    <div className="App">
 
      <div className="Container">
        <h2> SwiftSolver</h2>
        <p className="inputt">{fresult}</p>
        <input className="input" type="text" value={value} onChange={(event) => setValue(event.target.value)}/>
        <div className="btn-container">
        <div className='left'>
        <div className='sub-left'>
        <div key={'CE'} onClick={() => handleClick('CE')} className="op-btn">  CE</div>
          <div key={'C'} onClick={() => handleClick('C')} className="op-btn">  C</div>
          <div key={'%'} onClick={() => handleClick('%')} className="op-btn">  %</div>
          <div key={'/'} onClick={() => handleClick('/')} className="op-btn">  /</div> 
          </div>
           <div className='sub-left'> <div key={'7'} onClick={() => handleClick('7')} className="num-btn">   7 </div>
          <div key={'8'} onClick={() => handleClick('8')} className="num-btn">   8 </div>
          <div key={'9'} onClick={() => handleClick('9')} className="num-btn">   9 </div>
          <div key={'x'} onClick={() => handleClick('*')} className="op-btn">   x </div>
          </div>
          <div className='sub-left'>
          <div key={'4'} onClick={() => handleClick('4')} className="num-btn">   4 </div>
          <div key={'5'} onClick={() => handleClick('5')} className="num-btn">   5 </div>
          <div key={'6'} onClick={() => handleClick('6')} className="num-btn">   6 </div>
          <div key={'-'} onClick={() => handleClick('-')} className="op-btn">   - </div>
          </div>
          <div className='sub-left'>
          
          <div key={'1'} onClick={() => handleClick('1')} className="num-btn">   1 </div>
          <div key={'2'} onClick={() => handleClick('2')} className="num-btn">   2 </div>
          <div key={'3'} onClick={() => handleClick('3')} className="num-btn">   3 </div>
          <div key={'+'} onClick={() => handleClick('+')} className="op-btn">   + </div>
          </div>
          <div className='sub-left'>
          <div key={'.'} onClick={() => handleClick('.')} className="op-btn">   . </div>
          <div key={'0'} onClick={() => handleClick('0')} className="num-btn">   0 </div>
          <div key={'='} onClick={() => handleClick('=')} className="btnn">   = </div>
          </div>
          </div>
        <div className='right'>
        <div className='sub-right'>
        <div key={'Sin'} onClick={() => handleClick('Sin')} className="btn"> Sin</div>
          <div key={'Cos'} onClick={() => handleClick('Cos')} className="btn">  Cos</div>
          <div key={'Tan'} onClick={() => handleClick('Tan')} className="btn"> Ta</div>
          </div>
          <div className='sub-right'>
          <div key={'^'} onClick={() => handleClick('**')} className="btn">   ^ </div>
          <div key={'ur'} onClick={() => handleClick('√')} className="btn">√</div>
          <div key={'PIE'} onClick={() => handleClick('π')} className="btn"> π </div>
          </div>
          <div className='sub-right'>
          <div key={'In'} onClick={() => handleClick('Ln')} className="btn">   Ln </div>
          <div key={'Log'} onClick={() => handleClick('Log')} className="btn">   Log </div>
          <div key={'!'} onClick={() => handleClick('!')} className="btn">   !</div>
          </div>
          <div className='sub-right'>
          <div key={'--'} onClick={() => handleClick('p')} className="btn">   Per</div>
          <div key={'1/x'} onClick={() => handleClick('1/x')} className="btn">   1/x </div>
          <div key={'e'} onClick={() => handleClick('e')} className="btn">   e </div>
          </div>
          <div className='sub-right'>
          <div key={'('} onClick={() => handleClick('(')} className="btn">   ( </div>
          <div key={')'} onClick={() => handleClick(')')} className="btn">   ) </div>
           <div key={'rnd'} onClick={() => handleClick('rnd')} className="btn">  rnd</div>
           </div>
        </div>
          
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default App;
