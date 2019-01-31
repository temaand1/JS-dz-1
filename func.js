(function () {

    let name = prompt('Введите Имя');
    let surname = prompt('Введите Фамилию');
    let age = prompt('Ваш возраст?');
    let gender = prompt('Укажите пол (м/ж)');
    let pensia;
    if (age>65 && gender === 'м'){
         pensia='Да';
    }else if (age<65 && gender === 'м'){
        pensia='Нет';
    }
    if (age>60 && gender === 'ж'){
        pensia='Да';
    }else if (age<60 && gender === 'ж'){
        pensia='Нет';
    }

    alert(`     Полное имя: ${name+surname}
                Пол: ${gender}
                На пенсии: ${pensia}`);



}());