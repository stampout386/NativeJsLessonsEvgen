import axios from "axios";
import {log} from "util";

console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

// console.log('start')
// let promise = new Promise((resolve, reject) => {
//     console.log('Promise start')
//     setTimeout((res) => {
//         console.log('SetTimeout start')
//         if (res.statusCode === 200) {
//             resolve(res.data)
//
//         } else {
//             reject('ошибочный запрос')
//
//         }
//         console.log('SetTimeout end')
//     }, 2000, {data: {id: 'dsfhkjh1324', name: 'Mik'}, message: '', statusCode: 200})
//     console.log('Promise end')
// })
// promise
//     .then((data: any) => {
//         console.log(data)
//     })
//     .then((res => {
//         console.log(res)
//     }))
//     .catch((err) => {
//         console.warn(err)
//     })
//
// console.log('end')

// just a plug
// export default () => {
// };
//get request
axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => console.log('one user', response.data))
axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => console.log('all users', response.data))

// post request
axios.post('https://jsonplaceholder.typicode.com/posts', {title: 'My request', body: 'Hello Mik', userId: 1,})
    .then(resp => console.log('My request', resp))

//put request
axios.put('https://jsonplaceholder.typicode.com/posts/1', {
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
})
    .then(resp => console.log('PUT REQUEST', resp.data))

// patch request
axios.patch('https://jsonplaceholder.typicode.com/posts/1', {
    title: 'foo',
}).then(resp => console.log('PATCH REQUEST', resp.data))

// delete request
axios.delete('https://jsonplaceholder.typicode.com/posts/1').then(resp => console.log('DELETE REQUEST', resp))

// filter request
axios.get('https://jsonplaceholder.typicode.com/posts?userId=1').then(resp => console.log("FILTER", resp.data))
axios.get('https://jsonplaceholder.typicode.com/posts/1/comments').then(resp => console.log("LISTENING", resp.data))