import axios from "axios";
import { useEffect, useState } from "react";

const UpdateEmp = ({ id, setShowUpdate }) => {
  const [user, setUser] = useState({
    name: "",
    age: 0,
    parent_id: "",
  });
  useEffect(() => {
    axios.get(`http://localhost:3000/users/${id}`).then((res) => {
      console.log("data inside update: ", res.data);
      setUser({
        ...user,
        name: res.data.name,
        age: res.data.age,
        parent_id: res.data.parent_id,
      });
    });
  }, []);
  // console.log("id on update page", id);
  const handleUpdate = (id) => {
    console.log("id inside update funct:", id);
    axios.patch(`http://localhost:3000/users/${id}`, user); ///with axios just URL and OBJECT
    window.location.reload();
  };
  const handleInput = () => {};
  const handleClose = () => {
    setShowUpdate(false);
  };
  console.log("id inside update emp component", id);
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 top-0 bg-[#E9E9E9] opacity-[80%]">
        {/* Outside area */}
      </div>
      <div className=" fixed top-[50%] left-[50%] w-[300px] h-[300px] border translate-x-[-50%] translate-y-[-50%] bg-gray-300 shadow-lg">
        {/* Inside Area */}
        <div className="mx-[25px] my-[29px] flex flex-col gap-3">
          <label htmlFor="name">Name</label>
          <input
            value={user.name}
            onChange={(e) => {
              console.log(e.target.value, user);
              setUser({ ...user, name: e.target.value });
            }}
            id="name"
            name="Name"
            placeholder="Enter name here..."
          />
          <label htmlFor="age">Age</label>
          <input
            value={user.age}
            onChange={(e) => {
              setUser({ ...user, age: e.target.value });
            }}
            id="age"
            name="Age"
            placeholder="Enter Age here.."
          />
          <label htmlFor="pid">Parent id</label>
          <input
            type="number"
            value={user.parent_id}
            onChange={(e) => {
              setUser({ ...user, parent_id: e.target.value });
            }}
            id="pid"
            name="parentId"
            placeholder="Enter parent id here.."
          />
        </div>
        <div className="flex justify-between">
          <button onClick={() => handleUpdate(id)}>Update</button>
          <button onClick={handleClose}>close</button>
        </div>
      </div>
    </>
  );
};

export default UpdateEmp;
