//функции
//function declaration
//
// function greet(name) {
//     console.log('привет -', name)
//}
//
//function expression
// const greet2 = function greet2(){
//     console.log('привет 2 -', name)
//}
//
 // greet('lena')
// greet2('lena')
//
 // console.dir(greet) // выводит


// Анономыне функции
//
// let counter = 0
//
//  setInterval(function (){
//     console.log(++counter)
// },100)
//
//
// let counter2 = 0
//
//   const interval = setInterval(function (){ //создаём интервал (похоже не цикл )
//       if (counter2 === 5) {
//           clearInterval(interval) //выключаем интервал
//       }
//       else {
//           console.log(++counter2)
//       }
// },100)

//стрелочные функции
// function greet(name){
//     console.log('Привет-',name)
// }
//
// const arrow = (name, age) => {
//     console.log('Привет-',name , 'мне ',age, 'года') //функция
// }
//
// const arrow2 = name => console.log('Привет-',name)//стрелочная функция
//
// arrow('Артём','год')
// arrow2('Артём')
//
// const pow2 = num => {
//     return num **2 // возведение в вторую степень **
// }
// const pow2 = num => num **2
//
//
// console.log(pow2(5))