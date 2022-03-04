import {rejects} from "assert";

console.log('lesson 4');

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/


// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".
const a = new Promise((resolve, rejects) => {
    console.log('Promise is created')
})
console.log(a)

// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
const b = new Promise((resolve, rejects) => {
    resolve('Promise Data')
})
b.then(resp => console.log(resp))
console.log(b)

// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль
const c = new Promise((resolve, reject) => {
    reject('Promise Error')
})
c.catch(err => console.log(err))


// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
const d = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise Data 4 task')
    }, 3000)
})
d.then(resp => console.log(resp))


// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.

const handlePromise: any = {
    promise: null,
    resolve: null,
    reject: null,
    onSuccess: (paramName: string) => {
        console.log(`Promise is resolved with data: ${paramName}`)
    },
    onError: (paramName: string) => {
        console.log(`Promise is rejected with error: ${paramName}`)
    },
}
export const createPromise = () => {
    const promise = new Promise((resolve, reject) => {

        handlePromise.resolve = resolve;
        handlePromise.reject = reject;

    })
    handlePromise.promise = promise;
    console.log(handlePromise)


}
export const resolvePromise = () => {
    handlePromise.resolve('resolve')
    console.log(handlePromise)
}
export const rejectPromise = () => {
    handlePromise.reject('reject')
    console.log(handlePromise)
}


// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.
const promiseTask6 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('My name is')
    }, 1000)
})

const onSuccess = (param: string) => {
    return `${param} Mik`
}

const print = (param: string) => {
    console.log(param)
}

promiseTask6
    .then((response: any) => onSuccess(response))
    .then(response2 => print(response2))


// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}

const promiseName = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({name: 'Anna'})
    }, 2000)

})
const promiseAge = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({age: 16})
    }, 3000)

})
const promiseCity = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({city: 'Minsk'})
    }, 4000)
})

const allPropmises = Promise.all([promiseName, promiseAge, promiseCity])
allPropmises.then((response: any) => {
    let a: any = {
        name: response[0].name,
        age: response[1].age,
        city: response[2].city,
    }
    console.log(a)
})

// just a plug
export default () => {
};