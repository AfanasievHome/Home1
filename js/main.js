//пример комментария
	/*или так можно описаьт коммент*/

	//document.write("Что то там");
	//	console.log("Привет. Консоль выводит");
	//console.error("Привет. Консоль выводит");
	//console.warn("Привет. Консоль выводит");
/*	var num = 5;
		console.log("Переменная: " + num);
		
	var number = 7;
	var isHHH = false;
		if ( number > num && !isHHH)
			
			{
				console.log ("OK");
			}
			else 
			{
				console.log ("Else!");
				}   
*/
/*				var stroka = "WORD";
	switch (stroka) {
		case "45":
		  console.log("Переменная равна 45");
		  break;
		case "55":
		  console.log("Переменная равна 55");
		  break;
		case "WORD":
		  console.log("Переменная равна WORD");
		  break;
		default: //дефолтное значение
		  console.log("Переменная равна default");
		  break;
	}
	*/
	//массив
	/*
	var arr = [5,true, "stroka", 0, -100];
		console.log("Все элементы массива: " + arr);
		console.log("3 элементы массива: " + arr[2]);
		console.log("Длина массива: " + arr.length);
		*/
	//for ЦИКЛ	
	/*for (var i=100; i>5; i/=2) {  //i/=2 - это деление на 2 при следующей итерации
		console.log(i);
	}*/
	//while ЦИКЛ		
	/*var j =1000;
	while (j>=100){
		console.log(j);
		j-= 100; //отнимаем по 100
		}*/
	//var isBool =  true; безконечный цикл
	//while (isBool) {
	//}
	//do while ЦИКЛ
	/*var x=100;
	do {
		console.log( "Единичный вывод :" + x);
	}while(x<50);  */// обеспечивает единичное срабатывание
	//разнообразие использования
	/*for (var i=10; i<=20; i+=2) {  //i/=2 - это деление на 2 при следующей итерации
		if (i>15)
			break;
		console.log(i);
	}*/
	/*
	for (var i=10; i<=20; i++) {  //выводятся только не четные числа, т.к. пр четных равенство действительно и србатывает continue; перекидывая на for , т.е. без вывода.
		if (i%2 ==0)
			continue;
		console.log(i);
	}
	*/
	
	//alert ("Простое всплывающее окно!");
	//confirm ("Всплаывающее окно с окей и отмена");
	
	/* var data  = confirm ("Да или Нет");
	if(data) {
		alert("Конечно ДА, молодец");
			}
			else {				
			console.log("Не павильный ответ");
			} */
	//var data = prompt ("Скажите сколько вам лет"); //prompt ("Скажите сколько вам лет", 20) -  20 - дефолтное значение
