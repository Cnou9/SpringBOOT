//b1
let arr = [1, 8, 3];

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMax(arr));
//b2

function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

console.log(findMin(arr));
//b3
function findMod(arr){
    let result=[]
    for(let i=0;i<arr.length;i++){
        result.push(arr[i]%2)
    }
    return result
}
console.log(findMod(arr))
//b4
function repeatString(str){
    
    let repeated=[]
    for(let i = 0;i < 10; i++){
        repeated.push(str)
    }
    let repeatedStr=repeated.join('')
    return repeatedStr
}
console.log(repeatString('a'))
//5
function repeatString2(str){
    
    let repeated2=[str]
    for(let i = 1;i < 10; i++){
        repeated2.push('-'+str)
    }
    let repeatedStr2=repeated2.join('')
    return repeatedStr2
}
console.log(repeatString2('a'))
//b6
function isReverse(str){
    let newStr = str.toLowerCase().split(' ').join('');
    let reversedString = newStr.split('').reverse().join('');
    return newStr === reversedString;
}

console.log(isReverse('h e h e h'));
//b7
function sortMin(number){
    let arr=(number+'').split('')
    arr.sort((a,b)=>a-b);
    if(arr[0]==='0'){
        for(let i=1;i<arr.length;i++){
            if(arr[i]!=='0'){
                [arr[0],arr[i]]=[arr[i],arr[0]]
                break
            }
        }
    }
    return arr.join('')
}
console.log(sortMin(93751));
