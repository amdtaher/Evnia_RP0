import React from 'react';
import { FaStar } from "react-icons/fa";

const Star = ({ filled, onClick }) => {
  return (
    <>
        <FaStar
            color={filled ? "#ff2d55" : "#ddd"} 
            onClick={onClick} 
            Transition={"3s"}    
        />
    </>
  )
}

export default Star;