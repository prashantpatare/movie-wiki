import React from "react";
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown";

function ViewSelector(props) {
  const options = [
    {
      id: 1,
      name: "Poster Card View",
      internal:'PosterCardView'
    },
    {
      id: 2,
      name: "Backdrop Card View",
      internal:'BackdropCardView'
    }
  ];

  function onChangeCallback(id){
     const selected = options.filter(optn => optn.id === id)
     props.onViewChange(selected[0].internal);
  }

  return <CustomDropdown options={options} label="View" onChangeCallback={onChangeCallback} />;
}

export default ViewSelector;
