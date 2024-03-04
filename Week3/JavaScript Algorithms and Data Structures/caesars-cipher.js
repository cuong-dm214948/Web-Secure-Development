// to return index of the letter in alphabet
function index(letter){
  let alphabet=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  for (let i=0;i<alphabet.length;i++){ 
    if (alphabet[i]== letter){
      return i
    }
  }
}

function rot13(str) {
  let alphabet=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  let copy="";
  for (let i=0;i<str.length;i++){
    if ('A'<=str[i] && str[i]<='Z'){
      let j =index(str[i])
      copy += (alphabet[(j+13)%26]); 
    }  
    else{
      copy+=str[i]
    }
  }
  return copy;
}
//
rot13("SERR PBQR PNZC")