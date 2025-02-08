// print all array element in reverse order and each element after dekay 1s
// SOUL AI

let data = [1,2,3,4,5];

// let interval = setInterval(() => {
//   console.log(data.pop());
//   if(interval && data.length === 0){
//     clearInterval(interval);
//   }
// }, 1000)
let p = 1;
let timer;
for(let i = data.length - 1; i >= 0; i--){
  timer = setTimeout(() => {
    console.log(data[i]);
  }, p * 1000)
  p++
}
