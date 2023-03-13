
//  Функция создаёт пустой объект, без прототипа.

function createObj () {
    return Object.create(null);
}

const objNull = createObj();
console.log(objNull);