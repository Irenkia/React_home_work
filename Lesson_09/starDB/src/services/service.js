export default class Service {
    _link = 'https://swapi.dev/api/';

    async getPeoples(){
        const data = await fetch(`${this._link}people/`);
        if(data.status > 300 || data.status < 200){
            throw new Error(`An error occurred in the request ${data.statusText} : ${data.status}`)
        }
        return await data.json();
    }

    async getPlanets(){
        const data = await fetch(`${this._link}planets/`)
        return await data.json();
    }

    async getStarships(){
        const data = await fetch(`${this._link}starships/`)
        return await data.json();
    }
// name(){} - такая функция работает внутри класса или объекта
}


// const people=fetch('https://swapi.dev/api/people/1/');
// people.then((data)=>{return data.json()}).then((data1)=>{console.log(data1)});

// ----- 1  version-----------------------------------
// export const people = async (url)=>{
//     const data = await fetch(url);
//     return await data.json();
// }
//-2 вариант экспорта
//export {people};