import React from 'react';
import './App.css';
import Lesson1 from './lessons/lesson1/lesson1';
import axios, {AxiosResponse} from "axios";
import {Simulate} from "react-dom/test-utils";
import {fireEvent} from "@testing-library/react";


// import './lessons/lesson2/lesson2';
import Lesson3 from './lessons/lesson3/Lesson3';
import Lesson4 from './lessons/lesson4/Lesson4';
// import './lessons/lesson5/lesson5';
// import './lessons/lesson6/lesson6';
// import './lessons/lesson7/lesson7';
// import './lessons/lesson8/lesson8';

function App() {

    // задача с собеса
    // let arr = [1, [1, 2, [3, 4]], [2, 4]];
    // let result: any = [];
    // const a = (array: any) => {
    //     for (let i = 0; i < array.length; i++) {
    //         if (Array.isArray(array[i])) {
    //             a(array[i])
    //         } else {
    //             result.push(array[i]);
    //         }
    //     }
    // }
    //
    // const b = (array: any) => {
    //     let result: any = [];
    //     array.forEach((item: any) => {
    //         if (Array.isArray(item)) {
    //             // @ts-ignore
    //             result = [...result, ...b(item)]
    //         } else {
    //             result = [...result, item]
    //
    //         }
    //     })
    //     return result
    // }
    //
    // console.log(b(arr))
    // // a(arr);
    // // console.log(result)
    // const promise1 = axios.get('http://httpbin.org/ip');
    // const promise2 = axios.get('http://httpbin.org/get');
    // const promise3 = Promise.all([promise1, promise2])
    // async function getAdressIp() {
    //     let adressIp = await axios.get('http://httpbin.org/ip');
    //     console.log('adressIp: ' + adressIp.data.origin)
    // }
    //
    // getAdressIp();
    // promise3.then((result) => {
    //     console.log(result)
    //     console.log('finish ALL')
    // }).catch((error) => {
    //     console.log(error)
    // })
    //
    // promise1.then((data) => {
    //     console.log(data.data)
    // })
    //     .catch((error) => {
    //         console.log(error)
    //     })
    // promise2
    //     .then((data) => {
    //         console.log(data)
    //         return data.data
    //     })
    //     .then((datadata => {
    //         console.log(datadata.origin)
    //     }))
    //     .catch((error) => {
    //         console.log(error)
    //     })
    // console.log(Promise.resolve(300).then((data) => {
    //     console.log(data)
    // }))
    // function getNumber(n: number) {
    //     const promise = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(Math.random())
    //         }, n)
    //
    //     })
    //     return promise
    // }
// //@ts-ignore
//     getNumber(10).then(number => console.log(number * 100))
//     //@ts-ignore
//     getNumber(20).then(number => console.log(number * 100))
//     //@ts-ignore
//     getNumber(30).then(number => console.log(number * 100))
//     //@ts-ignore
//     getNumber(40).then(number => console.log(number * 100))
    // const repo = {
    //     saveAsync(data: string, time: number) {
    //         const promise = new Promise((resolve, reject) => {
    //             try {
    //                 setTimeout(() => {
    //                     localStorage.setItem('some-key', data)
    //                     resolve()
    //                 }, time)
    //
    //             } catch (error) {
    //                 reject(error)
    //             }
    //         })
    //         return promise
    //     },
    //     read() {
    //         return new Promise((resolve, reject) => {
    //             //@ts-ignore
    //             resolve(localStorage.getItem('some-key'))
    //         })
    //     }
    // }
    // repo.saveAsync('hello', 2000)
    //     .then(() => {
    //         console.log('Save Hello')
    //     })
    // const run = async (time: number) => {
    //     await repo.saveAsync('huiiiii', time)
    //     console.log('Save HI')
    //
    //     const data = await repo.read();
    //     console.log(data)
    // }
    //
    // run(3000)
    // function findUserInDB(id: number) {
    //     let users = [{name: 'Mik', id: 1, friends: 3}, {name: 'Pavel', id: 2, friends: null}, {
    //         name: 'Evgen',
    //         id: 3,
    //         friends: 4
    //     },]
    //     return new Promise((res, rej) => {
    //         setTimeout(() => {
    //             let user = users.find(u => u.id === id)
    //             if (!user) {
    //                 rej('Пользователь не найден')
    //             } else {
    //                 res(user)
    //             }
    //         }, 1000)
    //
    //     })
    // }
    //
    //
    // const getUserAsync = async (id: number) => {
    //     try {
    //         const user: any = await findUserInDB(id)
    //         console.log(user.name)
    //         const friend: any = await findUserInDB(user.friends)
    //         console.log(friend.name)
    //         const friend2: any = await findUserInDB(friend.friends)
    //         console.log(friend2.name)
    //     } catch (err) {
    //         console.error(err)
    //     }
    //
    // }
    //
    // getUserAsync(1);
    // findUserInDB(1)
    //     .then((user: any) => {
    //         console.log(user.name)
    //         return user.friends
    //     })
    //     .then(friendsId => {
    //         let friends = findUserInDB(friendsId)
    //         return friends
    //     })
    //     .then((friends: any) => {
    //
    //         return friends.name
    //     })
    //     .then(friends2 => {
    //         console.log(friends2)
    //     })
    //     .catch((err) => {
    //         console.error(err)
    //     })


    return (
        <div className="container">
            {/*<Lesson1/>*/}
            {/*<Lesson3 />*/}
            <Lesson4/>
        </div>
    );
}

export default App;
