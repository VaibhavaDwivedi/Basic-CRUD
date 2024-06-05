import React from "react";
import { baseUrl } from "../EmployeePage";
import axios from "axios";

const AddEmp = ({ setShowAddDetail, empObject, setEmpObject }) => {
  //To close the pop up to add details
  const handleClose = () => {
    setShowAddDetail(false);
  };
  //To update the Inputs
  const handleInput = (e) => {
    console.log("name is:", e.target.name);
    console.log("data is:", e.target.value);
    setEmpObject((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleEmpData = async () => {
    // const res = await fetch(`http://localhost:3000/users`, {
    //   headers: { "Content-Type": "application/json" },
    //   method: "POST",
    //   body: JSON.stringify({
    //     _id: empObject.id,
    //     name: empObject.Name,
    //     age: empObject.Age,
    //     parent_id: empObject.parentId, // Foreign key for _id
    //   }),
    // })
    //   .then((response) => response.json())

    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // ********************  With axios don't need to give header and body just give the URL, OBJECT   **********************
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    try {
      const res = await axios
        .post(`http://localhost:3000/users`, {
          _id: empObject.id,
          name: empObject.Name,
          age: empObject.Age,
          parent_id: empObject.parentId, // Foreign key for _id
        })
        .then((data) => console.log(data));
    } catch (error) {
      console.log(error);
    }
    window.location.reload();
  };

  return (
    <>
      <div
        className="fixed bottom-0 left-0 right-0 top-0 bg-[#E9E9E9] opacity-[70%]"
        // onClick={setShowAddDetail(false)}
      ></div>
      <div className="fixed left-[50%] top-[50%] w-[300px] h-[300px] translate-x-[-50%] translate-y-[-50%] rounded-[8px] bg-[#FFFFFF] shadow-2xl">
        <div className="mx-[25px] my-[29px] flex flex-col gap-3">
          <label htmlFor="name">Name</label>
          <input
            onChange={(e) => handleInput(e)}
            id="name"
            name="Name"
            placeholder="Enter name here..."
          />
          <label htmlFor="age">Age</label>
          <input
            onChange={(e) => handleInput(e)}
            id="age"
            name="Age"
            placeholder="Enter Age here.."
          />
          <label htmlFor="pid">Parent id</label>
          <input
            onChange={(e) => handleInput(e)}
            id="parentId"
            name="parentId"
            placeholder="Enter parent id here.."
          />
        </div>
        <div className="flex gap-5">
          <button onClick={handleEmpData}>Add</button>
          <button onClick={handleClose}>Close</button>
        </div>
      </div>
    </>
  );
};

export default AddEmp;
