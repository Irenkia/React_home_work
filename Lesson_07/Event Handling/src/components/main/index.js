import React, { Component } from 'react';
import Btn from '../btn';
import Display from '../display';

import "./main.css";

export default class Main extends Component {
    state = {
        counter:0
    }
    onUpdateCounter=(sing)=>{
//        console.log(sing);
        if(sing === '+'){
            this.setState(({counter})=>{
                return{
                    counter: (counter + 1)
                }
            })
        }else if(sing === '-'){
            this.setState(({counter})=>{
                return{
                    counter: (counter - 1)
                }
            })
        }
    }
  render() {
    const {counter} = this.state;
    return (
        <main>
            <div className="wrap">
                <Btn onUpdateCounter={this.onUpdateCounter} sing='+'/>
                <Display counter={counter}/>
                <Btn onUpdateCounter={this.onUpdateCounter} sing='-'/>
            </div>
        </main>
    );
  }
}


// const Main = () => {
//   let counter = 0;
//   const updateCounter=(sing)=>{
//     //console.log('good');
//     if(sing === '+'){
//         ++counter;
//     }else if(sing === '-'){
//         --counter;
//     }
//     console.log(counter);
//   }
//   return (
//     <main>
//       <div className="wrap">
//         <div className="btn" onClick={() => {updateCounter('+')}}>+</div>
//         <div className="display">{counter}</div>
//         <div className="btn" onClick={() => {updateCounter('-')}}>-</div>
//       </div>
//     </main>
//   );
// };

// export default Main;

//    1 version
//  ()=>{}

//    2 version
//  a => {
//     return a + a;
//  }

//    3 version
//  a => a * a;
