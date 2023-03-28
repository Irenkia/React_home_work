import React,{useState,useEffect} from "react";
import CircularProgress from '@material-ui/core/CircularProgress';

import "./item-list.css";

const ItemList = ({ entity }) => {
  //console.log(entity);
  const[proporty,setProporty]=useState(entity);// при загрузке стр proporty будет = null
  useEffect(()=>{
    setProporty(entity);// при каждом обновлении стр proporty будет = Array(10)
  });
  console.log(proporty);
  return (
      <ul className="item-list list-group">
        {proporty === null? <CircularProgress />: proporty.map((item,index)=>{
          return <li className="list-group-item" key={index*5 +'b'}>{item.name}</li>
        })}
      </ul>
  );
};

export default ItemList;

// export default class ItemList extends Component {

//   render() {
//     return (
//       <ul className="item-list list-group">
//         <li className="list-group-item">
//           Luke Skywalker
//         </li>
//         <li className="list-group-item">
//           Darth Vader
//         </li>
//         <li className="list-group-item">
//           R2-D2
//         </li>
//       </ul>
//     );
//   }
// }


//  <ul className="item-list list-group">
// {proporty === null? <CircularProgress />: proporty.map((item,index)=>{
//   return <li className="list-group-item" key={index*5 +'b'}>{item.name}</li>
// })}
// </ul> 