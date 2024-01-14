   /* const fun=(start,center,end,symbol)=>{
    let rest = center.split(symbol)
    switch(symbol){ 
      case '/': setValue(start+(parseInt(rest[0]) / parseInt(rest[1]))+end) ;break;
      case '-': setValue(start+(parseInt(rest[0]) - parseInt(rest[1]))+end) ;break;
      case 'x': setValue(start+(parseInt(rest[0]) * parseInt(rest[1]))+end) ;break;
      case '+': setValue(start+(parseInt(rest[0]) + parseInt(rest[1]))+end) ;break;
      case '%': setValue(start+(parseInt(rest[0]) % parseInt(rest[1]))+end) ;break;
      case '^': setValue(start+(parseInt(rest[0]) ** parseInt(rest[1]))+end) ;break;
     }
     fun(start,value,end)
//conter function
  }
  const countSandE =(opr,mult)=>{
   // console.log(opr,mult)
    let count = 0;
    let count2 = 0;
    for(let i=0;i<mult.length;i++){
     
      if(mult[i]==opr){
        for (let j = i-1; j >= 0; j--) { 
          if (mult[j]=="0"||mult[j]=="1"||mult[j]=="2"||mult[j]=="3"||mult[j]=="4"||mult[j]=="5"||mult[j]=="6"||mult[j]=="7"||mult[j]=="8"||mult[j]=="9") {  
            count++;
          }
          else{
            break;
          }
        }
        for (let k = i+1; k < mult.length; k++) {
          if (mult[k]=="0"||mult[k]=="1"||mult[k]=="2"||mult[k]=="3"||mult[k]=="4"||mult[k]=="5"||mult[k]=="6"||mult[k]=="7"||mult[k]=="8"||mult[k]=="9") {
           count2++;
          }
          else{
            break;
          }
        }
      }
    }
    let arr=[count,count2]
    return  arr
    }

  const handleClick = (buttonName) => {
    switch (buttonName) {
      case 'C':
        setValue('');
        break;
      case 'CE':
        setValue(value.substring(0, value.length - 1));
        break;
      case '=':
        let mult = value;
        for (let i = 0; i < mult.length; i++) {
                let arr= countSandE(mult[i],mult);
                let performer = mult.substring(i-arr[0],i+arr[1]+1);
                let start=mult.substring(0,i-arr[0]);
                let end = mult.substring(i+arr[1]+1,mult.length)
                fun(start,performer,end,mult[i])
               
  
          if(mult[i] === 'S'||mult[i] === 'C'){
              
              switch(mult[i]){
                case 'S':
                  setValue(Math.sin(parseInt(mult.substring(3,mult.length)) * (Math.PI / 180)));
                  break;
                case 'C':
                 setValue(Math.cos(parseInt(mult.substring(3,mult.length))));
                break;
              }
              
            }
          
        }
        // setValue(temp);
        break;
      case 'x':
        if (value === '') {
          alert('Please enter a number before using the operator');
        } else {
          setValue(value + 'x');
        }
        break;
      default:
        setValue(value + buttonName);
    }
  };
  */