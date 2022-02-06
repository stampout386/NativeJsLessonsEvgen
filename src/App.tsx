import React from 'react';
import './App.css';
import Lesson1 from './lessons/lesson1/lesson1';
// import './lessons/lesson2/lesson2';
// import Lesson3 from './lessons/lesson3/Lesson3';
// import Lesson4 from './lessons/lesson4/Lesson4';
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


    return (
        <div className="container">
            <Lesson1/>

            {/*<Lesson3 />*/}
            {/*<Lesson4 />*/}
        </div>
    );
}

export default App;
