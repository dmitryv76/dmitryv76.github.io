function Min()
{
    var a = Number(document.form1.x1.value)//для поля ввода a
    var b = Number(document.form1.x2.value)//для поля ввода b
    var y2 = Math.min(a,b)//Выбор максимального значения
    document.form1.y2.value=y2;
}

function Ind2()
{
    var admin, name; // можно объявить две переменные через запятую
    name = "Дима";
    admin = name;
    alert( admin ); // "Дима"
}

function Ind3()
{   
    do {
        var age = prompt('Сколько вам лет?','Введите ваш возраст сюда');
    } while(!confirm("Вы уверены что вам "+ age +"?"))
}