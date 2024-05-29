"use client";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoAddOutline } from "react-icons/io5";

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalClose, setModalClose] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleClose = () => {
    setModalClose(!isModalClose);
  };

  return (
    <div>
      <button onClick={toggleModal} className="btn btn-primary ">
        Add <IoAddOutline size={20} />
      </button>

      {isModalOpen && (
        <div className=" card-bodyh-[290px] w-[290px]  flex justify-center gap-2 mx-auto rounded">
          <form className="flex flex-col gap-5 pb-[40px] m-[20px] p-[20px]">
            <h2></h2>

            <div className="flex justify-end ">
            <IoClose size={20} />
                </div>
            
            <input
              type="text"
              placeholder="Add"
              className="pl-[10px] p-[10px] outline-blue-500"
            />

            <div className="flex justify-center">
              <button
                type="submit"
                className="btn btn-primary w-[100px] bg-gray-500 m-[10px]"
              >
                submit
              </button>
            </div>

            
          </form>
        </div>
      )}
    </div>
  );
};

export default Modal;
