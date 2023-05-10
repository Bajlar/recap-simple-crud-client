import { useLoaderData } from "react-router-dom";
import SingleUser from "./SingleUser";
import { useState } from "react";
import Swal from "sweetalert2";

const Users = () => {
const users = useLoaderData();
const [allUsers, setAllUsers] = useState(users);
// console.log(users);
  
const handleDelete = (_id) => {
  // console.log('btn delete', _id);
  fetch(`http://localhost:5000/users/${_id}`, {
    method: 'DELETE'
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.deletedCount === 1) {
        // alert('User delete successfully');
        Swal.fire({
          title: 'Delete!',
          text: 'Users delete successfully',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
        const remaining = allUsers.filter(remove => remove._id !== _id);
        setAllUsers(remaining);
      }
    })
}

  return (
    <div className="text-center">
      <h2 className="text-4xl text-primary font-medium mt-4">Total Users: {allUsers.length}</h2>

      <div className="my-4">
        {
          allUsers.map(user => <SingleUser
            key={user._id}
            user={user}
            handleDelete={handleDelete}
          ></SingleUser>)
        }
      </div>
    </div>
  );
};

export default Users;