// // Khai báo array rỗng
// let arr = [];

// // Khai báo array
// let number = [];

// // Gán giá trị cho các phần tử của array thông qua chỉ số
// number[0] = 1;
// number[1] = "Bùi Hiên";
// number[2] = true;

// // Khai báo và khởi tạo giá trị cho array
// let myArr = [1, 2, 3, 4, true, false, "Nguyễn Văn A"];
// // console.log(myArr)
// for(let i=0;i<myArr.length;i++){
//     console.log(myArr[i]);
// }
// myArr.forEach((value,index) =>
// {
//     console.log(value,index)
// })
// // myArr.push("Cuong2k2")
// // myArr.pop("Cuong2k2")
// // console.log(myArr)
// myArr.splice(2,2,10,20,30) //thay doi mang ban dau
// console.log(myArr)

// let subArr=myArr.slice(0,4) //lay tu index 0 -> 3
// console.log(subArr)

// // const array1 = ['a', 'b', 'c'];
// // const array2 = ['d', 'e', 'f'];
// // const array3 = array1.concat(array2);

// // console.log(array3);
// // Expected output: Array ["a", "b", "c", "d", "e", "f"]


// //sort
// let numbers=[3,5,2,34,52,4,34]
// console.log(numbers.sort((a,b)=> b-a))
// // split
// // let names = 'Bilbo, Gandalf, Nazgul';

// // let arr1 = names.split(', ');

// // for (let name of arr1) {
// //   alert( `A message to ${name}.` ); // A message to Bilbo  (and other names)
// // }
// let chars="a-a-a-a-a-a-a-a-a-a-a-a"
// let arrChars=chars.split('-')
// console.log(arrChars)
// let newChars=arrChars.join("&")
// console.log(newChars)


// let arr1=[1,2,3]
// let arr2=[1,2,3]
// let arr3=[3,2,1]
// let str="1,2,3"
// console.log(arr1==arr2)
// console.log(arr1==arr3)
// console.log(arr1==str) //true chuyển đổi arr1 từ mảng sang chuỗi
// console.log(arr2===str)
// console.log(arr3==arr3.sort())
// console.log(arr1==arr1.reverse())
// console.log(arr1==arr1.reverse().sort())