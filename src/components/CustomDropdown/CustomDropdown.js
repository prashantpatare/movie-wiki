import React from "react";
import "./CustomDropdown.css";


function CustomDropdown(props){

const {options, label, onChangeCallback} = props

function onClickHandler(id){
    return function (){
    console.log('calling with id'+id)
    onChangeCallback(id);
    }
}

return(
<div className="dropdown">
  <button className="dropbtn">
   <span className="glyphicon glyphicon-chevron-down" style={{fontSize:'18px'}}></span>  
 		 {label}
  </button>
  <div className="dropdown-content">
    {options.map( i => <div><a href="#" onClick={onClickHandler(i.id)}>{i.name}</a></div>)}  
  </div>
</div>);

}

export default CustomDropdown;