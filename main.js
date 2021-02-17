// - створити функцію яка виводить масив

function give_arr() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return arr;
}
let array = give_arr();
console.log(array);
// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.

function greit_arr() {
    let arr = [];
    for (let i = 0; i < 20; i++) {
        arr[i] = parseInt(Math.random() * 99 + 1);
    }
    return arr;
}
let array_1 = greit_arr();
console.log(array_1);

// - створити функцію яка приймає три числа та виводить та повертає найменьше.

function min_func(a, b, c) {
    if (a < b && a < c) {
        return a;
    } else if (b < a && b < c) {
        return b;
    } else {
        return c;
    }
}
console.log(min_func(4, 1, 0));

// - створити функцію яка приймає три числа та виводить та повертає найбільше.
function max_func(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}
console.log(max_func(4, 1, 90));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

function lastic_min_max(...numbers) {
    let min, max;

    for (let i = 0; i < numbers.length; i++) {
        if (i == 0) {
            min = numbers[i];
            max = numbers[i];
        } else {

            if (min > numbers[i]) {
                min = numbers[i];
            }
            if (max < numbers[i]) {
                max = numbers[i];
            }
        }
    }
    console.log('max : ' + max);
    return min;
}

console.log('min : ' + lastic_min_max(12, 23, 4, 34, 43, 21));

// - створити функцію яка виводить масив
// - створити функцію яка повертає найбільше число з масиву

function max_arr_rundom(arr) {
    let max;
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
            max = arr[i];
        } else {
            if (max < arr[i]) {
                max = arr[i];
            }
        }
    }

    return max;
}
console.log(max_arr_rundom(greit_arr()));

// - створити функцію яка повертає найменьше число з масиву

function min_arr_rundom(arr) {
    let min;
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
            min = arr[i];
        } else {
            if (min > arr[i]) {
                min = arr[i];
            }
        }
    }

    return min;
}
console.log(min_arr_rundom(greit_arr()));

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

function sum_arr_rundom(arr) {
    let sum = 0;
    for (let elem of arr) {
        sum += elem;
    }
    return sum;
}

console.log(sum_arr_rundom(greit_arr()));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function ser_aruf_arr_rundom(arr) {
    let sum = 0;
    console.log(arr);
    for (let elem of arr) {
        sum += elem;
    }
    return sum / (arr.length);
}

console.log(ser_aruf_arr_rundom(greit_arr()));


// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
let cars = [
    {
        model: 'Nissan',
        years: 2013,
        power: 2.5,
        color: 'black'
    },
    {
        model: 'lexus',
        years: 2015,
        power: 2,
        color: 'white'
    },
    {
        model: 'BMW',
        years: 2020,
        power: 2,
        color: 'blue'
    },
    {
        model: 'mersedes',
        years: 2021,
        power: 3,
        color: 'white'
    },
    {
        model: 'VW',
        years: 2016,
        power: 2,
        color: 'black'
    },
    {
        model: 'Volvo',
        years: 2019,
        power: 2.5,
        color: 'silver'
    },
    {
        model: 'Infiniti',
        years: 2018,
        power: 3,
        color: 'black'
    },
    {
        model: 'Mazda',
        years: 2017,
        power: 3.5,
        color: 'white'
    },
    {
        model: 'Toyota',
        years: 2021,
        power: 3,
        color: 'silver'
    },
    {
        model: 'Audi',
        years: 2021,
        power: 13,
        color: 'black'
    },
    {
        model: 'Peugeot',
        years: 2020,
        power: 2,
        color: 'white'
    }
];

function get_arr_obj(arr_obj) {
    return arr_obj.length;
}
console.log(get_arr_obj(cars));
// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

function sum_lin_arr_obj(arr_obj) {
    let counter = 0;
    for (let obj of arr_obj) {
        for (let key in obj) {
            counter++;
        }
    }
    return counter;
}
console.log(sum_lin_arr_obj(cars));

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
let mas_1 = greit_arr();
let mas_2 = greit_arr();


