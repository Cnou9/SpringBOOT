//b1

function calculateFactorial(n){
    let multi= 1;
    for(let i=n;i>=1;i--){
        multi*=i;
    }
    return multi
}
console.log(calculateFactorial(5));

//b2
function reverseString(str){
    let reverse="";
    for(let i=str.length-1;i>=0;i--){
        reverse+=str[i]
    }
    return reverse;
}
console.log(reverseString('hello'));

//b3
function mess(str){
    switch(str){
        case 'VN': {
            return "Xin chào"
            break
        }
        case 'JP': {
            return"Konichiwa"
            break
        }
        case 'CN': {
           return"Nihao"
            break
        }
        case 'EN': {
            return"Hello"
            break
        }
        case 'Fr': {
            return"Bonjour"
            break
        }
    }
}
console.log(mess('JP'))

//b4 
function cutString(str) {
    if (str.length <= 15) {
      return str;
    } else {
      return str.substring(0, 10) + "...";
    }
  }
  
console.log(cutString('xinchaocacbandenvoiTechmaste'))