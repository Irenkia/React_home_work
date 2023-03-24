import React from "react";
//import {BTN} from "../../constants/styles"
import top from "../../assets/top.png";
const Main = () => {
    const BTN ={
        width: '12rem',
        height: '3.2rem',
        backgroundColor: 'rgba(22, 160, 133, 1)',
        color: 'white'
    }
  return (
    <div className="main-content">
      <img className="img-fluid" src={top} alt="top img" />
      <div className="justify-content-center container p-5 text-center content">
      <h3 className="align-items-center mb-3">Rappresent your life with a simple photo</h3>
      <div className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Etiam velit est, ullamcorper a vestibulum eu, pulvinar ut orci. 
        Donec gravida orci non suscipit consequat. Suspendisse ut dui 
        sed tortor ultrices tempus. Phasellus dictum lectus ex, ut 
        placerat massa pharetra at. Nullam felis dolor, volutpat nec 
        congue eget, ornare vitae quam. In finibus urna vel molestie 
        tempus. Duis et convallis odio, convallis porta eros. Curabitur 
        vel leo turpis. Morbi consequat ante in odio varius hendrerit.</div>
    <div className="mb-3"> Vestibulum varius pretium mattis. Aliquam vulputate maximus 
        est, quis euismod elit sodales placerat. Proin pretium arcu a 
        odio consectetur, nec vestibulum nisi venenatis. Nulla eleifend 
        nisi vel pretium aliquam. Cras ornare elementum vehicula. 
        Curabitur at hendrerit nisl. Donec ligula mauris, commodo non 
        diam et, aliquam aliquet lectus. Maecenas volutpat, nisl in 
        consectetur condimentum, ligula mauris fringilla mauris, eu 
        aliquet mauris ligula at orci. Cras efficitur non massa in 
        auctor. Sed posuere leo quam, sed varius massa euismod sit 
        amet. Proin vehicula egestas massa. Nullam tempus massa a 
        elementum posuere. Nam ac velit ac purus vestibulum fringilla. 
        Nunc a tortor posuere, ultrices nisi id, interdum risus. Donec 
        laoreet tempus libero ut viverra. Proin dapibus magna vel urna 
        ornare, et pretium metus facilisis. </div>
        <button type="button" style={BTN} className="btn btn-lg text-uppercase mt-5">get started</button>
        </div>
    </div>
  );
};

export default Main;
