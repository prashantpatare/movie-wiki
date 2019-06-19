import React from "react";
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown";

function Filter(props) {
  const options = [
    {
      id: 1,
      name: "Change Country",
      internal:'PosterCardView'
    }
  ];

  function onChangeCallback(id){
     return null;
  }

  return <CustomDropdown options={options} label="Filter" onChangeCallback={onChangeCallback} />;
}

export default Filter;
