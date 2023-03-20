//Переменные
// var name = 'Andresito' //Вар - можем менять значение переменных // не использовать
// const lastName = 'Molodejesito' //Конст - не можем менять значение переменных // использовать
// let pinus = 19 // тоже можем менять значение // использовать
// const isProgtammer = true
// const $ = 'money '
//
// console.log($)
// alert('Нажмите кнопку "ОК" чтобы удалить нюрсу из дбд')
// camelCase если перемнная 2 слова - первое пишем с маленькой , второе с большой (буквы)


//Mutirovanie
// console.log('Имя человека: ' + name + ', а фамилия человека ' + lastName)
//
// const age = prompt('Введите возраст')
// alert(`Соотношение возраста и пинуса - в  ${age} лет и ${pinus} см`)


//Операторы
// let currentYear = 2023
// const birthYear = 2005
//
// const age2 = currentYear - birthYear;
// console.log(age2)
//
// const a = 10
// const b = 5
// let c =32
//
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(currentYear++)//после выводы прибавит 1
// console.log(++currentYear)//до вывода прибавит 1
// c = c+a
// c +=a
// c -=a
// c /=a
// c *=a


//Типы данных
// const isProgtammer2 = true
// const name2 = 'artem'
// const age3 = 28
// let x // если пишем лет то можно не вносить начальное значение
//
// console.log(typeof isProgtammer2)
// console.log(typeof name2)
// console.log(typeof age3)
// console.log(typeof x)
// console.log(null)


//Приоритет операторов
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
//
// const fullAge = 29
// const year1 = 2005
// const year2 = 2023
//
// // > < >= <=
// const isfullAhe = year2 - year1 >= fullAge //26 >= 27 => true
// console.log(isfullAhe)


// Условне операторы
// const courseStatus = 'pending' // ready , fail , pending
//
// if (customElements === 'ready') {
//     console.log('Курс уже готов')
// } else if (courseStatus === 'pending') {
//     console.log('Курс пока разрабатывается')
// } else {
//     console.log('Курс не получился')
// }
// const num1 = 42
// const num2 = '42'
//
// console.log(num1 == num2) // 2 ровно по значению , 3 по типу данныз


//Логические операторы
//true && true = true
//false && true = false
//false && false = true
//true || true = true
//true || false = true
//false || false = true


// Массивы
// const cars = ['Мазда', 'Мерседес','Форд']
//
// console.log(cars.length)
// console.log(cars[1])
// console.log(cars[0])
// console.log(cars[2])
//
// cars[0]='Porshe'
// cars[cars.length] = 'Mazda'
// console.log(cars)


//Циклы
// const cars2 = ['Мазда', 'Мерседес','Форд','Porsche']
//for {let i = 0; i < cars2.length; i++) {
// const car = cars2[i]
//console.log(car)
// }

//Объект
// const person = {
//     firNam: 'Maximo',
//     lasNam: 'Bomjiho',
//     yer: 2006,
//     languages: ['Ru', 'En', 'It'],
//     hasWife: false,
//     greet: function () {
//         console.log('greet')
//     }
// }
// console.log(person)
// console.log(person.firNam)
// console.log(person.lasNam)
// const key = 'yer'
// console.log(person[key])
// person.greet()






