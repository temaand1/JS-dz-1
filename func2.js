(function () {

    var string = prompt('Введите числа через пробел');
    var arr = string.split(" ");
    let result = {};
    arr.forEach(function(a){
        if (result[a] != undefined)
            ++result[a];
        else
            result[a] = 1;
    });
    for (let key in result)
        document.write('число ' + key + ' == ' + result[key] + ' раз(а) <br>');


}());