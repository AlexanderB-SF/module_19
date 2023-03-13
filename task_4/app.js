//________________________________________________________________________//

// Функция конструктор родительская
function ElectricAppliances(device) {
    // свойства конструткора
    this.type = 'Электроприбор',
    this.device = device
}

// методы родительского конструктора, определяет включено ли устройство в розетку
ElectricAppliances.prototype.pluggedIn = function (connected) {
    const connect = connected ? 'подключен' : 'не подключен';
    return connect;
}
// методы родительского конструктора, определяет потребляемую мощность
ElectricAppliances.prototype.electricConsumption = function (plugged) {
    if (plugged === 'подключен') {
        if (this.device === 'настольная лампа') {
            return 'Потребляемая мощность 0,5 кВт';
        } else if(this.device === 'плита') {
            return 'Потребляемая мощность 3 кВт';
        } else {
            return 'Прибор не определён';
        }
    } else {
        return 'Включите в розетку прибор';
    }
}

// ________________________________________________________________________//

// Функция конструктор наследник для лампы
function DeskLamp(device, color, brand) {
    this.device = device,
    this.color = color,
    this.brand = brand
}

// Делегирующая связь [[Prototype]]
DeskLamp.prototype = new ElectricAppliances();
// метод регулировки яркости для лампы
DeskLamp.prototype.brightnessControl = function (value) {
    const brightness = `${value}%`
    return brightness;
}

//________________________________________________________________________//

// Функция конструктор наследник для плиты
function Cooker (device, color, brand, typeCooker) {
    this.device = device,
    this.color = color,
    this.brand = brand,
    this.typeCooker = typeCooker
}

// Делегирующая связь [[Prototype]]
Cooker.prototype = new ElectricAppliances();
// метод регулировки мощности для плиты
Cooker.prototype.brightnessControl = function (value) {
    const brightness = `${value}Вт`
    return brightness;
}

//________________________________________________________________________//

// Создание экземпляров
const deskLamp = new DeskLamp('настольная лампа', 'чёрная', 'xiaomi');
const inductionСooker = new Cooker('плита', 'коричневая', 'Bosch', 'индукционная');

//________________________________________________________________________//

// Вывод информации в консоль
function onoutputDevices() {
    // Состояние подкл / не подкл прибор к розетке
    const statusLamp = deskLamp.pluggedIn(true);
    const statusCooker = inductionСooker.pluggedIn(true);
    // Потребляемая мощность
    const powerLamp = deskLamp.electricConsumption(statusLamp);
    const powerCooker = inductionСooker.electricConsumption(statusCooker);
    // Регулировка яркости / мощности
    const brightnessLamp = deskLamp.brightnessControl(30);
    const brightnessCookie = inductionСooker.brightnessControl(700);
    // Вывод информации

    // Лампа
    if(deskLamp.device) {
        if (statusLamp === 'подключен') {
            console.log(`
            Прибор - ${deskLamp.device}
            Статус - ${statusLamp} к розетке
            Яркость освещения - ${brightnessLamp}
            ${powerLamp}
            `, deskLamp);
        } else {
            console.log(`Включите ${deskLamp.device} в розетку`);
        }
    }

    // Плита
    if (inductionСooker.device) {
            if (statusCooker === 'подключен') {
            console.log(`
            Прибор - ${inductionСooker.device}
            Тип - ${inductionСooker.typeCooker}
            Статус - ${statusCooker} к розетке
            Мощность плиты на - ${brightnessCookie}
            ${powerCooker}
            `, inductionСooker);
        } else {
            console.log(`Включите ${inductionСooker.device} в розетку`);
        }
    }
}
// Вызов функции для вывода в консоль
onoutputDevices();