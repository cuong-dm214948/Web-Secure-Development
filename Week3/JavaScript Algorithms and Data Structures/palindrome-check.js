//to indicate that a letter is a character or a number only
function isChar(str){
    for (let i=0; i<str.length;i++){ 
      if (str[i] >="a" && str[i]<="z") {     
        return true;
      }
      if (0<=parseInt(str[i]) && parseInt(str[i])  <=9){
        return true;
      }
      return false;
    }
  }
  
  //to return a string of character and number only 
  function char(str){
    let copy = ""; 
    for (let i=0; i<str.length;i++){
      if (isChar(str[i])){
        copy +=str[i];
      }
    } 
    return copy;  
  }
  
  //to check palindrome
  function palindrome(str) {
    str= str.toLowerCase();
    str= char(str);
    var count=0;
    for (let i=0;i<(Math.floor((str.length)/2));i++){   
        let j=((str.length-1)-i);     
        if (str[i]==str[j] ){
          count += 1;     
        }
    }
    if (count == Math.floor(str.length/2)){
      return true;
    }
    return false;
  
  }
  //test
  palindrome("eye");