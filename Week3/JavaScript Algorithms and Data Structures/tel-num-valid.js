function format(str){
    let tel= /^\d{3}-\d{3}-\d{4}|\(\d{3}\)\s?\d{3}-\d{4}|^\d{10}|\d{3}\s\d{3}\s\d{4}|^(1\s?)?(\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/;
    if (tel.test(str)){
      return true;
    }
    return false;
  }

function telephoneCheck(str) {
    console.log(format(str))
    if (format(str)){
        //to check start with1
        if (str[0]==1){
            let result = str.match(/[0-9]/g)
            if (result.length==11){
            return true;}
            return false;}
            
        if (str[0]!=1){
            let result1 = str.match(/[0-9]/g)
            if (result1.length==10){
            return true;}
            return false;}
            }
    return false;
  }
  
telephoneCheck("(555-555-5555");