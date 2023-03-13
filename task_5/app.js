//________________________________________________________________________//

// родительский класс
class ElectricAppliances {
    constructor (device) {
        this.type = 'Электроприбор';
        this.device = device;
    }

    pluggedIn (connected) {
        const connect = connected ? 'подключен' : 'не подключен';
        return connect;
    }

    electricConsumption (plugged) {
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
}

// ________________________________________________________________________//

// наследник для лампы
class DeskLamp extends ElectricAppliances{
    constructor (device, color, brand) {
        super (device);
        this.color = color;
        this.brand = brand;
    }

    brightnessControl (value) {
        return `${value}%`;
    }
}

//________________________________________________________________________//
// наследник для плиты

class Cooker extends ElectricAppliances{
    constructor (device, color, brand, typeCooker) {
        super (device);
        this.color = color,
        this.brand = brand,
        this.typeCooker = typeCooker
    }

    brightnessControl (value) {
        return `${value}Вт`;
    }
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