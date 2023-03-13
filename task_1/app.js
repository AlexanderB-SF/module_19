const age = {
    Aleksander: 21,
    Roman: 35,
    Maria: 70,
    Elena: 42,
    Vladislav: 33,
    Anastasia: 18,
}

const age2 = Object.create(age);

age2.Cristina = 24;
age2.Egor = 47;
age2.Michail = 36;

// Функция выводит в консоль все ключи и значения только собственных свойств.
function outProp(obj) {
    for(let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${obj[key]}`);
        }
    }
}

outProp(age2);


