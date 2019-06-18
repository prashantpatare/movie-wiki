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
     const selected = options.filter(optn => optn.id === id)
     props.onViewChange(selected[0].internal);
  }

  return <CustomDropdown options={options} label="Filter" onChangeCallback={onChangeCallback} />;
}

export default Filter;
