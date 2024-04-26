import Button from "../Component/Button";

const DeletePopup = ({ id, setShowDelete }) => {
  console.log("id inside delete emp component", id);
  // const handleDeletedata = (id) => {
  //   console.log("id inside func", id);
  // };
  const handleDeletedata = async (id) => {
    console.log("id inside delete emp function", id);
    try {
      const res = await fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      // const response = await res.json();
      console.log("res", res, "id", id);
    } catch (error) {
      console.log(error);
    }
    window.location.reload();
  };
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 bottom-0 opacity-[80%] bg-slate-300"></div>
      <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%] bg-slate-500">
        Are you sure you wanted to delete this?
        <div className="flex justify-between">
          <Button onClick={() => handleDeletedata(id)}>Yes</Button>
          <Button onClick={() => setShowDelete(false)}>No</Button>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;
