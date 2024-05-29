import React from "react";
import Link from "next/link";
import { IoAddOutline } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Modal from "../Modal/Modal";

const Button = () => {
  return (
    <div>
      <Link href="">
        <div className="card-actions justify-end flex items-center">
          <Modal /> 
          <FaEdit size={20} />
          <MdDeleteForever size={20} />
        </div>
      </Link>
    </div>
  );
};

export default Button;