/*
let today = new Date(); 
let year = today.getFullYear();
		
	var person = prompt ("Введите Ваше имя");

	if (confirm ("Хотите узнать сколько вам лет?")) {
		data = prompt ("Введите год рождения");
		
		year=year-data;
		alert(person + " , Вам " + year + " лет/года");
	} else {
	alert(person + ", судя по ответу Вы очень старый\ая!!! ))) ");	
	}
	*/
	
	//----------ФУНКЦИИ-----------//
	
	/*
	function info(word) {
		console.log ("Сумма чисел расчитанная функцией" + word + "!");
	}
	
	function summa(a,b) {
		var res = a+b;
		info (res);
	}
	
	var number1 = prompt ("Введите первое число");
	var number2 = prompt ("Введите второе число");
	summa(number1,number2);
	*/
	
	// возвращение значений из функции
	/*function summa (arr) {
		var sum = 0;
		for (var i = 0; i < arr.length; i++)
			sum += arr[i];
		return sum;
	}
	
	var array = [6,8,1];
	
	var rez = summa(array);//вызов функции с присвоением результата переменной
	console.log ("Результат "+ rez);
	*/
	//переменные заданные внутри функции, являются локальными
	
	
	//---------ОБРАБОТЧИК СОБЫТИЙ=======...//
	
	/*
	function onClickButton () {
		alert ('Вы нажали и вызволи функцию onClickButton');
	}
	*/
	
	// при клике идет подсчет кликов
	 var counter = 0;
	function onClickButton () {
		counter++;
		console.log (counter);
	} 
	//ВЕРНУТЬ СЮДА
	/*
	// передача параметра
	var counter = 0;
	function onClickButton (el) {
		counter++;
		el.innerHTML = "Вы нажали на кнопку: " + counter;
	el.style.backgroundColor ="RED"
		console.log(el.name);
		el.style.cssText = "border-radius' 5px; border:0; fontsize: 20px";//таким обпразом можно прописывать стили, не импользуя библиотеки стилей. !Если использовать css, то отдельно установленные стили не действуют
	}
	//Будет выводиться в консоль то что вводится в строку ввода-->
	function onInPute(el) {
		console.log(el.value);
	}
	*/
	
	/*var text = document.getElementById('text');  //присвоили объект переменной и это один объект
	console.log ("раз - " + document.getElementById('text').id);
	console.log ("два - " + document.getElementById('text').title);
	console.log ("три - " + text.title);
	text.style.color ="red"
	text.innerHTML = "New<br>string" //Замена текста вывода
	document.getElementById('text').style.backgroundColor="blue"
	*/
	
	//можно найти объекты по названию тэга(можно по document.getElementsByClassName , тогда нужно задать class ="" )
	/*
	var spans = document.getElementsByTagName('span'); 
	for (var i=0; i<spans.length; i++) 
	{
			console.log(spans[i].innerHTML); //innerHTML - Может как передавать текст внутрь тега, так и выводить значение из тэга
		
	}*/
	/*
	//Обработка форм
	
	document.getElementById('main-form').addEventListener("submit", checkForm)//пробуем без onsubmit="return checkForm(this)", если с то строчка не нужна. Используются ссылки на элементы <form id = "main-form" и <input type = "submit"
	
	//function checkForm(el) {//пробуем без onsubmit="return checkForm(this)", если с то строчка нужна эта.
	function checkForm(event) {//пробуем без onsubmit="return checkForm(this)", если с то строчка не нужна.
		event.preventDefault(); //отключаем стандартное поведение страницы, для использования без return
		var el = document.getElementById('main-form');//пробуем без onsubmit="return checkForm(this)", если с то строчка не нужна.
		
		var name = el.name.value;
		var pass = el.pass.value;
		var repass = el.repass.value;
		var stateMale = el.state.value;
		
		var fail = "";
		
		
		if (name =="" || pass =="" || stateMale == "") 
				fail = "Заполните все поля";
		else if (name.length<3 || pass.length<3) {
				fail = "Длина логина или пароля менее 3 символов";}
		else if (pass != repass) {
				fail = "Пароль и проверка пароля не сопадают";}
		else if (pass.split("&").length > 1) //проверяем на присутствие запрещенного символа,  split - разбивает строку по символу & и если эелементов больше 1, то ошибка
				fail = "Нельзя использовать символ & в пароле";
		
		if (fail != "") {
			document.getElementById('error').innerHTML = fail;
			//return false;//пробуем без onsubmit="return checkForm(this)", если с то строчка нужна эта.
		} 		else		{ 
	console.log (repass);
	console.log (pass);
	alert("Все данные корректно заполнены");
	//window.location = 'https://dzen.ru/'; //перенаправление на другую страницу
	//return false;//пробуем без onsubmit="return checkForm(this)", если с то строчка нужна эта.
	}
//return false;	//пробуем без onsubmit="return checkForm(this)", если с то строчка нужна эта.
	}
	*/
	
	//создание своих объектов
	/*
	var date = new Date();
	
	
	console.log(date.getFullYear());
	console.log(date.getMonth());//считает месяц с нуля
	console.log(date.getHours());
	console.log(date.getMinutes());
	
	//Можно вывести свое значение
	date.setHours(12);
	console.log(date.getHours());
	*/
	/*
	var arr = [10, 5, 90, 7, 8, 9, 0];
	var stroka = arr.sort().join("-");
	
	console.log(arr.join("|||")); // join объединяет в строку
	console.log(arr.sort());
	console.log(arr.sort().reverse().join("-"));
	console.log(stroka.split("-")); //из строки формируем массив
	*/
	//Создание классов (внутри класса - описание значения, функций)
	/*
	class Person {
		constructor(name, age, happiness) {
		this.name = name;
		this.age = age;
		this.happiness = happiness;
	}
	
	//единожды создав класс мы можем использовать его создавая на его основе объекты, при этом каждый раз не нужно создавать переменные
	
	 info() {
		console.log("Человек: " + this.name + ". Возраст:" + this.age);
	}
	}
	var alex = new Person('Alex',45 ,true);
	var bob = new Person('Bob',25 ,false);
	
	console.log (alex.name);
	console.log (bob.name);
	alex.info();
	*/
	
	