function arr_sum_for_index(ar1, ar2) {
    let rez = [];
    console.log(ar1);
    console.log(ar2);
    for (let i = 0; i < ar1.length; i++) {
        rez.push(ar1[i] + ar2[i]);
    }
    return rez;
}
console.log(arr_sum_for_index(mas_1, mas_2));
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

function cheng_place_index(arr, i) {

    console.log(arr);
    let cheng_conteiner = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = cheng_conteiner;
    return arr;
}
console.log(cheng_place_index(greit_arr(), 4));

//obj

function cheng_place_obj_index(arr_obj, i) {

    console.log(arr_obj);
    let cheng_conteiner = arr_obj[i];



    arr_obj[i] = arr_obj[i + 1];



    arr_obj[i + 1] = cheng_conteiner;

    return arr_obj;
}
console.log(cheng_place_obj_index(cars, 4));

// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

function greit_arr_rundo_0_9() {
    let arr = [];
    for (let i = 0; i < 100; i++) {
        arr[i] = parseInt(Math.random() * 2);
    }
    return arr;
}
console.log('---------------------------------------');

function buble_up_0(arr) {
    console.log(arr);
    let count = 0;
    let add_arr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {

            add_arr[count] = 0;
            arr.splice(i, 1);
            i--;
            count++;
        }
    }
    return arr.concat(add_arr);
}
console.log(buble_up_0(greit_arr_rundo_0_9()));



// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"

function add_body_div() {
    let div_elem = document.createElement('div');
    div_elem.innerText = "Hello owu";
    div_elem.classList.add('ugeli_div');

    document.body.appendChild(div_elem);
}

add_body_div();

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

let some_text = 'Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи';

function add_some_elem(teg, text) {
    let some_teg_elem = document.createElement(teg);
    some_teg_elem.innerText = text;
    some_teg_elem.classList.add('ugeli_div');

    document.body.appendChild(some_teg_elem);
}

add_some_elem('p', some_text);


// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.

function add_some_obj_elem(teg, arr_obj_car) {
    let some_teg_elem = document.createElement(teg);

    for (let elem_obj of arr_obj_car) {

        for (let key in elem_obj) {
            some_teg_elem.innerHTML += elem_obj[key] + '<br>';
        }
        some_teg_elem.innerHTML += '<hr>';
    }

    some_teg_elem.classList.add('ugeli_div');

    document.body.appendChild(some_teg_elem);
}
add_some_obj_elem('div', cars);

// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
/* 
function add_each_obj_elem(teg, arr_obj_car) {
    let some_teg_elem = document.createElement(teg);

    for (let elem_obj of arr_obj_car) {
        let each_block_car = document.createElement('div');

        for (let key in elem_obj) {
            each_block_car.innerHTML += elem_obj[key] + '<br>';
        }
        each_block_car.classList.add('ugeli_div');

        some_teg_elem.appendChild(each_block_car);
    }

    some_teg_elem.classList.add('ugeli_div');

    document.body.appendChild(some_teg_elem);
}
add_each_obj_elem('div', cars);
 */
// Для кожної властивості створити всередені блока автомоблія свій блок


function add_each_obj_elem(teg, arr_obj_car) {
    let some_teg_elem = document.createElement(teg);

    for (let elem_obj of arr_obj_car) {
        let each_block_car = document.createElement('div');

        for (let key in elem_obj) {
            let bock_property = document.createElement('div');

            bock_property.innerHTML += elem_obj[key] + '<br>';

            bock_property.classList.add('property');

            each_block_car.appendChild(bock_property);
        }
        each_block_car.classList.add('ugeli_div');

        some_teg_elem.appendChild(each_block_car);
    }

    some_teg_elem.classList.add('ugeli_div');

    document.body.appendChild(some_teg_elem);
}
add_each_obj_elem('div', cars);


// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// Частковий приклад реультату:

let usersWithId = [
    {
        id: 1,
        name: 'vasya',
        age: 31,
        status: false
    },
    {
        id: 2,
        name: 'petya',
        age: 30,
        status: true
    },
    {
        id: 3,
        name: 'kolya',
        age: 29,
        status: true
    },
    {
        id: 4,
        name: 'olya',
        age: 28,
        status: false
    },
];
let citiesWithId = [
    {
        user_id: 3,
        country: 'USA',
        city: 'Portland'
    },
    {
        user_id: 1,
        country: 'Ukraine',
        city: 'Ternopil'
    },
    {
        user_id: 2,
        country: 'Poland',
        city: 'Krakow'
    },
    {
        user_id: 4,
        country: 'USA',
        city: 'Miami'
    },
];

function obj_merg(usersWithId, citiesWithId) {

    let user_citi = [];
    for (let elem_usersWithId of usersWithId) {

        let obj_user_citi = {};

        for (let key_elem_usersWithId in elem_usersWithId) {
            obj_user_citi[key_elem_usersWithId] = elem_usersWithId[key_elem_usersWithId];
        }
        for (let elem_citiesWithId of citiesWithId) {

            if (elem_usersWithId.id == elem_citiesWithId.user_id) {
                let adres_obj = {};
                for (let key_elem_citiesWithId in elem_citiesWithId) {
                    if (key_elem_citiesWithId != 'user_id') {
                        adres_obj[key_elem_citiesWithId] = elem_citiesWithId[key_elem_citiesWithId];
                    }
                }
                obj_user_citi['adress : '] = adres_obj;
            }

        }

        user_citi.push(obj_user_citi);
    }

    return user_citi;

}
console.log(obj_merg(usersWithId, citiesWithId));





// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];
for (let elem_rul of rules) {

    rule_create(elem_rul.title, elem_rul.body);
}
function rule_create(title_rul, body_rul) {

    let wrap_struct = document.querySelector('.wrap_struct');

    let block_title = document.createElement('div');
    block_title.classList.add('block_title');
    block_title.innerHTML = title_rul;


    let block_body = document.createElement('div');
    block_body.classList.add('block_body');
    block_body.innerHTML = body_rul;

    wrap_struct.appendChild(block_title);
    wrap_struct.appendChild(block_body);
}

// ===========додаткове від віктора========
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!

function number_copy_two(n) {
    if (n == 2) {
        console.log('YES');
    } else if (n < 2) {
        console.log('NO');
    } else {
        number_copy_two(n / 2);
    }
}
number_copy_two(3);


// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій

let users_arr = [
    {
        name: 'name_User_1',
        age: 18,
        skills: ['Skils_11']
    },
    {
        name: 'name_User_2',
        age: 28,
        skills: ['Skils_21', 'Skils_22']
    },
    {
        name: 'name_User_3',
        age: 38,
        skills: ['Skils_31', 'Skils_32', 'Skils_33', 'Skils_34', 'Skils_35', 'Skils_36']
    }
]

console.log(users_arr);



function copy_arr_obj(arr_obj) {
    //  console.log(Array.isArray(arr_obj));
    if (Array.isArray(arr_obj)) {
        let new_arr_obj = [];

        for (let elem of arr_obj) {

            if (typeof elem === 'object') { copy_arr_obj(elem); }

            new_arr_obj.push(elem);
        }
        return new_arr_obj

    } else if (typeof arr_obj === 'object' && Array.isArray(arr_obj)) {

        let new_obj = {};
        for (let key in arr_obj) {

            if (typeof arr_obj[key] === 'object') { copy_arr_obj(arr_obj[key]); }

            new_obj[key] = arr_obj[key];
        }
        return new_obj;

    }

}
console.log('copy_users_arr ')
console.log(copy_arr_obj(users_arr));

// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// ===========додаткове========
