import React, { Fragment } from 'react';
import { FaStar } from "react-icons/fa";

const Star = ({ filled, onClick }) => {
  return (
    <Fragment>
        <FaStar
            color={filled ? "#ff2d55" : "#ddd"} 
            onClick={onClick} 
            Transition={"3s"}    
        />
    </Fragment>
  )
}

export default Star;