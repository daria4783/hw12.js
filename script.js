// 1.Напиши скрипт, який, для об'єкта user, послідовно:
// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of

const user = {
    hobby: "dancing",
    premium: true,
}
user.hobby = 'skydiving';
user.premium = false;
user.mood = "happy";
console.log(user);

const res = Object.entries(user)
for (const entry of res) {
    const key = entry[0]
    const value = entry[1]
    console.log(`${key}: ${value}`);
    
}


// 2.Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.

const user2 = {
  hobby: "dancing",
  premium: true,
};
user2.hobby = "skydiving";
user2.premium = false;
user2.mood = "happy";
console.log(user2);

function countProps(obj) {
    return Object.keys(obj).length;
}

console.log(countProps(user2));


// 3.Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".

const job = {
    Dave: 23,
    Logan: 12,
    Chris: 22,
    Neil: 33,
}

const value = Object.values(job)
function findBestEmployee(employees) {
    return Math.max(...employees)
}
console.log(findBestEmployee(value));


// 4.Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".


const job2 = {
  Dave: 23000,
  Logan: 12000,
  Chris: 22000,
  Neil: 33000,
};

const salary = Object.values(job)

function countTotalSalary(employees) {
    let total = 0;
    for (const element of employees) {
        total += element
    }
    return total
}
console.log(countTotalSalary(salary));

// 5.Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. Повертає масив значень певної властивості prop з кожного об'єкта в масиві.

const arr = [
    { name: 'Ann', status: 'dead', age: 22 },
    { name: 'Luce', status: 'alive', age: 52 },
    { name: 'Neil', status: 'he is fine', age: 19 }
]

function getAllPropValues(array, prop) {
    const newArray = [];
    for (const element of array) {
        newArray.push(element[prop])
    }
    return newArray
}
console.log(getAllPropValues(arr, "status"));


//6.Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).

const arr2 = [
  { name: "Apple", price: 2, amount: 22 },
  { name: "Banana", price: 3, amount: 44 },
  { name: "Dragon Fruit", price: 7, amount: 8 },
];

function calculateTotalPrice(allProdcuts, productName) {
    let total = 0;

    for (const element of allProdcuts) {
        if (element.name === productName) {
            total = element.price * element.amount
        }
    }
    return total
}

console.log(calculateTotalPrice(arr, "Dragon Fruit"));
