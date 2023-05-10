import Swal from "sweetalert2";

const Home = () => {

  const handleAddUser = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name, email};
    // console.log(user);

    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        if(data.insertedId) {
          // alert('Users added successfully');
          Swal.fire({
            title: 'Successfully!',
            text: 'Users added successfully',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
        }
        form.reset();
      })
  }

  return (
    <div>
      <form onSubmit={handleAddUser} className="hero">
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
                <input type="text" name="name" placeholder="Name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name="email" placeholder="Email" className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary capitalize">Add User</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Home;