'use strict';
//length выведет колличество символов в строке, toUpperCase переаедет все символы верхний регистр
//toLowerCase переведет все символы в нижний регистр
let str ='test';
  console.log(str.length);
  console.log(str.toUpperCase());
  console.log(str.toLowerCase());

//Math.round округляет до ближайшего целого числа, Должно быть числом без символов
let twelve = "12.2222px";
  console.log (Math.round(twelve));
  console.log (parseInt(twelve));
  console.log (parseFloat(twelve));

function calc(a, b) {
  return (a + b);
}
document.write(calc(5, 6));
document.write(calc(5, 61));
//ФУНКИИ 
//новый синтакис задание функий через =>, не во всех случаях можно мспользовать =>
// let calc = (a,b) => a+b

// console.log(calc(3,4));
// console.log(calc(31,14));

//function declaration рекомендовано использовать в начале
// function calc(a, b) {
//         return(a + b);
// }
// console.log(calc(3,4));
// console.log(calc(31,14));

// function retVar() {
//         let num = 50;
//         return num;
// }

//function expresions ето когда фунцию присваеваем в пременную.
// let calc = function(a,b) {
//         return(a + b);
// }
// console.log(calc(3,4));

// console.log(calc(31,14));

// function retVar() {
//         let num = 50;
//         return num;
// }


//с помощью return, переменная "num"  вернется во внешнюю область видимости, как и для чего ето можно использовать.
//}
//например во внешнем областе мы хотим использовать ету переменную.
//let anotherNum = retVar(); сюда мы можем поместить результаты выполнения етой функции
//let anotherNum = retVar();
//console.log(anotherNum);     
//глобальная переменная //let num = 20;
// let num = 20;
// function showFirstMessage(text) {
//         alert(text);
//         let num = 10;
//         console.log(num);
// let num = 10; объявлена внутри фунции и видна будет только внутри функцц, и объявлена внутри фунции
//ето будет абсолютно разные переменные
// }
// showFirstMessage ("Hello!");
// console.log(num);

//УСЛОВНЫЕ ОПЕРАТОРЫ
//let num = 50;
// if (num < 49) {
//     console.log('неверно!!!')
// } else if (num > 100) {
//         console.log('много!')
//       }
//   else {
//       console.log('done!')
//   };

//опреатор ? заменяет else 
//   (num == 50) ? console.log('верно') : console.log('неверно!');

  //конструкция switch ето модифицированный if. case ето и есть замена того if.
  //проверяет на соответствие без знаков == просто case 50: и всегла ставим break
  // let num = 50;
  // switch (num) {
  //   case num < 49:
  //     console.log('неверно!');
  //     break;
  //   case num > 100:
  //     console.log('много!');
  //     break;
  //   case num > 80:
  //     console.log('много!');
  //     break;
  //   case  50:
  //     console.log('верно!');
  //     break;
  //   default:
  //   console.log('что то пошло не так...');
  //   break;
  // }

  //циклы для повторения однотипных действий do while
//   let num = 50;
//   while (num < 55) {
//       console.log(num);
//       num++;
//   }
//   do {
// console.log(num);
// num++;
//   }
// while (num < 55);
//выходим из цикла при помощи break, полностью прирывает цикл
//если просто хотим пропустить етот шаг, то есть continue и цикл иде дальше

//цикл for используем в 95%
// for (let num = 50; num < 55; num++) {
//     if (num == 53){
        //break прерываем цикл
        //continue пропускаем шаг(прерывание одной интерации цикла)
//  }
//     console.log(num);
// }

//Ассоциативный массив
// var hash = {
//   cat : 'kitten',
//   'my-dog' : 'puppy', // если ключ содержит символы, отличные от алфавитно-цифровых, он заключается в кавычки
//   cow : 'calf',
// };

// console.log(hash.cat);
// console.log(hash['my-dog']);
// console.log(hash.cow);

// оператор typeof определяет тип данных
// console.log(typeof '42');







// деление на 0 получаем Infinity
// console.log(6/0);


// let isCheked = true,
//     isClosed = false;

// console.log(isCheked && isClosed);

// let incr = 10,
//     decr = 10;

// console.log(incr++);
// console.log(decr--);

//создание объекта
// let person = {
//     name: "fis",
//     age: "40",
//     isMaried: false
// };
// console.log(person.age);
// console.log(person.isMaried);
// console.log(person["name"]);

let options = {
  width: 1024,
  heigh: 1024,
  name: 'test'
};
console.log(options.width);
options.bool = false; //добавляем в объект
options.color = {
  border: 'black',
  bg:     'red'
};
delete options.bool; //удаляем из объекта
console.log(options);

for (let key in options) { //указываем объект который хотим перебрать в key будет попадать каждое свойство из options
  console.log('свойство ' + key + " имеет значение " +options[key]);
}
console.log(Object.keys(options).length); //колличество елемнтов о объекте

// вся информация от пользователя приходит в виде строк
// вне зависимости от того как мы ее получили, проверяем на тип вводимых данных
//если перед значением представаленным строкой поставить + то она обратится в числовой тип данных
// let answer = +prompt("есть ли вам 18?", "да");
// console.log(typeof(answer));

//создаем массив, он может содержать не только строки, но и числа, функции, объекты...
//он служит для хранения любых типов данных
// let arr = ['plum.png', 'orange.jpg', 'flo.jpg', 'MY.bmp'];
// console.log(arr[1]);

// console.log("агг" + "- object");
// console.log(4 + +"- object");

//цикл for начало, условие, шаг
// for (let i=1; i <8; i++){
//     console.log(i);
// }
// 7 типов данных
// console.log(typeof {});
// console.log(typeof[]);
// console.log(typeof 0);
// console.log(typeof false);
// console.log(typeof "string");
// console.log(typeof undefined);
// console.log(typeof symbol());
// console.log(typeof null);

