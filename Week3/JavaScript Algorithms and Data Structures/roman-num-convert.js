//
function is(num) {
    let number = [4, 9, 40, 90, 400, 900];
    for (let i = 0; i < 6; i++) {
        if (number[i] === num) {
            return true;
        }
    }
    return false;
}

function numpre(num) {
    var record = [];
    let roman = { 4: [1, 5], 9: [1, 10], 40: [10, 50], 90: [10, 100], 400: [100, 500], 900: [100, 1000] };
    let number = [4, 9, 40, 90, 400, 900];
    for (let i = 0; i < 6; i++) {
        if (number[i] === num) {
            let pre = roman[number[i]];
            record.push(...pre)
            return record;
        }
    }
}

function numlas(num) {
    let roman = [1, 5, 10, 40,50, 90,100, 400,500, 900,1000,10000];
    let record = [];
    while (num > 0) {
        for (let i = 0; i <= 12; i++) {
            if (is(num)) {
                let pre = numpre(num);
                record.push(...pre);
                return record;
            }
            if (!is(num)) {
                if (roman[i]==num){
                    record.push(roman[i]);
                    num=num-roman[i];
                }

                if (roman[i] < num && num < (roman[i + 1]) ) {
                    
                    record.push(roman[i]);
                    num = num - roman[i];
                }                       
            }
        }
    }
    return record;
}

function convertToRoman(num) {
    let roman = { 1: "I", 5: "V", 10: "X",40:"XL", 50: 'L',90:"XC", 100: "C",400:"CD", 500: "D",900:"CM", 1000: "M" }
    let record = numlas(num);
    let count = "";
    for (let i = 0; i < record.length; i++) {
        let j = record[i];
        count += roman[j];
    }
    return count;
}

console.log(convertToRoman(2014));
