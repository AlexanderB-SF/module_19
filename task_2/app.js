const age = {
    aleksander: 21,
    roman: 35,
    maria: 70,
    elena: 42,
    vladislav: 33,
    anastasia: 18,
}

// Функция определяет, есть ли свойство с переданным именем в переданном объекте,
// результат выводит в консоль в виде true || false.

function prop(obj, name) {
    const result = obj.hasOwnProperty(name);
    return result;
}

console.log(prop(age, "roman"));


