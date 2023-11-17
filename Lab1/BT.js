// // // Lab2

// // // b1
// // let mark=90;
// // if(mark>=85&&mark<100){
// //     console.log('A')
// // }
// // else if(mark<85&&mark>=70){
// //     console.log('B')
// // } 
// // else if(mark<70&&mark>=40){
// //     console.log('C')
// // } else console.log('D')

// // //Lab3

// // // b1
// // let day=5;
// // switch(day){
// //     case 0: {
// //         console.log("Sunday")
// //         break;
// //     }
// //     case 1: {
// //         console.log("Thứ 2")
// //         break
// //     }
// //     case 2: {
// //         console.log("Thứ 3")
// //         break
// //     }
// //     case 3: {
// //         console.log("Thứ 4")
// //         break
// //     }
// //     case 4: {
// //         console.log("Thứ 5")
// //         break
// //     }
// //     case 5: {
// //         console.log("Thứ 6")
// //         break
// //     }
// //     case 6: {
// //         console.log("Thứ 7")
// //         break
// //     }
// // lab 4

// // b1
// function repeatString(str) {
//     let repeatedString = str;
//     for (let i = 1; i < 10; i++) {
//       repeatedString += str;
//     }
//     return repeatedString;
//   }
  
//   console.log(repeatString("a")); 
// function repeatString1(str) {
//     let repeatedString = str;
//     for (let i = 1; i < 10; i++) {
//       repeatedString +="-"+str;
     
//     }
//     return repeatedString;
//   }
  
//   console.log(repeatString1("a")); 
// //   b3 
// function repeatString3(str,n){
//     let repeatedString=str;
//     for(let i=1;i<n;i++){
//         repeatedString+="-"+str;
//     }
//     return repeatedString;
// }
// console.log(repeatString3('c',6))
  
// // b4
// function sum(n){
//     let sum=0;
//     for(let i=0;i<=100;i+=5){
//         sum+=i;
//     }
//     return sum;
// }
// console.log(sum())
// //b5
// function theTich(r){
//     const PI=3.14
//     return theTich=4/3*PI*Math.pow(r,3);
// }
// console.log(theTich(2))
// //b6
// function sum2(a,b){
//     let sum=0
//     if(a>b){
//         for(let i=b+1;b<a;b++){
//             sum+=i;
//         }
//         return sum
//     } else if(b>a){
//         for(let i=a+1;a<b;a++){
//             sum+=i;
//         }
//         return sum
//     }
// }
// console.log(sum2(5,9));
    