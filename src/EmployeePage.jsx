import { Link } from "react-router-dom";
import AddEmp from "./Modals/AddEmp";
import { useState, useEffect } from "react";
import axios from "axios";
import UpdateEmp from "./Modals/UpdateEmp";
import DeletePopup from "./Modals/DeletePopup";

export const baseUrl =
  "https://crudcrud.com/api/e4be700af5594ff5b6d712d7d846e9ee/employee";

const EmployeePage = () => {
  const [users, setUsers] = useState();
  const [error, setError] = useState(false);
  const [id, setId] = useState();
  const [showAddDetail, setShowAddDetail] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [empObject, setEmpObject] = useState({});

  //Api call For listing data
  useEffect(() => {
    //+++++++++++++++++++++++++++ This one is with a real api  ++++++++++++++++++++++++++++++//
    // const fetchEmp = async () => {
    //   try {
    //     const res = await fetch(
    //       baseUrl
    //     );
    //     const response = await res.json();
    //     console.log(response);
    //     // setUsers(response);
    //   } catch (error) {
    //     setError(true);
    //     // console.log(error);
    //   }
    // };
    // fetchEmp();

    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
    //++++++++++++++++++++++++++++++++++    Api with json server from db.json         +++++++++++++++++++++++++//
    axios.get("http://localhost:3000/users").then((res) => {
      console.log("data: ", res.data);
      setUsers(res.data);
    });
  }, []);

  //To update Employee detail
  const handleUpdate = async (e) => {
    // console.log("id", e.target.id);
    // try {
    //   const response = await fetch(
    //     `https://dummy.restapiexample.com/api/v1/delete/${e.target.id}`,
    //     {
    //       method: "PATCH",
    //       body: JSON.stringify({
    //         name: empObject.Name,
    //         age: empObject.Age,
    //       }),
    //       headers: {
    //         "Content-type": "application/json; charset=UTF-8",
    //       },
    //     }
    //   );
    //   const data = await response.json();
    //   // enter you logic when the fetch is successful
    //   console.log(data);
    // } catch (error) {
    //   // enter your logic for when there is an error (ex. error toast)
    //   console.log(error);
    // }
    // window.location.reload();
  };
  //To Show pop-up for adding new Employee
  const showEmpAddition = () => {
    setShowAddDetail(true);
  };
  //To Show pop-up for updating existing Employee
  const showUpdateEmp = (e) => {
    setId(e.target.id);
    setShowUpdate(true);
    console.log("on update button click", e.target.id);
  };

  //Api call to Delete an Employee
  const handleDeletePopup = async (e) => {
    setId(e.target.id);
    setShowDelete(true);
    console.log("on delete button click", e);
  };

  if (error) {
    return <h1>We got error...</h1>;
  }

  return (
    <>
      {/* {JSON.stringify(users)} */}
      <div className="flex flex-col gap-3">
        <h1 className="text-center font-bold">Users</h1>
        <table>
          <thead>
            <tr className="border">
              <th className="border">id</th>
              <th className="border">Name</th>
              <th className="border">Age</th>
              <th className="border">Parent id</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((item) => {
                return (
                  <tr className="border" key={item.id}>
                    <td className="border">{item.id}</td>
                    <td className="border">{item.name}</td>
                    <td className="border">{item.age}</td>
                    <td className="border">{item.parent_id}</td>
                    <td className="flex gap-5">
                      {/* Button to Update Employee data */}
                      <button
                        id={item.id}
                        // onClick={(e) => handleUpdate(e)}
                        className="bg-green-500"
                        onClick={(e) => showUpdateEmp(e)}
                      >
                        Update
                      </button>
                      {/* Button to Delete Employee data */}
                      <button
                        id={item.id}
                        onClick={(e) => handleDeletePopup(e)}
                        className="bg-red-500"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {/* Button To add new users */}
        <button
          className="font-bold border border-red-700 w-[250px] self-center"
          onClick={showEmpAddition}
        >
          + Add new user
        </button>
        {/* Pop-up to confirm delete */}
        {showDelete && <DeletePopup id={id} setShowDelete={setShowDelete} />}
        {/* Pop-up to update data */}
        {showUpdate && <UpdateEmp id={id} setShowUpdate={setShowUpdate} />}
        {/* Pop-up to Enter data */}
        {showAddDetail && (
          <AddEmp
            empObject={empObject}
            setEmpObject={setEmpObject}
            setShowAddDetail={setShowAddDetail}
          />
        )}
      </div>
    </>
  );
};

export default EmployeePage;
