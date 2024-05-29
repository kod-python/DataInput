import React, { useState, FormEventHandler } from "react";
import { data } from "../CardsData/CardsData";
import { IoAddOutline } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Link from "next/link";
import Button from "../Button/Button";

const CardPage = () => {
  return (
    <div>
      <h1 className="text-center text-[2rem] text-gray-500">
        Information Page
      </h1>
<div className="flex flex-wrap items-center container mx-auto mt-[200px]">



{data.map((item) => (
        <div
          key={item.name}
          className="card w-96  bg-base-200 shadow-xl m-[40px] mx-auto"
        >
          <div className="card-body ">
            <h2 className="card-title">{item.name}</h2>

            <div>
              <Button />
            </div>
          </div>
        </div>
      ))}



</div>
    
    </div>
  );
};

export default CardPage;
