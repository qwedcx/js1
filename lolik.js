//alert("Сумма равна " + (sum = parseFloat(prompt("Введите первое число: ", 0)) + parseFloat(prompt("Введите второе число: ", 0))));
//alert(numOfPages = Math.ceil(parseInt(prompt("Введите количество фото в папке: ", 0)) / parseInt(prompt("Введите количество на 1 странице: ", 0))))
// let number, d1,d2,d3,d4,d5,d6;
// number = parseInt(prompt("Введите 6 значное число", 111111))
// d1 = number % 10;
// d2 = Math.floor(number / 10) % 10
// d3 = Math.floor(number / 100) % 10
// d4 = Math.floor(number / 1000) % 10
// d5 = Math.floor(number / 10000) % 10
// d6 = Math.floor(number / 100000) % 10
// alert(d1+d2+d3+d4+d5+d6)


/*---------------------------------------------------------------------------------------*/
//Даны катеты прямоугольного треугольника. Найти его гипотенузу

// let c1 = parseInt(prompt("1 Катет: ")), c2 = parseInt(prompt("2 Катет: ")), g = Math.sqrt(Math.pow(c1, 2) + Math.pow(c2, 2)); 
// alert(g)

//С некоторого момента прошло 234 дня. Сколько полных недель прошло за этот период?

console.log(Math.floor(234/7))

//2.16. Дано трехзначное число. Найти число, полученное при перестановке первой и 
//второй цифр заданного числа.

let number, d1, d2, d3;
number = parseInt(prompt("Введите 3 значное число", 111))
d1 = number % 10;
d2 = Math.floor(number / 10) % 10
d3 = Math.floor(number / 100) % 10
resNum = parseInt(String(d1) + d2 + String(d3))
alert(resNum)