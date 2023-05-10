import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const loadedUser = useLoaderData();
  // console.log(loadedUser);

  const handleUpdateUser = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const updateUser = {name, email};
    console.log(updateUser);

    fetch(`http://localhost:5000/users/${loadedUser._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updateUser)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.modifiedCount === 1) {
        // alert('User update successfully')
        Swal.fire({
          title: 'Success!',
          text: 'Users updated successfully',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      }
    })
  }

  return (
    <div className="text-center">
      <h3 className="text-4xl text-primary font-medium mt-4">Update information of: {loadedUser.name}</h3>
      <form onSubmit={handleUpdateUser} className="hero">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" defaultValue={loadedUser.name} className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name="email" defaultValue={loadedUser.email} className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary capitalize">Update User</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Update;