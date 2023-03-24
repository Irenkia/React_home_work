import "./title.css"
 function Title(props){
    console.log(props);
    return(
        <h4 className="m-4 p-3">{props.text}</h4>
    )

 }

 export default Title;