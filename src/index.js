module.exports = function check(str, bracketsConfig) {
  // your solution
  let Stack=[];
  // iteration for open bracket
  let OpenBracketElement=0;
  // iteration for close bracket
  //let CloseBracketElement = 0;

  for(let i =0; i<str.length; i++){
    for(const [x,y] of bracketsConfig){
      // if element is close bracket
      if(str[i]===y){
        //CloseBracketElement++;
        if(Stack[OpenBracketElement-1]===x){
          Stack.pop();
          OpenBracketElement-=1;
        }
        // if current element is open bracket
        else{
          Stack.push(str[i]);
          OpenBracketElement+=1;
        }
      }
      //if current element is open bracket
      else{
        if(str[i] === x){
          Stack.push(str[i]);
          OpenBracketElement+=1;
        }
      }
    }
  }
  return !(Stack.length);

}
